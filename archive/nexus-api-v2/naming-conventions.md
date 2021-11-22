```
Example names for common Azure resource types
The following section provides some example names for common Azure resource types in an enterprise cloud deployment.
 Note
Some of these example names use a three-digit padding scheme (###), such as mktg-prod-001.
Padding improves readability and sorting of assets when those assets are managed in a configuration management database (CMDB), IT Asset Management tool, or traditional accounting tools. When the deployed asset is managed centrally as part of a larger inventory or portfolio of IT assets, the padding approach aligns with interfaces those systems use to manage inventory naming.
Unfortunately, the traditional asset padding approach can prove problematic in infrastructure-as-code approaches which may iterate through assets based on a non-padded number. This approach is common during deployment or automated configuration management tasks. Those scripts would have to routinely strip the padding and convert the padded number to a real number, which slows script development and run time.
Choose an approach that's suitable for your organization. The padding shown here illustrates the importance of using a consistent approach to inventory numbering, rather than which approach is superior. Before choosing a numbering scheme (with or without padding), evaluate what will affect long-term operations more: CMDB/asset management solutions or code-based inventory management. Then consistently follow the padding option that best fits your operational needs.
Example names: General
Asset type	Scope	Format and examples
Management group	Business unit and/or 
environment type	mg-<business unit>[-<environment type>] 

mg-mktg
mg-hr
mg-corp-prod
mg-fin-client
Subscription	Account / enterprise agreement	<business unit>-<subscription type>-<###> 

mktg-prod-001
corp-shared-001
fin-client-001
Resource group	Subscription	rg-<app or service name>-<subscription type>-<###> 

rg-mktgsharepoint-prod-001
rg-acctlookupsvc-shared-001
rg-ad-dir-services-shared-001
API management service instance	Global	apim-<app or service name> 

apim-navigator-prod
Managed identity	Resource group	id-<app or service name>-<environment type>-<region name>-<###> 

id-appcn-keda-prod-eastus2-001
Example names: Networking
Asset type	Scope	Format and examples
Virtual network	Resource group	vnet-<subscription type>-<region>-<###> 

vnet-shared-eastus2-001
vnet-prod-westus-001
vnet-client-eastus2-001
Subnet	Virtual network	snet-<subscription>-<region>-<###> 

snet-shared-eastus2-001
snet-prod-westus-001
snet-client-eastus2-001
Network interface (NIC)	Resource group	nic-<##>-<vm name>-<subscription>-<###> 

nic-01-dc1-shared-001
nic-02-vmhadoop1-prod-001
nic-02-vmtest1-client-001
Public IP address	Resource group	pip-<vm name or app name>-<environment>-<region>-<###> 

pip-dc1-shared-eastus2-001
pip-hadoop-prod-westus-001
Load balancer	Resource group	lb-<app name or role>--<###> 

lb-navigator-prod-001
lb-sharepoint-dev-001
Network security group (NSG)	Subnet or NIC	nsg-<policy name or app name>-<###> 

nsg-weballow-001
nsg-rdpallow-001
nsg-sqlallow-001
nsg-dnsblocked-001
Local network gateway	Virtual gateway	lgw-<subscription type>-<region>-<###> 

lgw-shared-eastus2-001
lgw-prod-westus-001
lgw-client-eastus2-001
Virtual network gateway	Virtual network	vgw-<subscription type>-<region>-<###> 

vgw-shared-eastus2-001
vgw-prod-westus-001
vgw-client-eastus2-001
Site-to-Site connection	Resource group	cn-<local gateway name>-to-<virtual gateway name> 

cn-lgw-shared-eastus2-001-to-vgw-shared-eastus2-001
cn-lgw-shared-eastus2-001-to-vgw-shared-westus-001
VPN connection	Resource group	cn-<subscription1>-<region1>-to-<subscription2>-<region2>- 

cn-shared-eastus2-to-shared-westus
cn-prod-eastus2-to-prod-westus
Route table	Resource group	route-<route table name> 

route-navigator
route-sharepoint
DNS label	Global	<DNS A record for VM>.<region>.cloudapp.azure.com 

dc1.westus.cloudapp.azure.com
web1.eastus2.cloudapp.azure.com
Example names: Compute and Web
Asset type	Scope	Format and examples
Virtual machine	Resource group	vm<policy name or app name><###> 

vmnavigator001
vmsharepoint001
vmsqlnode001
vmhadoop001
VM storage account	Global	stvm<performance type><app name or prod name><region><###> 

stvmstcoreeastus2001
stvmpmcoreeastus2001
stvmstplmeastus2001
stvmsthadoopeastus2001
Web app	Global	app-<app name>-<environment>-<###>.azurewebsites.net 

app-navigator-prod-001.azurewebsites.net
app-accountlookup-dev-001.azurewebsites.net
Function app	Global	func-<app name>-<environment>-<###>.azurewebsites.net 

func-navigator-prod-001.azurewebsites.net
func-accountlookup-dev-001.azurewebsites.net
Cloud service	Global	cld-<app name>-<environment>-<###>.cloudapp.net} 

cld-navigator-prod-001.azurewebsites.net
cld-accountlookup-dev-001.azurewebsites.net
Notification Hubs namespace	Global	ntfns-<app name>-<environment> 

ntfns-navigator-prod
ntfns-emissions-dev
Notification hub	Notification Hubs namespace	ntf-<app name>-<environment> 

ntf-navigator-prod
ntf-emissions-dev
Example names: Databases
Asset type	Scope	Format and examples
Azure SQL Database server	Global	sql-<app name>-<environment> 

sql-navigator-prod
sql-emissions-dev
Azure SQL database	Azure SQL Database	sqldb-<database name>-<environment> 

sqldb-users-prod
sqldb-users-dev
Azure Cosmos DB database	Global	cosmos-<app name>-<environment> 

cosmos-navigator-prod
cosmos-emissions-dev
Azure Cache for Redis instance	Global	redis-<app name>-<environment> 

redis-navigator-prod
redis-emissions-dev
MySQL database	Global	mysql-<app name>-<environment> 

mysql-navigator-prod
mysql-emissions-dev
PostgreSQL database	Global	psql-<app name>-<environment> 

psql-navigator-prod
psql-emissions-dev
Azure Synapse Analytics	Global	syn-<app name>-<environment> 

syn-navigator-prod
syn-emissions-dev
SQL Server Stretch Database	Azure SQL Database	sqlstrdb-<app name>-<environment> 

sqlstrdb-navigator-prod
sqlstrdb-emissions-dev
Example names: Storage
Asset type	Scope	Format and examples
Storage account (general use)	Global	st<storage name><###> 

stnavigatordata001
stemissionsoutput001
Storage account (diagnostic logs)	Global	stdiag<first 2 letters of subscription name and number><region><###> 

stdiagsh001eastus2001
stdiagsh001westus001
Azure StorSimple	Global	ssimp<app name>-<environment> 

ssimpnavigatorprod
ssimpemissionsdev
Azure Container Registry	Global	cr<app name><environment><###> 

crnavigatorprod001
Example names: AI and machine learning
Asset type	Scope	Format and examples
Azure Cognitive Search	Global	srch-<app name>-<environment> 

srch-navigator-prod
srch-emissions-dev
Azure Cognitive Services	Resource group	cog-<app name>-<environment> 

cog-navigator-prod
cog-emissions-dev
Azure Machine Learning workspace	Resource group	mlw-<app name>-<environment> 

mlw-navigator-prod
mlw-emissions-dev
Example names: Analytics and IoT
Asset type	Scope	Format and examples
Azure Data Factory	Global	adf-<app name>-<environment> 

adf-navigator-prod
adf-emissions-dev
Azure Stream Analytics	Resource group	asa-<app name>-<environment> 

asa-navigator-prod
asa-emissions-dev
Data Lake Analytics account	Global	dla<app name><environment> 

dlanavigatorprod
dlanavigatorprod
Data Lake Storage account	Global	dls<app name><environment> 

dlsnavigatorprod
dlsemissionsdev
Event hub	Global	evh-<app name>-<environment> 

evh-navigator-prod
evh-emissions-dev
HDInsight - HBase cluster	Global	hbase-<app name>-<environment> 

hbase-navigator-prod
hbase-emissions-dev
HDInsight - Hadoop cluster	Global	hadoop-<app name>-<environment> 

hadoop-navigator-prod
hadoop-emissions-dev
HDInsight - Spark cluster	Global	spark-<app name>-<environment> 

spark-navigator-prod
spark-emissions-dev
IoT hub	Global	iot-<app name>-<environment> 

iot-navigator-prod
iot-emissions-dev
Power BI Embedded	Global	pbi-<app name>-<environment> 

pbi-navigator-prod
pbi-emissions-dev
Example names: Integration
Asset type	Scope	Format and Examples
Service Bus	Global	sb-<app name>-<environment>.servicebus.windows.net 

sb-navigator-prod
sb-emissions-dev
Service Bus queue	Service Bus	sbq-<query descriptor> 

sbq-messagequery
Service Bus topic	Service Bus	sbt-<query descriptor> 

sbt-messagequery

```
