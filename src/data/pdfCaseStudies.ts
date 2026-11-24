import { Question } from '../types/quiz';

export type PdfQuestionSeed = Omit<Question, 'number' | 'source'>;

export const CONTOSO_CASE_STUDY_JA = `【概要】
Contoso, Ltd. は、サンフランシスコに本社、ダラスに支社を置くコンサルティング会社です。
Contoso には、Azure に接続されたオンプレミス サーバー、Microsoft 365 E5 サブスクリプション、Sub1 という名前の Azure サブスクリプションを含むハイブリッド環境があります。

【既存環境：Microsoft Entra テナント】
Contoso には contoso.com という名前の Microsoft Entra テナントがあり、次のユーザーが含まれています。

| Name | Role |
| :--- | :--- |
| Admin1 | Global Administrator |
| Admin2 | AI Administrator |
| Admin3 | Privileged Role Administrator |
| User1 | None |

【既存環境：オンプレミス環境】
オンプレミス ネットワークには、contoso.com と同期する Active Directory Domain Services (AD DS) フォレストがあります。このフォレストには、Windows Server を実行する Server1 という名前のサーバーがあります。

【既存環境：Azure サブスクリプション】
Sub1 には、次のストレージ アカウントがあります。

| Name | Azure region | Performance | Premium account type |
| :--- | :--- | :--- | :--- |
| storage1 | West US | Standard | Not applicable |
| storage2 | East US | Premium | Block blobs |
| storage3 | East US | Premium | File shares |
| storage4 | East US | Premium | Page blobs |

Sub1 には、次の仮想ネットワークがあります。

| Name | Azure region | Subnet |
| :--- | :--- | :--- |
| VNet1 | West US | Subnet1, Subnet2 |
| VNet2 | East US | Subnet3 |
| VNet3 | West US | Subnet4 |

Sub1 には、次の仮想マシンがあります。

| Name | Connected to | Network security group (NSG) |
| :--- | :--- | :--- |
| VM1 | Subnet1 | NSG1 |
| VM2 | Subnet2 | NSG2 |
| VM3 | Subnet3 | NSG3 |
| VM4 | Subnet4 | NSG4 |

VM1 のネットワーク インターフェイスは、ASG1 という名前のアプリケーション セキュリティ グループに関連付けられています。
Sub1 には、次のリソースがあります。

| Name | Azure region | Description |
| :--- | :--- | :--- |
| sql1 | West US | Azure SQL server |
| AKS1 | East US | Azure Kubernetes Service (AKS) cluster |
| Vault1 | East US | Azure key vault |

Vault1 には、次のオブジェクトが保存されています。

| Name | Type | Status |
| :--- | :--- | :--- |
| Key1 | Key | Disabled |
| Secret1 | Secret | Enabled |
| Certificate1 | Certificate | Disabled |
| Certificate2 | Certificate | Enabled |

【既存環境：Privileged Identity Management (PIM) の構成】
Privileged Identity Management (PIM) を使用して特権ロールを管理しています。PIM のロール設定は次のとおりです。

| Setting | AI Administrator role | Agent ID Developer role |
| :--- | :--- | :--- |
| Activation maximum duration (hours) | 1 Day(s) | 1 Day(s) |
| Require approval to activate | Enabled | Disabled |
| Approvers | None | None |
| Expire eligible assignments after | 1 Month(s) | 1 Month(s) |
| Expire active assignments after | 15 Day(s) | 15 Day(s) |

【既存環境：Microsoft Sentinel の構成】
Contoso には、次のテーブルを含む Microsoft Sentinel ワークスペースがあります。

| Name | Tier |
| :--- | :--- |
| DeviceInfo | Analytics |
| DnsEvents | Analytics |

【要件：予定されている変更】
Contoso は、次の変更を実施する予定です。
・AKS1 を Vault1 と統合する。
・サポートされるすべてのストレージで Microsoft Entra Kerberos 認証を有効にする。
・Azure portal を使用して sql1 の監査を構成し、監査ログを一元化された場所に保存する。

【要件：技術要件】
Contoso は、次の技術要件を定めています。
・ファイル整合性監視を使用して Server1 を保護する。
・Microsoft Defender for Cloud を使用して AKS1 を保護する。
・階層を変更せずに、Microsoft Sentinel がサポートする最長期間、データを保持するように構成する。
・認証と暗号化に使用するオブジェクトを Vault1 に保存し、可能な場合は Vault1 がそのオブジェクトを 30 日ごとに再生成するようにする。`;

export const CONTOSO_CASE_STUDY_EN = `Overview: Contoso, Ltd. is a consulting company with a main office in San Francisco and a branch office in Dallas. Contoso has a hybrid environment including on-premises servers connected to Azure, a Microsoft 365 E5 subscription, and an Azure subscription named Sub1.

Microsoft Entra tenant (contoso.com):
- Admin1: Global Administrator | Admin2: AI Administrator | Admin3: Privileged Role Administrator | User1: None

On-premises: AD DS forest synced with contoso.com containing Server1 (Windows Server).

Azure Subscription (Sub1):
- Storage accounts: storage1 (West US, Standard, Not applicable), storage2 (East US, Premium, Block blobs), storage3 (East US, Premium, File shares), storage4 (East US, Premium, Page blobs).
- Virtual networks: VNet1 (West US: Subnet1, Subnet2), VNet2 (East US: Subnet3), VNet3 (West US: Subnet4).
- Virtual machines: VM1 (Subnet1, NSG1, NIC in ASG1), VM2 (Subnet2, NSG2), VM3 (Subnet3, NSG3), VM4 (Subnet4, NSG4).
- Resources: sql1 (West US, Azure SQL server), AKS1 (East US, AKS cluster), Vault1 (East US, Azure Key Vault).
- Vault1 objects: Key1 (Key, Disabled), Secret1 (Secret, Enabled), Certificate1 (Certificate, Disabled), Certificate2 (Certificate, Enabled).

PIM configuration:
- AI Administrator role: Activation max duration = 1 Day(s), Require approval = Enabled, Approvers = None, Expire eligible = 1 Month(s), Expire active = 15 Day(s).
- Agent ID Developer role: Activation max duration = 1 Day(s), Require approval = Disabled, Approvers = None, Expire eligible = 1 Month(s), Expire active = 15 Day(s).

Microsoft Sentinel workspace tables: DeviceInfo (Analytics), DnsEvents (Analytics).

Planned changes & Technical requirements:
- Integrate AKS1 with Vault1; enable Microsoft Entra Kerberos auth on supported storage; configure sql1 auditing via Azure portal to a centralized location.
- Protect Server1 with File Integrity Monitoring; protect AKS1 with Defender for Cloud; retain Sentinel data for the maximum period supported without changing tiers; store auth/encryption objects in Vault1 with automatic regeneration every 30 days where possible.`;

export const FABRIKAM_CASE_STUDY_JA = `【概要】
Fabrikam, Inc. はコンサルティング会社です。本社はニューヨーク市に、支社はアムステルダムとシンガポールにあります。
【既存の環境：ネットワーク環境】
オンプレミス ネットワークには、各オフィスにデータセンターがあります。
【既存の環境：クラウド環境】
Fabrikam には、Sub1 と Sub2 という2つの Azure サブスクリプションと、Microsoft 365 E5 ライセンスを含む Microsoft 365 サブスクリプションがあります。
すべてのサブスクリプションは、次の表に示す ID を含む fabrikam.com という Microsoft Entra テナントに関連付けられています。

| 名前 | 種類 | Microsoft Entra ロール | Sub1 の Azure ロール割り当て |
| :--- | :--- | :--- | :--- |
| Admin1 | ユーザー | Privileged Authentication Administrator | Resource Policy Contributor |
| Admin2 | ユーザー | Compliance Administrator | User Access Administrator |
| Admin3 | ユーザー | Authentication Administrator | Contributor |
| Admin4 | ユーザー | Global Administrator | なし |
| User1 | ユーザー | なし | Reader |
| AKS1 | システム割り当てマネージド ID | なし | なし |
| ID1 | ユーザー割り当てマネージド ID | なし | なし |

テナントには、次の表に示すグループがあります。

| 名前 | 種類 | ロールの割り当てが許可される (Role assignments allowed) |
| :--- | :--- | :--- |
| Group1 | セキュリティ | はい |
| Group2 | セキュリティ | いいえ |
| Group3 | Microsoft 365 | はい |
| Group4 | Microsoft 365 | いいえ |

すべてのデバイスは Microsoft Intune に登録されています。

【既存の環境：Sub1 のリソース】
Sub1 には、次の表に示すリソースを含む RG1 というリソース グループがあります。

| 名前 | 説明 | 場所 |
| :--- | :--- | :--- |
| SQLServer1 | Azure SQL Database 論理サーバー | East US |
| SQLdb1 | SQLServer1 上のデータベース | East US |
| VM1 | 仮想マシン | East US |
| AKS1 | Azure Kubernetes Service (AKS) クラスター | East US |
| Registry1 | Azure コンテナー レジストリ | East US |
| storage1 | ストレージ アカウント | East US |
| AKV1 | Azure Key Vault | East US |

SQLServer1 は Microsoft SQL Server 認証を使用します。
Sub1 には WAF1 という Azure Web Application Firewall (WAF) があり、次の種類のルール セットがあります。
・Bot Manager 1.1
・Azure-managed Default Rule Set (DRS)
Sub1 には、Microsoft Defender for Cloud で次のコンプライアンス標準が割り当てられています。
・NIST SP 800-53 Rev. 4
・Microsoft cloud security benchmark (MCSB)
・System and Organization Controls (SOC) 2 Type 2

【既存の環境：Sub2 のリソース】
Sub2 には RG2 というリソース グループがあります。

【予定されている変更と要件：予定されている変更】
Fabrikam は次の変更を実装する予定です。
・RG1 にキー コンテナーをデプロイする：AKV2 (West Europe)、AKV3 (Central US)、AKV4 (East US)
・RG2 にキー コンテナーをデプロイする：AKV5 (East US)
・VM1 が storage1 からデータを読み取るように構成する。
・関数アプリを作成する：Fa1 (Flex Consumption)、Fa2 (Consumption)、Fa3 (Dedicated)
・WAF1 に、要求の場所に基づくレート制限ルールを実装する。
・Defender for Cloud で NIST SP 800-53 Rev. 5 コンプライアンス標準を有効にする。
・Azure Table storage をサポートする storage2 という新しいストレージ アカウントを作成する。
・データベース管理者が SQLdb1 にアクセスするときに、多要素認証 (MFA) を適用する。
・次の表に示すとおり、オンプレミス ネットワークへの ExpressRoute 回線を実装する。

| 名前 | 場所 | デプロイの種類 |
| :--- | :--- | :--- |
| ER1 | West Europe | 接続プロバイダーを使用する ExpressRoute |
| ER2 | West Europe | 接続プロバイダーを使用する ExpressRoute Metro |
| ER3 | East US | ExpressRoute Direct |
| ER4 | Southeast Asia | ExpressRoute Metro Direct |

・RG1 に対し、サポートされるグループに Contributor ロールを割り当てる、新しい Privileged Identity Management (PIM) の有資格ロール割り当てを作成する。

【予定されている変更と要件：技術要件】
Fabrikam には次の技術要件があります。
・VM1 が削除された場合、VM1 のアクセス許可は自動的に削除されなければならない。
・AKS1 マネージド ID は Registry1 からイメージをプルすることのみでなければならない。
・ID1 マネージド ID は Registry1 にイメージをプッシュし、そこからプルできなければならない。
・ストレージ アカウント内のすべてのデータは、Fabrikam が管理するキーを使用して暗号化されなければならない。
・関数アプリからオンプレミス ネットワークへのすべての送信トラフィックは、ExpressRoute 回線を使用する必要がある。
・オンプレミス ネットワークと Azure 環境との間の ExpressRoute 接続は、レイヤー 2 またはレイヤー 3 の暗号化を使用して暗号化する必要がある。`;

export const FABRIKAM_CASE_STUDY_EN = `Overview: Fabrikam, Inc. is a consulting company with headquarters in New York City and branch offices in Amsterdam and Singapore. It has Sub1 and Sub2 Azure subscriptions and a Microsoft 365 E5 subscription linked to the fabrikam.com Microsoft Entra tenant.

Identities (Microsoft Entra role / Sub1 Azure role):
- Admin1 (User): Privileged Authentication Administrator / Resource Policy Contributor
- Admin2 (User): Compliance Administrator / User Access Administrator
- Admin3 (User): Authentication Administrator / Contributor
- Admin4 (User): Global Administrator / None
- User1 (User): None / Reader
- AKS1 (System-assigned MI): None / None
- ID1 (User-assigned MI): None / None

Groups: Group1 (Security, Role assignments allowed: Yes), Group2 (Security, No), Group3 (Microsoft 365, Yes), Group4 (Microsoft 365, No). All devices are enrolled in Microsoft Intune.

Sub1 Resources (RG1, East US): SQLServer1 (Azure SQL logical server using SQL auth), SQLdb1, VM1, AKS1, Registry1 (ACR), storage1, AKV1. WAF1 has Bot Manager 1.1 and Azure-managed DRS. Defender for Cloud standards: NIST SP 800-53 Rev. 4, MCSB, SOC 2 Type 2. Sub2 has RG2.

Planned Changes & Requirements:
- Deploy Key Vaults in RG1: AKV2 (West Europe), AKV3 (Central US), AKV4 (East US); in RG2: AKV5 (East US).
- Configure VM1 to read storage1 (permissions auto-deleted when VM1 is deleted).
- AKS1 MI: pull only from Registry1; ID1 MI: push & pull Registry1.
- Function apps: Fa1 (Flex Consumption), Fa2 (Consumption), Fa3 (Dedicated); all outbound traffic to on-prem via ExpressRoute.
- WAF1 location-based rate limiting; enable NIST SP 800-53 Rev. 5 in Defender for Cloud; create storage2 supporting Table storage (all data encrypted with customer-managed keys).
- Enforce MFA for database admins accessing SQLdb1.
- ExpressRoute circuits: ER1 (West Europe, provider), ER2 (West Europe, Metro provider), ER3 (East US, ExpressRoute Direct), ER4 (Southeast Asia, ExpressRoute Metro Direct) — encrypted at Layer 2 or Layer 3.
- PIM eligible Contributor assignment on RG1 for supported groups.`;
