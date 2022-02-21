https://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html

In order to understand what TCP keepalive (which we will just call keepalive) does, you need do nothing more than read the name: keep TCP alive. This means that you will be able to check your connected socket (also known as TCP sockets), and determine whether the connection is still up and running or if it has broken.

2.1. What is TCP keepalive?
The keepalive concept is very simple: when you set up a TCP connection, you associate a set of timers. Some of these timers deal with the keepalive procedure. When the keepalive timer reaches zero, you send your peer a keepalive probe packet with no data in it and the ACK flag turned on. You can do this because of the TCP/IP specifications, as a sort of duplicate ACK, and the remote endpoint will have no arguments, as TCP is a stream-oriented protocol. On the other hand, you will receive a reply from the remote host (which doesn't need to support keepalive at all, just TCP/IP), with no data and the ACK set.

If you receive a reply to your keepalive probe, you can assert that the connection is still up and running without worrying about the user-level implementation. In fact, TCP permits you to handle a stream, not packets, and so a zero-length data packet is not dangerous for the user program.

This procedure is useful because if the other peers lose their connection (for example by rebooting) you will notice that the connection is broken, even if you don't have traffic on it. If the keepalive probes are not replied to by your peer, you can assert that the connection cannot be considered valid and then take the correct action.

2.2. Why use TCP keepalive?
You can live quite happily without keepalive, so if you're reading this, you may be trying to understand if keepalive is a possible solution for your problems. Either that or you've really got nothing more interesting to do instead, and that's okay too. :)

Keepalive is non-invasive, and in most cases, if you're in doubt, you can turn it on without the risk of doing something wrong. But do remember that it generates extra network traffic, which can have an impact on routers and firewalls.

In short, use your brain and be careful.

In the next section we will distinguish between the two target tasks for keepalive:

Checking for dead peers

Preventing disconnection due to network inactivity

2.3. Checking for dead peers
Keepalive can be used to advise you when your peer dies before it is able to notify you. This could happen for several reasons, like kernel panic or a brutal termination of the process handling that peer. Another scenario that illustrates when you need keepalive to detect peer death is when the peer is still alive but the network channel between it and you has gone down. In this scenario, if the network doesn't become operational again, you have the equivalent of peer death. This is one of those situations where normal TCP operations aren't useful to check the connection status.

Think of a simple TCP connection between Peer A and Peer B: there is the initial three-way handshake, with one SYN segment from A to B, the SYN/ACK back from B to A, and the final ACK from A to B. At this time, we're in a stable status: connection is established, and now we would normally wait for someone to send data over the channel. And here comes the problem: unplug the power supply from B and instantaneously it will go down, without sending anything over the network to notify A that the connection is going to be broken. A, from its side, is ready to receive data, and has no idea that B has crashed. Now restore the power supply to B and wait for the system to restart. A and B are now back again, but while A knows about a connection still active with B, B has no idea. The situation resolves itself when A tries to send data to B over the dead connection, and B replies with an RST packet, causing A to finally to close the connection.

Keepalive can tell you when another peer becomes unreachable without the risk of false-positives. In fact, if the problem is in the network between two peers, the keepalive action is to wait some time and then retry, sending the keepalive packet before marking the connection as broken.


    _____                                                     _____
|     |                                                   |     |
|  A  |                                                   |  B  |
|_____|                                                   |_____|
^                                                         ^
|--->--->--->-------------- SYN -------------->--->--->---|
|---<---<---<------------ SYN/ACK ------------<---<---<---|
|--->--->--->-------------- ACK -------------->--->--->---|
|                                                         |
|                                       system crash ---> X
|
|                                     system restart ---> ^
|                                                         |
|--->--->--->-------------- PSH -------------->--->--->---|
|---<---<---<-------------- RST --------------<---<---<---|
|                                                         |


2.4. Preventing disconnection due to network inactivity
The other useful goal of keepalive is to prevent inactivity from disconnecting the channel. It's a very common issue, when you are behind a NAT proxy or a firewall, to be disconnected without a reason. This behavior is caused by the connection tracking procedures implemented in proxies and firewalls, which keep track of all connections that pass through them. Because of the physical limits of these machines, they can only keep a finite number of connections in their memory. The most common and logical policy is to keep newest connections and to discard old and inactive connections first.

Returning to Peers A and B, reconnect them. Once the channel is open, wait until an event occurs and then communicate this to the other peer. What if the event verifies after a long period of time? Our connection has its scope, but it's unknown to the proxy. So when we finally send data, the proxy isn't able to correctly handle it, and the connection breaks up.

Because the normal implementation puts the connection at the top of the list when one of its packets arrives and selects the last connection in the queue when it needs to eliminate an entry, periodically sending packets over the network is a good way to always be in a polar position with a minor risk of deletion.


    _____           _____                                     _____
|     |         |     |                                   |     |
|  A  |         | NAT |                                   |  B  |
|_____|         |_____|                                   |_____|
^               ^                                         ^
|--->--->--->---|----------- SYN ------------->--->--->---|
|---<---<---<---|--------- SYN/ACK -----------<---<---<---|
|--->--->--->---|----------- ACK ------------->--->--->---|
|               |                                         |
|               | <--- connection deleted from table      |
|               |                                         |
|--->- PSH ->---| <--- invalid connection                 |
|               |                                         |


Prev	Home	Next
Introduction	 	Using TCP keepalive under Linux