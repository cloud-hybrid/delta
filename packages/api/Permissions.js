import Buffer from "buffer";

const Permissions = {};

Permissions.A = 0x0000000001; // (1 << 0)
Permissions.B = 0x0000000002; // (1 << 1)
Permissions.C = 0x0000000004; // (1 << 2)
Permissions.D = 0x0000000008; // (1 << 3)
Permissions.E = 0x0000000010; // (1 << 4)
Permissions.Read = 0x0000000020; // (1 << 5)
Permissions.G = 0x0000000040; // (1 << 6)
Permissions.H = 0x0000000080; // (1 << 7)
Permissions.I = 0x0000000100; // (1 << 8)
Permissions.J = 0x0000000200; // (1 << 9)
Permissions.K = 0x0000000400; // (1 << 10)
Permissions.L = 0x0000000800; // (1 << 11)
Permissions.M = 0x0000001000; // (1 << 12)
Permissions.Write = 0x0000002000; // (1 << 13)
Permissions.O = 0x0000004000; // (1 << 14)
Permissions.P = 0x0000008000; // (1 << 15)
Permissions.Q = 0x0000010000; // (1 << 16)
Permissions.R = 0x0000020000; // (1 << 17)
Permissions.S = 0x0000040000; // (1 << 18)
Permissions.T = 0x0000080000; // (1 << 19)
Permissions.U = 0x0000100000; // (1 << 20)
Permissions.V = 0x0000200000; // (1 << 21)
Permissions.W = 0x0000400000; // (1 << 22)
Permissions.X = 0x0000800000; // (1 << 23)
Permissions.Y = 0x0001000000; // (1 << 24)
Permissions.Admin = 0x0002000000; // (1 << 25)
Permissions.AA = 0x0004000000; // (1 << 26)
Permissions.AB = 0x0008000000; // (1 << 27)
Permissions.AC = 0x0010000000; // (1 << 28)
Permissions.AD = 0x0020000000; // (1 << 29)
Permissions.AE = 0x0040000000; // (1 << 30)
Permissions.AF = 0x0080000000; // (1 << 31)
Permissions.God = 0x0100000000; // (1 << 32)

/// Permissions that can Read & Write

const RW = Permissions.Read | Permissions.Write;
const Admin = Permissions.Admin;

console.debug(RW);

console.debug((RW & Permissions.Read) === Permissions.Read);
console.debug((Admin & Permissions.Read) === Permissions.Read);
