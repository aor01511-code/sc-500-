import { PdfQuestionSeed } from './pdfCaseStudies';

export const PDF_QUESTIONS_PART5: PdfQuestionSeed[] = [
  {
    id: 'pdf-q81',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '複数 Web アプリによる Key Vault 接続でのマネージド ID とデータロール最小特権',
    titleEn: 'Minimizing Identities and Least Privilege Data Roles for Multiple Web Apps Accessing Key Vault',
    scenarioJa: `データ プレーンの認可にロールベースのアクセス制御 (RBAC) を使用する、KV1 という名前の Azure Key Vault があります。KV1 にシークレットとして格納された SQL 接続文字列を取得する Azure App Service Web アプリが複数あります。
これらの Web アプリが KV1 にアクセスできるようにする必要があります。ソリューションでは、必要な ID の数を最小限に抑え、最小特権の原則に従う必要があります。`,
    scenarioEn: `You have an Azure Key Vault named KV1 that uses Role-Based Access Control (RBAC) for data plane authorization. Multiple Azure App Service web apps retrieve a SQL connection string stored as a secret in KV1.
You need to ensure the web apps can access KV1 while minimizing the number of required identities and following the principle of least privilege.`,
    questionJa: '使用するワークロード ID の種類を1つと、Web アプリ用に KV1 に割り当てるデータ プレーン ロールを1つ、計2つ選んでください。',
    questionEn: 'Which workload identity type and which data plane role on KV1 should you assign for the web apps? (Choose two.)',
    requiredSelections: 2,
    options: [
      {
        id: 'A',
        textJa: 'サービス プリンシパル オブジェクト (Service principal object)',
        textEn: 'Service principal object',
        isCorrect: false,
        explanationJa: '【不正解】通常のアプリ登録で作成したサービス プリンシパルを共用すると、クライアント シークレットや証明書の管理が必要になります。Azure が資格情報を管理するマネージド ID が適切です。',
        explanationEn: 'Sharing a standard app registration service principal requires managing client secrets or certificates rather than using Azure-managed credentials.',
      },
      {
        id: 'B',
        textJa: 'システム割り当てマネージド ID (System-assigned managed identity)',
        textEn: 'System-assigned managed identity',
        isCorrect: false,
        explanationJa: '【不正解】システム割り当てマネージド ID は各 Web アプリに 1 つずつ作成されるため、必要な ID の数を最小限に抑える要件に反します。',
        explanationEn: 'System-assigned managed identities are created one-to-one per web app, which does not minimize the total number of identities.',
      },
      {
        id: 'C',
        textJa: 'ユーザー割り当てマネージド ID (User-assigned managed identity)',
        textEn: 'User-assigned managed identity',
        isCorrect: true,
        explanationJa: '【正解】ユーザー割り当てマネージド ID はアプリとは独立して作成でき、複数の Web アプリで 1 つの ID を共有できるため、ID 数を最小限に抑えられます。',
        explanationEn: 'A user-assigned managed identity is created independently and can be shared across multiple web apps, minimizing the number of identities.',
      },
      {
        id: 'D',
        textJa: 'Key Vault 管理者 (Key Vault Administrator)',
        textEn: 'Key Vault Administrator',
        isCorrect: false,
        explanationJa: '【不正解】キー、シークレット、証明書の作成・変更・削除まで許可する広範なロールであり、読み取りのみのアプリには過剰です。',
        explanationEn: 'Key Vault Administrator grants broad management rights over keys, secrets, and certificates, violating least privilege for read-only apps.',
      },
      {
        id: 'E',
        textJa: 'Key Vault 閲覧者 (Key Vault Reader)',
        textEn: 'Key Vault Reader',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Reader はメタデータの閲覧のみを許可し、シークレットの値は取得できません。',
        explanationEn: 'Key Vault Reader only allows reading metadata and does not permit retrieving secret values.',
      },
      {
        id: 'F',
        textJa: 'Key Vault シークレット ユーザー (Key Vault Secrets User)',
        textEn: 'Key Vault Secrets User',
        isCorrect: true,
        explanationJa: '【正解】Key Vault Secrets User はシークレットの値のみを読み取れるデータ プレーン ロールであり、変更・削除権限を与えないため最小特権を満たします。',
        explanationEn: 'Key Vault Secrets User grants read-only access to secret contents without modification or deletion permissions, satisfying least privilege.',
      },
    ],
    overallExplanationJa: `複数の Azure リソースで認証主体を共有して ID 数を最小化するには「ユーザー割り当てマネージド ID」を使用します。また、Azure RBAC ベースの Key Vault でシークレット値を読み取る最小特権ロールは「Key Vault シークレット ユーザー」です。`,
    overallExplanationEn: `Use a user-assigned managed identity to share a single identity across multiple web apps and minimize identity count, paired with the Key Vault Secrets User data-plane role for read-only secret retrieval.`,
    keyPointsJa: [
      'ユーザー割り当てマネージド ID: 複数の App Service 間で 1 つの ID を共有可能',
      'Key Vault Secrets User: シークレット値の読み取り専用の最小特権データ プレーン ロール',
      'Key Vault Reader はメタデータ参照のみでシークレット値自体は取得不可',
    ],
    keyPointsEn: [
      'User-assigned managed identity can be shared across multiple App Service instances',
      'Key Vault Secrets User provides least-privilege read access to secret values',
      'Key Vault Reader only reads metadata, not secret values',
    ],
    referenceTopic: 'Azure Key Vault RBAC と共有マネージド ID',
  },
  {
    id: 'pdf-q82',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'VNet 統合済み App Service から Azure SQL へのプライベート IP 接続構成',
    titleEn: 'Securing App Service to Azure SQL Database Connectivity via Private Endpoint',
    scenarioJa: `VNet1 という名前の仮想ネットワークがあり、Subnet1 という名前のサブネットが含まれています。Azure App Service は VNet1 と統合されています。
DB1 という名前のデータベースを含む、Server1 という名前の Azure SQL Database 論理サーバーがあります。Server1 には、パブリック IP アドレスを使用した場合にのみアクセスできます。
Server1 がパブリック IP アドレスを使用せず、Azure App Service が引き続き Server1 にアクセスできるようにする必要があります。`,
    scenarioEn: `You have a virtual network named VNet1 containing a subnet named Subnet1, and an Azure App Service integrated with VNet1.
You have an Azure SQL Database logical server named Server1 containing a database named DB1. Currently, Server1 is accessible only via its public IP address.
You need to ensure Server1 no longer uses a public IP address while allowing the Azure App Service to continue accessing Server1.`,
    questionJa: '作成すべきものを1つ選んでください。',
    questionEn: 'What should you create?',
    options: [
      {
        id: 'A',
        textJa: 'ルート テーブル',
        textEn: 'A route table',
        isCorrect: false,
        explanationJa: '【不正解】ルート テーブルは次ホップの転送先を制御するものであり、SQL サーバー用のプライベート IP アドレスは作成されません。',
        explanationEn: 'A route table controls next-hop traffic routing and does not provide a private IP endpoint for Azure SQL Database.',
      },
      {
        id: 'B',
        textJa: 'Azure Private Link サービス',
        textEn: 'An Azure Private Link service',
        isCorrect: false,
        explanationJa: '【不正解】Private Link サービスは Standard Load Balancer 背後の独自サービスを公開する機能であり、既存の Azure SQL 利用側ではプライベート エンドポイントを作成します。',
        explanationEn: 'Azure Private Link service exposes custom services behind a Standard Load Balancer; consuming PaaS services like Azure SQL uses a private endpoint.',
      },
      {
        id: 'C',
        textJa: 'プライベート エンドポイント',
        textEn: 'A private endpoint',
        isCorrect: true,
        explanationJa: '【正解】Server1 用のプライベート エンドポイントを VNet1 内に作成し、Private DNS ゾーンと連携させることで、パブリック IP を無効化しても VNet 統合経由でプライベート接続できます。',
        explanationEn: 'Creating a private endpoint for Server1 in VNet1 (with Private DNS) allows App Service to connect over private IP via VNet integration after public access is disabled.',
      },
      {
        id: 'D',
        textJa: 'サービス エンドポイント',
        textEn: 'A service endpoint',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントは通信経路を Azure バックボーンに最適化しますが、宛先は引き続き SQL のパブリック エンドポイントとなるため要件を満たしません。',
        explanationEn: 'A service endpoint routes over the Azure backbone but still targets the public endpoint of Azure SQL, failing the no-public-IP requirement.',
      },
    ],
    overallExplanationJa: `App Service の VNet 統合はアプリからの送信経路を提供しますが、PaaS である Azure SQL Database 側の公開エンドポイントを閉じるには「プライベート エンドポイント」を作成して VNet1 内のプライベート IP を割り当て、Private DNS 経由で名前解決させる必要があります。`,
    overallExplanationEn: `App Service VNet integration provides outbound routing, while a Private Endpoint gives Server1 a private IP inside VNet1 so public network access can be disabled.`,
    keyPointsJa: [
      'プライベート エンドポイント: PaaS に VNet 内のプライベート IP を割り当てて閉域接続を実現',
      'サービス エンドポイント: 宛先 IP は依然としてパブリック エンドポイント',
      'privatelink.database.windows.net の Private DNS ゾーン連携が必要',
    ],
    keyPointsEn: [
      'Private endpoint assigns a private IP inside VNet1 for PaaS access',
      'Service endpoints still connect to the public PaaS endpoint',
      'Requires privatelink.database.windows.net Private DNS resolution',
    ],
    referenceTopic: 'Azure SQL Database プライベート エンドポイントと App Service VNet 統合',
  },
  {
    id: 'pdf-q83',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'P2S VPN 接続で条件付きアクセスを強制するための認証方式',
    titleEn: 'Enforcing Conditional Access on Point-to-Site (P2S) Azure VPN Connections',
    scenarioJa: `VNet1 という名前の仮想ネットワークを含む Azure サブスクリプションがあります。VNet1 には、ポイント対サイト (P2S) 接続用に構成された Gateway1 という名前の Azure VPN ゲートウェイが含まれています。Microsoft 365 E5 サブスクリプションがあります。
Gateway1 の VPN 認証方法を構成する必要があります。このソリューションでは、VPN へのサインイン時に条件付きアクセス ポリシーの適用を強制する必要があります。`,
    scenarioEn: `You have an Azure subscription containing a virtual network named VNet1, which includes an Azure VPN gateway named Gateway1 configured for point-to-site (P2S) connectivity. You also have a Microsoft 365 E5 subscription.
You need to configure the VPN authentication method for Gateway1 so that Conditional Access policies are enforced during VPN sign-in.`,
    questionJa: '構成する認証方法を1つ選んでください。',
    questionEn: 'Which authentication method should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'カスタム IPsec/IKE ポリシー',
        textEn: 'Custom IPsec/IKE policy',
        isCorrect: false,
        explanationJa: '【不正解】カスタム IPsec/IKE ポリシーは暗号化アルゴリズムや鍵交換などのトンネル通信パラメーターを指定する設定であり、ユーザー認証や条件付きアクセス評価には関与しません。',
        explanationEn: 'Custom IPsec/IKE policies configure tunnel cryptography and key exchange parameters, not user authentication or Conditional Access.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Entra 認証',
        textEn: 'Microsoft Entra authentication',
        isCorrect: true,
        explanationJa: '【正解】OpenVPN と Azure VPN Client を用いた Microsoft Entra 認証を構成すると、サインイン時に Entra ID の条件付きアクセス ポリシー (MFA 等) を評価・強制できます。',
        explanationEn: 'Microsoft Entra authentication (with OpenVPN and Azure VPN Client) evaluates and enforces Conditional Access policies such as MFA at VPN sign-in.',
      },
      {
        id: 'C',
        textJa: '証明書認証',
        textEn: 'Certificate authentication',
        isCorrect: false,
        explanationJa: '【不正解】クライアント証明書による認証は Entra ID サインインを経由しないため、接続時の条件付きアクセス評価を行えません。',
        explanationEn: 'Certificate-based VPN authentication validates against a root certificate without invoking Entra ID sign-in or Conditional Access.',
      },
      {
        id: 'D',
        textJa: '強制トンネリング',
        textEn: 'Forced tunneling',
        isCorrect: false,
        explanationJa: '【不正解】強制トンネリングは接続後のルーティング制御であり、VPN 認証方式ではありません。',
        explanationEn: 'Forced tunneling controls traffic routing after connection, not user authentication.',
      },
    ],
    overallExplanationJa: `Azure VPN Gateway の P2S 接続で条件付きアクセス (MFA やデバイス準拠チェック) を適用するには、OpenVPN トンネル上で **Microsoft Entra 認証** を構成し、Azure VPN Client アプリに対してポリシーを割り当てます。`,
    overallExplanationEn: `To enforce Conditional Access on P2S VPN connections, configure Microsoft Entra authentication on Gateway1 (using OpenVPN and Azure VPN Client).`,
    keyPointsJa: [
      'P2S VPN + 条件付きアクセス = Microsoft Entra 認証 (OpenVPN + Azure VPN Client)',
      '証明書認証や RADIUS 認証では Entra 条件付きアクセスを接続時に評価できない',
      'Microsoft 365 E5 には条件付きアクセスに必要な Microsoft Entra ID P2 が含まれる',
    ],
    keyPointsEn: [
      'P2S VPN Conditional Access requires Microsoft Entra authentication over OpenVPN',
      'Certificate authentication does not trigger Entra ID Conditional Access',
      'Microsoft 365 E5 includes Microsoft Entra ID P2 licensing',
    ],
    referenceTopic: 'Azure VPN Gateway P2S Microsoft Entra 認証と条件付きアクセス',
  },
  {
    id: 'pdf-q84',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure portal で特定コンテナー内の BLOB を表示するための最小特権 RBAC',
    titleEn: 'Least-Privilege RBAC Roles to View Blobs in a Specific Container via Azure Portal',
    scenarioJa: `Azure サブスクリプション Sub1 には、storage1 というストレージ アカウントが含まれています。storage1 は、container1 という BLOB コンテナーをホストしています。Sub1 は、Group1 というセキュリティ グループを含む Microsoft Entra テナントにリンクされています。
Group1 が Azure portal を使用して container1 内の BLOB を表示できるようにする必要があります。ソリューションは最小特権の原則に従う必要があります。
候補ロール：共同作成者 (Contributor)、閲覧者 (Reader)、ストレージ BLOB データ所有者 (Storage Blob Data Owner)、ストレージ BLOB データ閲覧者 (Storage Blob Data Reader)、ストレージ BLOB 委任者 (Storage Blob Delegator)。`,
    scenarioEn: `Azure subscription Sub1 contains a storage account named storage1, which hosts a blob container named container1. Sub1 is linked to a Microsoft Entra tenant containing a security group named Group1.
You need to enable Group1 to view blobs in container1 using the Azure portal while following the principle of least privilege.
Candidate roles: Contributor, Reader, Storage Blob Data Owner, Storage Blob Data Reader, Storage Blob Delegator.`,
    questionJa: 'Group1 に container1 と storage1 でそれぞれ割り当てるロールの組み合わせを1つ選んでください。',
    questionEn: 'Which combination of roles should you assign to Group1 for container1 and storage1?',
    options: [
      {
        id: 'A',
        textJa: 'container1：閲覧者 (Reader)／storage1：ストレージ BLOB 委任者 (Storage Blob Delegator)',
        textEn: 'container1: Reader / storage1: Storage Blob Delegator',
        isCorrect: false,
        explanationJa: '【不正解】container1 の Reader は管理プレーンの参照のみで BLOB データを読み取れず、Storage Blob Delegator はユーザー委任 SAS キー取得用のロールです。',
        explanationEn: 'Reader does not grant data-plane blob read access, and Storage Blob Delegator is only for generating user delegation keys.',
      },
      {
        id: 'B',
        textJa: 'container1：ストレージ BLOB データ閲覧者 (Storage Blob Data Reader)／storage1：ストレージ BLOB 委任者 (Storage Blob Delegator)',
        textEn: 'container1: Storage Blob Data Reader / storage1: Storage Blob Delegator',
        isCorrect: false,
        explanationJa: '【不正解】Azure portal で storage1 の画面を開くには管理プレーンの Reader ロールが必要であり、Storage Blob Delegator では代替できません。',
        explanationEn: 'Storage Blob Delegator does not grant control-plane visibility to browse storage1 in the Azure portal; Reader is needed.',
      },
      {
        id: 'C',
        textJa: 'container1：閲覧者 (Reader)／storage1：共同作成者 (Contributor)',
        textEn: 'container1: Reader / storage1: Contributor',
        isCorrect: false,
        explanationJa: '【不正解】storage1 の Contributor は設定変更やキー取得まで許可するため過剰であり、container1 の Reader では Enta 認証による BLOB 読み取りができません。',
        explanationEn: 'Contributor on storage1 grants overly broad control-plane and key access, while Reader on container1 does not grant blob data access.',
      },
      {
        id: 'D',
        textJa: 'container1：ストレージ BLOB データ所有者 (Storage Blob Data Owner)／storage1：共同作成者 (Contributor)',
        textEn: 'container1: Storage Blob Data Owner / storage1: Contributor',
        isCorrect: false,
        explanationJa: '【不正解】両スコープともに書き込み・削除・構成変更の権限が含まれており、閲覧のみの最小特権に反します。',
        explanationEn: 'Both roles grant write/delete/management permissions far exceeding read-only viewing requirements.',
      },
      {
        id: 'E',
        textJa: 'container1：ストレージ BLOB データ閲覧者 (Storage Blob Data Reader)／storage1：閲覧者 (Reader)',
        textEn: 'container1: Storage Blob Data Reader / storage1: Reader',
        isCorrect: true,
        explanationJa: '【正解】storage1 に管理プレーンの Reader を付与してポータル上でアカウントを参照可能にし、container1 にデータ プレーンの Storage Blob Data Reader を付与することで、最小特権で BLOB を表示できます。',
        explanationEn: 'Reader on storage1 enables portal navigation (control plane), while Storage Blob Data Reader on container1 grants read-only blob access (data plane).',
      },
      {
        id: 'F',
        textJa: 'container1：ストレージ BLOB データ所有者 (Storage Blob Data Owner)／storage1：閲覧者 (Reader)',
        textEn: 'container1: Storage Blob Data Owner / storage1: Reader',
        isCorrect: false,
        explanationJa: '【不正解】Storage Blob Data Owner は BLOB の書き込み・削除や ACL 管理まで許可するため過剰です。',
        explanationEn: 'Storage Blob Data Owner permits writing, deleting, and managing POSIX ACLs, which exceeds viewing requirements.',
      },
    ],
    overallExplanationJa: `Azure portal 経由で特定コンテナーの BLOB を閲覧する場合、管理プレーン (storage1 画面の表示・移動) 用に **Reader**、データ プレーン (container1 内の BLOB 一覧・読み取り) 用に **Storage Blob Data Reader** を割り当てます。`,
    overallExplanationEn: `Viewing blobs in the Azure portal requires both control-plane Reader on storage1 to navigate to the resource and data-plane Storage Blob Data Reader scoped to container1.`,
    keyPointsJa: [
      '管理プレーン (Reader on storage1): ポータル上でストレージ アカウントを表示',
      'データ プレーン (Storage Blob Data Reader on container1): 対象コンテナーの BLOB のみ読み取り可能',
      'データ操作は最小スコープ (container1) に限定するのが原則',
    ],
    keyPointsEn: [
      'Control plane (Reader on storage1): allows browsing the account in Azure portal',
      'Data plane (Storage Blob Data Reader on container1): read-only access scoped to container1',
      'Always separate control-plane and data-plane roles under least privilege',
    ],
    referenceTopic: 'Azure Storage 管理プレーンとデータ プレーンの RBAC 分離',
  },
  {
    id: 'pdf-q85',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'サブネットの NSG のみでストレージ アカウントへのアクセスを管理する構成',
    titleEn: 'Managing Storage Account Access Exclusively via Subnet NSG',
    scenarioJa: `VNet1 という名前の Azure 仮想ネットワークがあり、Subnet1 という名前のサブネットが含まれています。storage1 という名前のストレージ アカウントを作成します。
Subnet1 に関連付けられたネットワーク セキュリティ グループ (NSG) のみで storage1 へのアクセスを管理できるようにする必要があります。`,
    scenarioEn: `You have an Azure virtual network named VNet1 containing a subnet named Subnet1. You create a storage account named storage1.
You need to ensure that access to storage1 can be managed solely using the network security group (NSG) associated with Subnet1.`,
    questionJa: '使用すべきものを1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Private Link サービス',
        textEn: 'Azure Private Link service',
        isCorrect: false,
        explanationJa: '【不正解】Private Link サービスは独自サービスを公開する側の機能であり、storage1 側への利用にはプライベート エンドポイントを使用します。',
        explanationEn: 'Azure Private Link service exposes custom services; connecting to Azure Storage uses a private endpoint.',
      },
      {
        id: 'B',
        textJa: 'サービス エンドポイント',
        textEn: 'A service endpoint',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントでは接続元の限定にストレージ側ファイアウォールの仮想ネットワーク規則も必要となり、NSG のみでの制御になりません。',
        explanationEn: 'Service endpoints require storage firewall VNet rules to restrict access rather than managing access solely via NSG.',
      },
      {
        id: 'C',
        textJa: 'プライベート エンドポイント',
        textEn: 'A private endpoint',
        isCorrect: true,
        explanationJa: '【正解】Subnet1 に storage1 のプライベート エンドポイントを配置し、サブネットのネットワーク ポリシー (NSG 適用) を有効にすることで、プライベート IP 宛ての通信を Subnet1 の NSG のみで制御できます。',
        explanationEn: 'Deploying a private endpoint in Subnet1 with private endpoint network policies enabled allows Subnet1’s NSG to control access to storage1’s private IP.',
      },
      {
        id: 'D',
        textJa: 'ユーザー定義ルート (UDR)',
        textEn: 'A user-defined route (UDR)',
        isCorrect: false,
        explanationJa: '【不正解】UDR はトラフィックの次ホップを制御するルーティング設定であり、アクセス許可・拒否やプライベート IP 配置を行う機能ではありません。',
        explanationEn: 'UDRs control packet forwarding next hops, not access filtering or private endpoint IP assignment.',
      },
    ],
    overallExplanationJa: 'ストレージ アカウントを **プライベート エンドポイント** で Subnet1 内に配置し、`privateEndpointNetworkPolicies` を有効にして NSG を適用すれば、パブリック アクセスを無効化した上で Subnet1 の NSG 規則のみで通信制御を行えます。',
    overallExplanationEn: `Placing storage1 in Subnet1 via a Private Endpoint and enabling private endpoint network policies lets you control access solely with Subnet1's NSG (with public network access disabled).`,
    keyPointsJa: [
      'プライベート エンドポイント + privateEndpointNetworkPolicies 有効化で NSG 制御が可能',
      'サービス エンドポイントは宛先がパブリック IP のままでありストレージ側 FW 設定が必要',
      'パブリック ネットワーク アクセスを無効化することで公開経路からの迂回を防止',
    ],
    keyPointsEn: [
      'Private endpoint + privateEndpointNetworkPolicies enabled enables NSG enforcement',
      'Service endpoints rely on storage account firewall rules',
      'Disable public network access to prevent bypassing the private endpoint',
    ],
    referenceTopic: 'プライベート エンドポイントに対する NSG 適用とネットワーク ポリシー',
  },
  {
    id: 'pdf-q86',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for SQL 調査向けに推奨されるデータベース監査アクション グループ',
    titleEn: 'Recommended Azure SQL Database Auditing Action Groups for Defender for SQL Investigations',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあり、Server1 という名前の Azure SQL Database 論理サーバーが含まれています。Server1 には DB1 という名前のデータベースが含まれています。
Sub1 に対して Microsoft Defender for Cloud のセキュリティ アラートが生成されています。Microsoft Defender for SQL が Advanced Threat Protection のアラートを発したときの調査機能を向上させる予定です。
Advanced Threat Protection の調査で DB1 の監査レコードを利用できるようにする必要があります。ソリューションには、推奨される監査アクション グループを含める必要があります。
監査アクション グループの候補：AUDIT_CHANGE_GROUP、BATCH_COMPLETED_GROUP、FAILED_DATABASE_AUTHENTICATION_GROUP、FAILED_LOGIN_GROUP、SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP、SUCCESSFUL_LOGIN_GROUP`,
    scenarioEn: `Azure subscription Sub1 contains an Azure SQL Database logical server named Server1 with a database named DB1.
Microsoft Defender for Cloud security alerts are generated for Sub1, and you plan to enhance investigation capabilities when Microsoft Defender for SQL triggers Advanced Threat Protection alerts.
You need to ensure DB1 audit records are available for Advanced Threat Protection investigations using the recommended audit action groups.
Candidate audit action groups: AUDIT_CHANGE_GROUP, BATCH_COMPLETED_GROUP, FAILED_DATABASE_AUTHENTICATION_GROUP, FAILED_LOGIN_GROUP, SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP, SUCCESSFUL_LOGIN_GROUP`,
    questionJa: '成功したログインと失敗したログインに対応する監査アクション グループの組み合わせを1つ選んでください。',
    questionEn: 'Which audit action groups should you configure for successful logins and failed logins?',
    options: [
      {
        id: 'A',
        textJa: '成功したログイン：SUCCESSFUL_LOGIN_GROUP、失敗したログイン：AUDIT_CHANGE_GROUP',
        textEn: 'Successful: SUCCESSFUL_LOGIN_GROUP / Failed: AUDIT_CHANGE_GROUP',
        isCorrect: false,
        explanationJa: '【不正解】SUCCESSFUL_LOGIN_GROUP はオンプレミス等の SQL Server インスタンス向けであり、AUDIT_CHANGE_GROUP は監査設定変更を記録するグループです。',
        explanationEn: 'SUCCESSFUL_LOGIN_GROUP is for SQL Server server-level logins rather than Azure SQL Database default recommended groups, and AUDIT_CHANGE_GROUP tracks audit config changes.',
      },
      {
        id: 'B',
        textJa: '成功したログイン：SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP、失敗したログイン：FAILED_LOGIN_GROUP',
        textEn: 'Successful: SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP / Failed: FAILED_LOGIN_GROUP',
        isCorrect: false,
        explanationJa: '【不正解】失敗側も Azure SQL Database 推奨の FAILED_DATABASE_AUTHENTICATION_GROUP を使用する必要があります。',
        explanationEn: 'For Azure SQL Database recommended auditing, use FAILED_DATABASE_AUTHENTICATION_GROUP rather than FAILED_LOGIN_GROUP.',
      },
      {
        id: 'C',
        textJa: '成功したログイン：BATCH_COMPLETED_GROUP、失敗したログイン：FAILED_DATABASE_AUTHENTICATION_GROUP',
        textEn: 'Successful: BATCH_COMPLETED_GROUP / Failed: FAILED_DATABASE_AUTHENTICATION_GROUP',
        isCorrect: false,
        explanationJa: '【不正解】BATCH_COMPLETED_GROUP は SQL バッチの実行完了を記録するグループであり、ログイン成功を記録しません。',
        explanationEn: 'BATCH_COMPLETED_GROUP logs executed SQL batches, not successful authentication events.',
      },
      {
        id: 'D',
        textJa: '成功したログイン：BATCH_COMPLETED_GROUP、失敗したログイン：AUDIT_CHANGE_GROUP',
        textEn: 'Successful: BATCH_COMPLETED_GROUP / Failed: AUDIT_CHANGE_GROUP',
        isCorrect: false,
        explanationJa: '【不正解】いずれも SQL 実行および監査設定変更用であり、認証の成功・失敗を記録するグループではありません。',
        explanationEn: 'Neither group tracks database authentication success or failure.',
      },
      {
        id: 'E',
        textJa: '成功したログイン：SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP、失敗したログイン：FAILED_DATABASE_AUTHENTICATION_GROUP',
        textEn: 'Successful: SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP / Failed: FAILED_DATABASE_AUTHENTICATION_GROUP',
        isCorrect: true,
        explanationJa: '【正解】Azure SQL Database の推奨監査構成 (および Defender for SQL の調査連携) では、認証成功に SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP、認証失敗に FAILED_DATABASE_AUTHENTICATION_GROUP (+ BATCH_COMPLETED_GROUP) を使用します。',
        explanationEn: 'Azure SQL Database recommended auditing for Defender for SQL uses SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP and FAILED_DATABASE_AUTHENTICATION_GROUP (along with BATCH_COMPLETED_GROUP).',
      },
      {
        id: 'F',
        textJa: '成功したログイン：SUCCESSFUL_LOGIN_GROUP、失敗したログイン：FAILED_LOGIN_GROUP',
        textEn: 'Successful: SUCCESSFUL_LOGIN_GROUP / Failed: FAILED_LOGIN_GROUP',
        isCorrect: false,
        explanationJa: '【不正解】これらは SQL Server 向けのサーバー レベル ログイン監査グループであり、Azure SQL Database の推奨既定グループは *_DATABASE_AUTHENTICATION_GROUP です。',
        explanationEn: 'Those apply to SQL Server instance logins rather than Azure SQL Database recommended DATABASE_AUTHENTICATION groups.',
      },
    ],
    overallExplanationJa: `Azure SQL Database において Microsoft Defender for SQL の脅威アラート調査で推奨される監査アクション グループは、**SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP**、**FAILED_DATABASE_AUTHENTICATION_GROUP**、**BATCH_COMPLETED_GROUP** の 3 つです。`,
    overallExplanationEn: `Azure SQL Database's default recommended audit action groups for Defender for SQL investigation are SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP, FAILED_DATABASE_AUTHENTICATION_GROUP, and BATCH_COMPLETED_GROUP.`,
    keyPointsJa: [
      '認証成功: SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP',
      '認証失敗: FAILED_DATABASE_AUTHENTICATION_GROUP',
      'SQL バッチ実行完了: BATCH_COMPLETED_GROUP (既定推奨の 3 グループ)',
    ],
    keyPointsEn: [
      'Successful auth: SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP',
      'Failed auth: FAILED_DATABASE_AUTHENTICATION_GROUP',
      'SQL batch execution: BATCH_COMPLETED_GROUP',
    ],
    referenceTopic: 'Azure SQL Database 監査アクション グループと Defender for SQL 調査連携',
  },
  {
    id: 'pdf-q87',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'パブリック エンドポイント維持下での VM と外部 IP 両方からの Storage アクセス許可',
    titleEn: 'Allowing Both VM Subnet and Public IP Access to Storage via Public Endpoint',
    scenarioJa: `次の表に示すリソースを含む Azure サブスクリプションがあります。

| 名前 | 種類 | 説明 |
| :--- | :--- | :--- |
| VNet1 | 仮想ネットワーク | なし |
| Subnet1 | サブネット | VNet1 上 |
| VM1 | 仮想マシン | Subnet1 にデプロイ |
| storage1 | ストレージ アカウント | パブリック エンドポイントを使用 |

VM1 には、storage1 にアクセスするアプリケーションがあります。別のアプリケーションは、パブリック IP アドレス xxx.xxx.xx.xx から storage1 にアクセスします。
storage1 では、パブリック ネットワーク アクセス (Public network access) を「選択した仮想ネットワークと IP アドレスから有効 (Enabled from selected virtual networks and IP addresses)」に設定し、xxx.xxx.xx.xx に対する IP ネットワーク規則を追加します。
構成後、xxx.xxx.xx.xx からの接続だけが成功します。
その他のすべてのアクセスを防ぎながら、VM1 と xxx.xxx.xx.xx の両方がパブリック エンドポイント経由で storage1 にアクセスできるようにする必要があります。`,
    scenarioEn: `You have an Azure subscription containing the following resources:

| Name | Type | Description |
| :--- | :--- | :--- |
| VNet1 | Virtual network | None |
| Subnet1 | Subnet | On VNet1 |
| VM1 | Virtual machine | Deployed to Subnet1 |
| storage1 | Storage account | Uses public endpoint |

VM1 runs an application that accesses storage1, and another application accesses storage1 from public IP address xxx.xxx.xx.xx.
On storage1, you set Public network access to "Enabled from selected virtual networks and IP addresses" and add an IP network rule for xxx.xxx.xx.xx. Afterward, only connections from xxx.xxx.xx.xx succeed.
You need to ensure both VM1 and xxx.xxx.xx.xx can access storage1 via the public endpoint while blocking all other access.`,
    questionJa: '何をすべきですか。該当するものを1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'storage1 のパブリック ネットワーク アクセスをすべてのネットワークから許可する。',
        textEn: 'Set Public network access to Enabled from all networks.',
        isCorrect: false,
        explanationJa: '【不正解】すべてのネットワークから許可すると、VM1 と指定 IP 以外のアクセスも遮断できなくなります。',
        explanationEn: 'Enabling access from all networks fails to block unauthorized networks.',
      },
      {
        id: 'B',
        textJa: 'Subnet1 から接続するために storage1 のプライベート エンドポイントを作成する。',
        textEn: 'Create a private endpoint for storage1 inside VNet1.',
        isCorrect: false,
        explanationJa: '【不正解】要件は VM1 も「パブリック エンドポイント経由で」アクセスできることであり、プライベート IP 接続ではありません。',
        explanationEn: 'The requirement explicitly specifies access via the public endpoint for both VM1 and the public IP.',
      },
      {
        id: 'C',
        textJa: 'ストレージ ファイアウォール経由で接続するため VM1 にパブリック IP を追加する。',
        textEn: 'Assign a public IP address to the network interface of VM1.',
        isCorrect: false,
        explanationJa: '【不正解】同一リージョン内の Azure VM からストレージへの通信は Azure 内部ルートを通るため、VM のパブリック IP 規則では許可できません。また追加だけでは FW 規則に登録されません。',
        explanationEn: 'Traffic from a VM in the same region uses Azure internal routing and cannot be reliably matched by IP rules; adding a public IP also does not authorize Subnet1.',
      },
      {
        id: 'D',
        textJa: 'Subnet1 の Microsoft.Storage サービス エンドポイントを有効にする。',
        textEn: 'Enable the Microsoft.Storage service endpoint on Subnet1.',
        isCorrect: true,
        explanationJa: '【正解】Subnet1 で Microsoft.Storage サービス エンドポイントを有効にし、storage1 の仮想ネットワーク規則で Subnet1 を許可することで、パブリック エンドポイント経由のまま VM1 のアクセスと指定 IP のみを許可できます。',
        explanationEn: 'Enabling the Microsoft.Storage service endpoint on Subnet1 and adding Subnet1 to storage1’s virtual network rules allows VM1 via the public endpoint alongside xxx.xxx.xx.xx.',
      },
    ],
    overallExplanationJa: `パブリック エンドポイントを使用し続けながら特定の Azure サブネットからのアクセスをストレージ ファイアウォールで許可するには、サブネット側で **Microsoft.Storage サービス エンドポイント** を有効にし、ストレージ側の仮想ネットワーク規則でそのサブネットを許可します。`,
    overallExplanationEn: `To permit access from an Azure subnet over the storage public endpoint when restricted to selected networks, enable the Microsoft.Storage service endpoint on Subnet1 and allow it in storage1's virtual network rules.`,
    keyPointsJa: [
      'サービス エンドポイント (Microsoft.Storage): パブリック エンドポイントを保ったままサブネット単位で許可',
      '外部の接続元には IP ネットワーク規則、Azure サブネットには仮想ネットワーク規則を使用',
      '同一リージョンの VM 通信にはパブリック IP ベースの FW 規則が効かない点に注意',
    ],
    keyPointsEn: [
      'Microsoft.Storage service endpoint identifies Subnet1 traffic on the public endpoint',
      'Combine IP network rules for external IPs and VNet rules for Azure subnets',
      'Same-region VM-to-Storage traffic does not use public IP firewall rules',
    ],
    referenceTopic: 'Azure Storage ファイアウォールとサービス エンドポイント',
  },
  {
    id: 'pdf-q88',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Microsoft Entra Private Access のアプリ セグメントとユーザー割り当ての評価',
    titleEn: 'Evaluating Microsoft Entra Private Access App Segments and User Assignments',
    scenarioJa: `Microsoft Entra Private Access に構成されている、App1、App2、App3 という3つのオンプレミス アプリがあります。
構成は次の表に示すとおりです。

| Name | Segment type | IP address/range | Port |
| :--- | :--- | :--- | :--- |
| App1 | FQDN | *.corp.contoso.com | 443 |
| App2 | IP address | 10.20.30.40/32 | 8443 |
| App3 | IP address | 10.20.30.40/32 | 443 |

次の表に示すユーザーがいます。

| 名前 | 割り当て先 |
| :--- | :--- |
| User1 | App1 |
| User2 | App2 |
| User3 | App1 と App3 |

Global Secure Access クライアントは、すべてのユーザー デバイスに展開されています。
・記述1：User2 は https://10.20.30.40 に接続できます。
・記述2：User3 は https://intranet.corp.contoso.com に接続できます。
・記述3：User1 は https://intranet.corp.contoso.com:8443 に接続できます。`,
    scenarioEn: `You have three on-premises applications configured in Microsoft Entra Private Access: App1, App2, and App3.
Their configurations are shown below:

| Name | Segment type | IP address/range | Port |
| :--- | :--- | :--- | :--- |
| App1 | FQDN | *.corp.contoso.com | 443 |
| App2 | IP address | 10.20.30.40/32 | 8443 |
| App3 | IP address | 10.20.30.40/32 | 443 |

User assignments are shown below:

| Name | Assigned to |
| :--- | :--- |
| User1 | App1 |
| User2 | App2 |
| User3 | App1 and App3 |

The Global Secure Access client is deployed on all user devices.
- Statement 1: User2 can connect to https://10.20.30.40.
- Statement 2: User3 can connect to https://intranet.corp.contoso.com.
- Statement 3: User1 can connect to https://intranet.corp.contoso.com:8443.`,
    questionJa: '各記述が正しい場合は「はい」、そうでない場合は「いいえ」としたとき、記述1～3の正しい組み合わせはどれですか。',
    questionEn: 'Which combination of Yes/No answers correctly evaluates Statements 1–3?',
    options: [
      {
        id: 'A',
        textJa: '記述1：はい、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: Yes, Statement 2: No, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】ポート省略時の https は 443 番であり、App2 (8443) や App1 (443) とはポートが一致しない記述 1・3 は「いいえ」です。',
        explanationEn: 'HTTPS defaults to port 443, so Statements 1 (App2 uses 8443) and 3 (App1 uses 443, not 8443) are both No.',
      },
      {
        id: 'B',
        textJa: '記述1：はい、記述2：いいえ、記述3：いいえ',
        textEn: 'Statement 1: Yes, Statement 2: No, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】User2 の App2 はポート 8443 のみ許可のため記述 1 は「いいえ」、User3 の App1 は *.corp.contoso.com:443 を含むため記述 2 は「はい」です。',
        explanationEn: 'Statement 1 is No (App2 only allows port 8443), and Statement 2 is Yes (App1 covers *.corp.contoso.com on 443).',
      },
      {
        id: 'C',
        textJa: '記述1：はい、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: Yes, Statement 2: Yes, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】https://10.20.30.40 は既定ポート 443 を使用しますが、User2 に割り当てられた App2 はポート 8443 のみのため接続できません。',
        explanationEn: 'Statement 1 is No because https://10.20.30.40 uses port 443 while App2 only permits port 8443.',
      },
      {
        id: 'D',
        textJa: '記述1：いいえ、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: No, Statement 2: Yes, Statement 3: No',
        isCorrect: true,
        explanationJa: '【正解】記述1: App2 はポート 8443 のため 443 番の https://10.20.30.40 は不可 (いいえ)。記述2: User3 には App1 が割り当てられており *.corp.contoso.com の 443 番に一致するため可 (はい)。記述3: User1 の App1 は 443 番のみ許可のため 8443 番指定は不可 (いいえ)。',
        explanationEn: 'Statement 1: No (App2 allows 8443, not 443). Statement 2: Yes (User3 is assigned App1 covering *.corp.contoso.com:443). Statement 3: No (User1’s App1 only allows 443, not 8443).',
      },
      {
        id: 'E',
        textJa: '記述1：いいえ、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: No, Statement 2: No, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】記述 2 と記述 3 の判定が逆です。User3 は App1 により 443 番に接続でき、User1 は 8443 番を許可されていません。',
        explanationEn: 'Statements 2 and 3 are reversed: User3 can reach port 443 via App1, whereas User1 is not permitted on port 8443.',
      },
      {
        id: 'F',
        textJa: '記述1：いいえ、記述2：はい、記述3：はい',
        textEn: 'Statement 1: No, Statement 2: Yes, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】ワイルドカード FQDN (*.corp.contoso.com) はホスト名の範囲を広げるものであり、指定外のポート (8443) までは許可しません。',
        explanationEn: 'Wildcard FQDN (*.corp.contoso.com) does not open ports other than the configured port 443.',
      },
    ],
    overallExplanationJa: `Microsoft Entra Private Access では、ユーザーに割り当てられたアプリの「宛先 (FQDN / IP)」と「ポート」の両方が一致する場合のみ接続できます。ポートを省略した ` + '`https://`' + ` URL は TCP 443 番を使用するため、User2 の 8443 番アプリでは 443 番に接続できず、User1 の 443 番アプリでは 8443 番に接続できません。`,
    overallExplanationEn: `Microsoft Entra Private Access evaluates both user assignment and exact destination/port match. Omitting the port in https:// defaults to port 443, so User2 (port 8443 only) fails on 443 and User1 (port 443 only) fails on 8443.`,
    keyPointsJa: [
      'ポート番号省略の https:// は TCP 443 として評価される',
      '別ユーザーや別アプリに許可されたポートは引き継がれない',
      'ワイルドカード FQDN はサブドメインのみ対象でポートは厳格に一致が必要',
    ],
    keyPointsEn: [
      'https:// without an explicit port uses TCP 443',
      'Access is strictly scoped to each user’s assigned app segments and ports',
      'Wildcard FQDN does not expand allowed port numbers',
    ],
    referenceTopic: 'Microsoft Entra Private Access アプリケーション セグメントとポート制御',
  },
  {
    id: 'pdf-q89',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '単一 PostgreSQL インスタンスに対する最小影響での Defender for Databases 保護',
    titleEn: 'Protecting an Individual Azure Database for PostgreSQL Resource in Defender for Cloud',
    scenarioJa: `Azure サブスクリプションに、DB1 という名前の Azure Database for PostgreSQL インスタンスがあります。Microsoft Defender for Cloud を使用して DB1 を保護する予定です。
DB1 に対する異常なアクティビティとデータベースの悪用を検出するように Defender for Cloud を構成する必要があります。このソリューションは、ほかのどのデータベースにも影響を与えてはなりません。`,
    scenarioEn: `Your Azure subscription contains an Azure Database for PostgreSQL instance named DB1. You plan to protect DB1 using Microsoft Defender for Cloud.
You need to configure Defender for Cloud to detect anomalous activity and database exploits on DB1 without affecting any other databases.`,
    questionJa: '保護 (Protection) のレベルと Defender プラン (Defender plan) の組み合わせはどれですか。',
    questionEn: 'Which combination of protection level and Defender plan should you configure?',
    options: [
      {
        id: 'A',
        textJa: '保護：サブスクリプション レベル／Defender プラン：Microsoft Defender for Azure SQL databases',
        textEn: 'Protection level: Subscription / Defender plan: Microsoft Defender for Azure SQL databases',
        isCorrect: false,
        explanationJa: '【不正解】Azure SQL databases プランは PostgreSQL に対応せず、サブスクリプション レベルの有効化は他データベースにも影響します。',
        explanationEn: 'Defender for Azure SQL databases does not cover PostgreSQL, and subscription-level enablement affects other databases.',
      },
      {
        id: 'B',
        textJa: '保護：管理グループ レベル／Defender プラン：Microsoft Defender for SQL Servers on Machines',
        textEn: 'Protection level: Management group / Defender plan: Microsoft Defender for SQL Servers on Machines',
        isCorrect: false,
        explanationJa: '【不正解】SQL Servers on Machines は VM 上の SQL Server 用であり、管理グループ単位は他リソースにも影響を与えます。',
        explanationEn: 'Defender for SQL Servers on Machines targets SQL Server on VMs, and management group scope impacts other resources.',
      },
      {
        id: 'C',
        textJa: '保護：個々のデータベース レベル／Defender プラン：Microsoft Defender for Open-Source Relational Databases',
        textEn: 'Protection level: Individual database / Defender plan: Microsoft Defender for Open-Source Relational Databases',
        isCorrect: true,
        explanationJa: '【正解】Azure Database for PostgreSQL には Microsoft Defender for Open-Source Relational Databases を選択し、DB1 の個々のリソース単位で有効にすることで、ほかのデータベースに影響を与えずに保護できます。',
        explanationEn: 'Enable Microsoft Defender for Open-Source Relational Databases at the individual resource (DB1) level to protect PostgreSQL without impacting other databases.',
      },
      {
        id: 'D',
        textJa: '保護：サブスクリプション レベル／Defender プラン：Microsoft Defender for SQL Servers on Machines',
        textEn: 'Protection level: Subscription / Defender plan: Microsoft Defender for SQL Servers on Machines',
        isCorrect: false,
        explanationJa: '【不正解】対象エンジンおよび適用スコープの両方が要件に一致しません。',
        explanationEn: 'Both the database plan and the subscription-wide scope are incorrect for DB1 alone.',
      },
      {
        id: 'E',
        textJa: '保護：個々のデータベース レベル／Defender プラン：Microsoft Defender for Azure SQL databases',
        textEn: 'Protection level: Individual database / Defender plan: Microsoft Defender for Azure SQL databases',
        isCorrect: false,
        explanationJa: '【不正解】リソース単位の選択は適切ですが、PostgreSQL には Open-Source Relational Databases プランが必要です。',
        explanationEn: 'While individual resource scoping is correct, PostgreSQL requires Defender for Open-Source Relational Databases.',
      },
      {
        id: 'F',
        textJa: '保護：管理グループ レベル／Defender プラン：Microsoft Defender for Open-Source Relational Databases',
        textEn: 'Protection level: Management group / Defender plan: Microsoft Defender for Open-Source Relational Databases',
        isCorrect: false,
        explanationJa: '【不正解】管理グループ レベルで有効にすると、配下のほかのデータベースもすべて保護対象になってしまいます。',
        explanationEn: 'Applying at the management group level affects all other databases under that scope.',
      },
    ],
    overallExplanationJa: `他のデータベースに影響を与えず単一の PostgreSQL インスタンス (DB1) だけを保護するには、保護レベルを **個々のデータベース (リソース) レベル** に設定し、プランとして **Microsoft Defender for Open-Source Relational Databases** を有効にします。`,
    overallExplanationEn: `To protect only DB1 without affecting other databases, configure Microsoft Defender for Open-Source Relational Databases at the individual database/resource level.`,
    keyPointsJa: [
      'PostgreSQL / MySQL / MariaDB → Microsoft Defender for Open-Source Relational Databases',
      '他の DB に影響を与えない場合はサブスクリプション単位ではなく個々のリソース単位で有効化',
    ],
    keyPointsEn: [
      'PostgreSQL uses Microsoft Defender for Open-Source Relational Databases',
      'Scope to the individual database resource to avoid affecting other databases',
    ],
    referenceTopic: 'Defender for Databases リソース単位の有効化とプラン選択',
  },
  {
    id: 'pdf-q90',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'AWS コネクタ経由のマルチクラウド推奨事項・アラート閲覧用最小特権ロール',
    titleEn: 'Least-Privilege Role for Viewing Multicloud Recommendations and Alerts via AWS Connector',
    scenarioJa: `Azure サブスクリプションがあり、RG1 という名前のリソース グループが含まれ、Microsoft Defender for Cloud が有効になっています。RG1 に AWS コネクタを作成して、Amazon Web Services (AWS) アカウントを Defender for Cloud に接続します。会社のセキュリティ アナリストのユーザー アカウントを含む Group1 という Microsoft Entra グループがあります。
Group1 のメンバーが、接続された AWS アカウントのマルチクラウドの推奨事項とセキュリティ アラートを表示できるようにする必要があります。このソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have an Azure subscription with Defender for Cloud enabled and a resource group named RG1. You create an AWS connector in RG1 to onboard an Amazon Web Services (AWS) account. Group1 is a Microsoft Entra group containing security analysts.
You need to allow members of Group1 to view multicloud recommendations and security alerts for the connected AWS account, following the principle of least privilege.`,
    questionJa: 'RG1 に対して Group1 に割り当てるべきロールを1つ選んでください。',
    questionEn: 'Which role should you assign to Group1 on RG1?',
    options: [
      {
        id: 'A',
        textJa: 'セキュリティ閲覧者 (Security Reader)',
        textEn: 'Security Reader',
        isCorrect: true,
        explanationJa: '【正解】Security Reader は Defender for Cloud の推奨事項やセキュリティ アラートの閲覧のみを許可し、設定変更や一般 Azure リソースの閲覧権限を含まない最小特権ロールです。',
        explanationEn: 'Security Reader grants read-only access to Defender for Cloud recommendations and security alerts without configuration change or general resource read permissions.',
      },
      {
        id: 'B',
        textJa: '閲覧者 (Reader)',
        textEn: 'Reader',
        isCorrect: false,
        explanationJa: '【不正解】Reader でも推奨事項等は見られますが、RG1 内の一般 Azure リソース構成すべてへの閲覧権限も付与されるため、Security Reader より範囲が広くなります。',
        explanationEn: 'Reader also grants read access to all non-security resources in RG1, making Security Reader more tightly scoped.',
      },
      {
        id: 'C',
        textJa: '所有者 (Owner)',
        textEn: 'Owner',
        isCorrect: false,
        explanationJa: '【不正解】Owner はリソースの変更・削除および RBAC 管理まで可能であり、閲覧業務には過剰すぎます。',
        explanationEn: 'Owner permits full resource and RBAC management, far exceeding read-only requirements.',
      },
      {
        id: 'D',
        textJa: 'セキュリティ管理者 (Security Admin)',
        textEn: 'Security Admin',
        isCorrect: false,
        explanationJa: '【不正解】Security Admin はセキュリティ ポリシーの更新やアラート状態変更などの管理操作も許可するため、閲覧のみの最小特権に反します。',
        explanationEn: 'Security Admin allows modifying security policies and settings rather than read-only viewing.',
      },
    ],
    overallExplanationJa: `Defender for Cloud に接続された AWS コネクタのセキュリティ情報は Azure 側リソース (RG1) への Azure RBAC 継承で制御されます。構成変更を許さず推奨事項とアラートだけを参照させる最小特権ロールは **セキュリティ閲覧者 (Security Reader)** です。`,
    overallExplanationEn: `Access to multicloud security data from an AWS connector in RG1 is governed by Azure RBAC. Security Reader is the least-privilege role for viewing recommendations and alerts without modification rights.`,
    keyPointsJa: [
      'Security Reader: セキュリティ態勢・推奨事項・アラートの閲覧専用 (設定変更不可)',
      'Reader よりもセキュリティ情報に機能が絞られているため最小特権に適合',
      'RG1 スコープへの割り当てで配下の AWS コネクタに継承される',
    ],
    keyPointsEn: [
      'Security Reader restricts access to viewing security posture, recommendations, and alerts',
      'Narrower than general Reader for security analyst viewing tasks',
      'Inherited by the AWS connector resource under RG1',
    ],
    referenceTopic: 'Defender for Cloud マルチクラウド コネクタの Azure RBAC',
  },
  {
    id: 'pdf-q91',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Virtual Network Manager によるネットワーク グループ間の接続と遮断',
    titleEn: 'Configuring Connectivity and Traffic Blocking in Azure Virtual Network Manager',
    scenarioJa: `Azure Virtual Network Manager を使用して、Production と Development という2つのネットワーク グループにまとめられた複数の仮想ネットワークを管理しています。
次の要件を満たすように Virtual Network Manager を構成する必要があります。
① Production 内のすべての仮想ネットワーク間の通信を許可する。
② Development と Production 間の通信をブロックする。
コンポーネントは1回、複数回、または使用しない場合があります。`,
    scenarioEn: `You use Azure Virtual Network Manager to manage multiple virtual networks organized into two network groups: Production and Development.
You need to configure Virtual Network Manager to meet these requirements:
1. Allow communication among all virtual networks in Production.
2. Block communication between Development and Production.
Components may be used once, more than once, or not at all.`,
    questionJa: '①と②の各要件に使用するコンポーネントの正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination of components should you use for requirements 1 and 2?',
    options: [
      {
        id: 'A',
        textJa: '① スコープ (A scope)／② IP アドレス管理 (IPAM)',
        textEn: '1: A scope / 2: IP address management (IPAM)',
        isCorrect: false,
        explanationJa: '【不正解】スコープは管理対象の境界設定、IPAM は IP 空間管理機能であり、接続や遮断を行いません。',
        explanationEn: 'Scope defines management boundaries and IPAM manages IP ranges; neither configures connectivity or traffic blocking.',
      },
      {
        id: 'B',
        textJa: '① ルーティング構成 (A routing configuration)／② ルーティング構成 (A routing configuration)',
        textEn: '1: A routing configuration / 2: A routing configuration',
        isCorrect: false,
        explanationJa: '【不正解】ルーティング構成は UDR の一元配布を行う機能であり、メッシュ接続の作成や強制的な通信遮断には使用しません。',
        explanationEn: 'Routing configurations manage UDRs centrally rather than creating VNet connectivity or enforcing security Deny rules.',
      },
      {
        id: 'C',
        textJa: '① 接続構成 (A connectivity configuration)／② セキュリティ管理者構成 (A security admin configuration)',
        textEn: '1: A connectivity configuration / 2: A security admin configuration',
        isCorrect: true,
        explanationJa: '【正解】Production 内の相互接続にはメッシュ型の「接続構成」を、Development と Production 間の強制的な遮断には NSG より先に評価される「セキュリティ管理者構成 (Deny 規則)」を使用します。',
        explanationEn: 'Use a mesh connectivity configuration for Production VNet communication, and a security admin configuration with Deny rules to block traffic between Development and Production.',
      },
      {
        id: 'D',
        textJa: '① IP アドレス管理 (IPAM)／② 接続構成 (A connectivity configuration)',
        textEn: '1: IP address management (IPAM) / 2: A connectivity configuration',
        isCorrect: false,
        explanationJa: '【不正解】IPAM は VNet 間接続を作らず、接続構成は通信を遮断するルールではありません。',
        explanationEn: 'IPAM does not connect VNets, and connectivity configurations establish topologies rather than blocking rules.',
      },
      {
        id: 'E',
        textJa: '① セキュリティ管理者構成 (A security admin configuration)／② スコープ (A scope)',
        textEn: '1: A security admin configuration / 2: A scope',
        isCorrect: false,
        explanationJa: '【不正解】セキュリティ管理者構成だけでは VNet 間のピアリング経路は作られず、スコープからの除外はトラフィック遮断になりません。',
        explanationEn: 'Security admin rules do not create network connectivity paths, and removing from scope does not block existing network traffic.',
      },
    ],
    overallExplanationJa: `Azure Virtual Network Manager で VNet 間のトポロジ (メッシュ/ハブアンドスポーク) を自動構築するのは **接続構成 (Connectivity configuration)**、グループ間のトラフィックを NSG より優先して強制拒否するのは **セキュリティ管理者構成 (Security admin configuration)** です。`,
    overallExplanationEn: `Connectivity configurations establish VNet peering topologies (such as mesh within Production), while Security admin configurations enforce high-priority Deny rules ahead of NSGs.`,
    keyPointsJa: [
      '接続構成 (Connectivity configuration): メッシュやハブ&スポークによる VNet 相互接続',
      'セキュリティ管理者構成 (Security admin configuration): NSG に優先して評価される Deny/Allow 規則',
      'ルーティング構成は UDR 配布、IPAM は IP プレフィックス重複管理に使用',
    ],
    keyPointsEn: [
      'Connectivity configuration: builds mesh or hub-and-spoke VNet topologies',
      'Security admin configuration: enforces high-priority security rules before NSGs',
      'Routing configuration distributes UDRs; IPAM manages IP address pools',
    ],
    referenceTopic: 'Azure Virtual Network Manager の接続構成とセキュリティ管理者構成',
  },
  {
    id: 'pdf-q92',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot ワークスペース間でのスタンドアロン・埋め込み利用量分離',
    titleEn: 'Routing Embedded Security Copilot Traffic to a Dedicated Workspace',
    scenarioJa: `Microsoft Security Copilot の Workspace1 というワークスペースがあり、セキュリティ オペレーション センター (SOC) のアナリストとセキュリティ管理者が使用しています。SOC アナリストは Security Copilot のスタンドアロン エクスペリエンスのみを使用し、セキュリティ管理者は Microsoft Defender ポータルから Security Copilot にアクセスします。
セキュリティ管理者向けに Workspace2 という新しい Security Copilot ワークスペースが作成されます。Workspace2 には、5 つのセキュリティ コンピューティング ユニットの容量が割り当てられています。
SOC アナリストによる Security Copilot の使用量を Workspace1 に、セキュリティ管理者による Security Copilot の使用量を Workspace2 に割り当てる必要があります。`,
    scenarioEn: `You have a Microsoft Security Copilot workspace named Workspace1 used by SOC analysts and security administrators. SOC analysts only use the Security Copilot standalone experience, whereas security administrators access Security Copilot from the Microsoft Defender portal.
A new Security Copilot workspace named Workspace2 is created for security administrators and assigned 5 security compute units (SCUs).
You need to route SOC analysts' usage to Workspace1 and security administrators' usage to Workspace2.`,
    questionJa: '実行すべき操作を1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Workspace2 を埋め込みエージェントのトラフィック用に構成する。',
        textEn: 'Configure Workspace2 for embedded agent traffic.',
        isCorrect: true,
        explanationJa: '【正解】Defender ポータルなどの埋め込みエクスペリエンス／エージェントのトラフィック先として Workspace2 を指定すると、管理者の埋め込み利用は Workspace2 へ、SOC アナリストのスタンドアロン利用は Workspace1 へ分離されます。',
        explanationEn: 'Configuring Workspace2 as the target for embedded/agent traffic routes Defender portal usage to Workspace2 while keeping standalone usage on Workspace1.',
      },
      {
        id: 'B',
        textJa: 'Workspace2 の割り当てコンピューティング容量を増やす。',
        textEn: 'Increase the compute unit capacity of Workspace2.',
        isCorrect: false,
        explanationJa: '【不正解】容量 (SCU) を増やしても、Defender ポータルからの埋め込みトラフィックが Workspace2 へルーティングされるようにはなりません。',
        explanationEn: 'Adding SCUs increases throughput but does not route embedded Defender portal traffic to Workspace2.',
      },
      {
        id: 'C',
        textJa: 'Workspace1 の容量を Workspace2 に割り当てる。',
        textEn: 'Assign Workspace1 capacity to Workspace2.',
        isCorrect: false,
        explanationJa: '【不正解】容量の移動では、どのエクスペリエンスの要求をどのワークスペースで処理するかの割り当ては変わりません。',
        explanationEn: 'Reassigning capacity between workspaces does not change which workspace handles embedded experiences.',
      },
      {
        id: 'D',
        textJa: 'Workspace1 を埋め込みエージェントのトラフィック用に構成する。',
        textEn: 'Configure Workspace1 for embedded agent traffic.',
        isCorrect: false,
        explanationJa: '【不正解】これでは Defender ポータルからの埋め込み利用も Workspace1 に割り当てられてしまい、要件と逆になります。',
        explanationEn: 'Configuring Workspace1 for embedded traffic keeps security administrators on Workspace1 rather than routing them to Workspace2.',
      },
    ],
    overallExplanationJa: `Security Copilot のマルチ ワークスペース環境では、スタンドアロン利用と、Defender ポータル等の **埋め込みエクスペリエンス / エージェント トラフィック** の受け先をワークスペースごとに指定できます。Workspace2 には既に 5 SCU が割り当てられているため、埋め込みトラフィック用に指定するだけで分離が完了します。`,
    overallExplanationEn: `In multi-workspace Security Copilot environments, embedded portal and agent traffic can be routed to a designated workspace. Setting Workspace2 to handle embedded traffic separates Defender portal admins from standalone SOC analysts on Workspace1.`,
    keyPointsJa: [
      'スタンドアロン利用と埋め込みエクスペリエンス利用の受け先ワークスペースを分離可能',
      'Defender ポータル経由の利用 = 埋め込みトラフィック (Embedded / agent traffic)',
      '容量 (SCU) の増減ではなくルーティング先の構成がポイント',
    ],
    keyPointsEn: [
      'Embedded portal experiences and agents can be routed to a specific workspace',
      'Defender portal access counts as embedded experience traffic',
      'Requires configuring workspace routing rather than modifying SCU capacity',
    ],
    referenceTopic: 'Microsoft Security Copilot ワークスペースと埋め込みトラフィック ルーティング',
  },
  {
    id: 'pdf-q93',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud で未保護 AI ワークロードと推奨事項を集約確認するビュー',
    titleEn: 'Aggregating AI Workload Threat Protection Coverage in Defender for Cloud',
    scenarioJa: `複数の Azure サブスクリプションで、Microsoft Foundry を使用する AI アプリケーションを実行しています。
Microsoft Defender for Cloud による脅威保護の適用状況を集計し、未保護のワークロードと関連するセキュリティ推奨事項を1つのビューで確認する必要があります。`,
    scenarioEn: `You run AI applications using Microsoft Foundry across multiple Azure subscriptions.
You need to aggregate Microsoft Defender for Cloud threat protection coverage and view unprotected workloads along with related security recommendations in a single view.`,
    questionJa: 'どの画面を使用すべきですか。',
    questionEn: 'Which view should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Cloud の Data and AI security ダッシュボード',
        textEn: 'The Data and AI security dashboard in Microsoft Defender for Cloud',
        isCorrect: true,
        explanationJa: '【正解】Defender for Cloud の Data and AI security ダッシュボードでは、選択したサブスクリプション横断で AI やデータ ワークロードの保護適用状況、未保護リソース、関連推奨事項を一元的に確認できます。',
        explanationEn: 'The Data and AI security dashboard in Defender for Cloud aggregates protection coverage, unprotected AI/data workloads, and related recommendations in a unified view.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for Cloud の攻撃パス分析 (Attack path analysis)',
        textEn: 'Attack path analysis in Microsoft Defender for Cloud',
        isCorrect: false,
        explanationJa: '【不正解】攻撃パス分析は公開状態や権限を組み合わせた侵害経路を調べる機能であり、脅威保護プランの適用集計ビューではありません。',
        explanationEn: 'Attack path analysis identifies lateral exploitation paths rather than aggregating Defender plan coverage across workloads.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Purview の Data Security Posture Management ダッシュボード',
        textEn: 'The Data Security Posture Management dashboard in Microsoft Purview',
        isCorrect: false,
        explanationJa: '【不正解】Purview DSPM は機密データの過剰共有やデータ リスクを管理する機能であり、Defender for Cloud のワークロード脅威保護適用状況を集計する画面ではありません。',
        explanationEn: 'Microsoft Purview DSPM focuses on sensitive data posture and oversharing, not Defender for Cloud workload protection coverage.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Cloud の規制コンプライアンス (Regulatory compliance)',
        textEn: 'Regulatory compliance in Microsoft Defender for Cloud',
        isCorrect: false,
        explanationJa: '【不正解】規制コンプライアンスは MCSB や NIST などの標準ごとの準拠状況を確認する画面であり、AI ワークロード保護適用状況の集計専用ではありません。',
        explanationEn: 'Regulatory compliance maps assessments to compliance controls rather than providing an AI workload threat-protection coverage dashboard.',
      },
    ],
    overallExplanationJa: `Microsoft Defender for Cloud の **Data and AI security ダッシュボード** を使用すると、複数サブスクリプション上の AI (Microsoft Foundry / Azure OpenAI 等) およびデータ リソースについて、脅威保護の適用率、未保護リソース、対応すべき推奨事項を単一ビューで確認できます。`,
    overallExplanationEn: `The Data and AI security dashboard in Microsoft Defender for Cloud provides a unified view of threat-protection coverage, unprotected AI workloads, and recommendations across subscriptions.`,
    keyPointsJa: [
      'Data and AI security ダッシュボード: AI/データ資産の保護適用率・未保護リソース・推奨事項を一括表示',
      'Purview DSPM (データ リスク中心) や攻撃パス分析 (侵害経路分析) と区別する',
    ],
    keyPointsEn: [
      'Data and AI security dashboard aggregates AI/data workload protection coverage',
      'Distinct from Purview DSPM (data oversharing) and Attack Path Analysis (exploit chains)',
    ],
    referenceTopic: 'Defender for Cloud Data and AI Security ダッシュボード',
  },
  {
    id: 'pdf-q94',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '時折検索される Firewall ログを最低コストで 7 年間保持する Sentinel テーブル層',
    titleEn: 'Retaining Rarely Queried Firewall Logs for 7 Years at Lowest Cost in Microsoft Sentinel',
    scenarioJa: `Microsoft Sentinel の新しいワークスペース Workspace1 を作成します。Workspace1 は、調査中に時折しか使用されない Azure Firewall のログを取り込みます。
ログを最低コストで7年間保持する必要があります。このソリューションでは、調査担当者が必要なときに保持されたデータを検索できるようにする必要があります。`,
    scenarioEn: `You create a new Microsoft Sentinel workspace named Workspace1 that ingests Azure Firewall logs, which are only used occasionally during investigations.
You need to retain the logs for 7 years at the lowest possible cost while ensuring investigators can query the retained data when needed.`,
    questionJa: '実行すべき操作を1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Firewall のログを外部の Azure Storage アカウントにアーカイブする。',
        textEn: 'Archive the Azure Firewall logs externally to an Azure Storage account.',
        isCorrect: false,
        explanationJa: '【不正解】外部の Azure Storage へエクスポートしただけでは Sentinel のテーブルからそのまま検索できなくなります。',
        explanationEn: 'Exporting logs solely to an Azure Storage account removes built-in Sentinel searchability without re-ingestion.',
      },
      {
        id: 'B',
        textJa: 'ログを格納する Workspace1 のテーブルを、データ レイク層を使用するように構成する。',
        textEn: 'Configure the Workspace1 table that stores the logs to use the Data lake tier.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Sentinel のデータ レイク層 (Data lake tier) は大量のセキュリティ ログを分析層より低コストで長期間 (7年間など) 保持しつつ、必要なときにクエリで検索できます。',
        explanationEn: 'Configuring the table to use the Data lake tier provides low-cost long-term retention (7 years) while keeping the logs queryable for occasional investigations.',
      },
      {
        id: 'C',
        textJa: 'ログを格納する Workspace1 のテーブルを、分析層を使用するように構成する。',
        textEn: 'Configure the Workspace1 table that stores the logs to use the Analytics tier.',
        isCorrect: false,
        explanationJa: '【不正解】分析層は高頻度検索・分析ルール用でありコストが高く、分析保持期間の上限 (730日) もあるため最低コスト 7 年保持には適しません。',
        explanationEn: 'The Analytics tier is intended for frequent queries and analytics rules, carries higher cost, and caps interactive retention at 730 days.',
      },
      {
        id: 'D',
        textJa: 'Workspace1 のテーブル分析保持期間設定を 7 年間に延長して構成する。',
        textEn: 'Extend the interactive analytics retention setting of Workspace1 to 7 years.',
        isCorrect: false,
        explanationJa: '【不正解】Analytics テーブルの分析保持 (interactive retention) の上限は最大 730 日 (2 年) であり、7 年に設定できません。',
        explanationEn: 'Interactive analytics retention is capped at 730 days (2 years) and cannot be set to 7 years.',
      },
    ],
    overallExplanationJa: `Microsoft Sentinel で日常的な分析ルールには使わず、調査時に時折検索する大量ログを低コストで長期 (7年間) 保持するには、テーブルを **データ レイク層 (Data lake tier)** として構成します。`,
    overallExplanationEn: `For high-volume logs that are rarely queried and must be retained at minimal cost for 7 years while remaining searchable, use the Microsoft Sentinel Data lake tier.`,
    keyPointsJa: [
      'データ レイク層 (Data lake tier): 低コストな長期保管と必要時の検索を両立',
      '分析層 (Analytics tier) の対話型保持上限は最大 730 日 (2 年)',
      'Azure Storage 単独アーカイブは Sentinel 上で直接クエリできない',
    ],
    keyPointsEn: [
      'Data lake tier balances lowest-cost multi-year retention with on-demand queryability',
      'Analytics interactive retention maxes out at 730 days (2 years)',
      'External Azure Storage accounts are not directly queryable in Sentinel',
    ],
    referenceTopic: 'Microsoft Sentinel テーブル層 (Analytics / Data lake) と長期保持設計',
  },
  {
    id: 'pdf-q95',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender EASM におけるサードパーティ資産と所有権未確認資産の状態分類',
    titleEn: 'Classifying Third-Party and Unconfirmed Assets in Defender EASM',
    scenarioJa: `あなたは、Contoso, Ltd. という会社のインターネットに公開された資産を検出する Microsoft Defender External Attack Surface Management (Defender EASM) リソースを持っています。
次の要件を満たすように資産を分類する必要があります。
・サードパーティのインフラストラクチャ資産は、Contoso が所有する資産とは別に追跡しなければなりません。
・所有権が確認されていない資産は、所有権が確認されるまで、所有資産のインベントリの外に置かなければなりません。
状態の候補：承認済みインベントリ (Approved Inventory)、候補 (Candidate)、依存関係 (Dependency)、調査が必要 (Requires Investigation)`,
    scenarioEn: `You have a Microsoft Defender External Attack Surface Management (Defender EASM) resource that discovers internet-exposed assets for Contoso, Ltd.
You need to classify assets to meet these requirements:
- Third-party infrastructure assets must be tracked separately from Contoso-owned assets.
- Assets whose ownership is not yet confirmed must remain outside the owned-asset inventory until ownership is verified.
Candidate states: Approved Inventory, Candidate, Dependency, Requires Investigation.`,
    questionJa: 'サードパーティの資産と所有権が未確認の資産に適用する状態の正しい組み合わせを1つ選んでください。',
    questionEn: 'Which states should you apply to third-party assets and unconfirmed-ownership assets?',
    options: [
      {
        id: 'A',
        textJa: 'サードパーティの資産：調査が必要 (Requires Investigation)／所有権が未確認の資産：承認済みインベントリ (Approved Inventory)',
        textEn: 'Third-party: Requires Investigation / Unconfirmed: Approved Inventory',
        isCorrect: false,
        explanationJa: '【不正解】所有権未確認の資産を Approved Inventory に入れると所有資産として承認されてしまいます。第三者資産は Dependency です。',
        explanationEn: 'Unconfirmed assets must not be placed in Approved Inventory, and known third-party assets belong in Dependency.',
      },
      {
        id: 'B',
        textJa: 'サードパーティの資産：候補 (Candidate)／所有権が未確認の資産：調査が必要 (Requires Investigation)',
        textEn: 'Third-party: Candidate / Unconfirmed: Requires Investigation',
        isCorrect: false,
        explanationJa: '【不正解】Candidate は所有可能性の評価段階の資産用であり、明確な第三者インフラには Dependency を使用します。',
        explanationEn: 'Candidate is for unconfirmed potential assets, whereas confirmed third-party infrastructure should be marked Dependency.',
      },
      {
        id: 'C',
        textJa: 'サードパーティの資産：承認済みインベントリ (Approved Inventory)／所有権が未確認の資産：依存関係 (Dependency)',
        textEn: 'Third-party: Approved Inventory / Unconfirmed: Dependency',
        isCorrect: false,
        explanationJa: '【不正解】Approved Inventory は自社所有・管理資産のための状態であり、状態の意味が逆転しています。',
        explanationEn: 'Approved Inventory is strictly for confirmed organization-owned assets, reversing the required states.',
      },
      {
        id: 'D',
        textJa: 'サードパーティの資産：依存関係 (Dependency)／所有権が未確認の資産：候補 (Candidate)',
        textEn: 'Third-party: Dependency / Unconfirmed: Candidate',
        isCorrect: true,
        explanationJa: '【正解】第三者が所有し業務を支えるインフラは「依存関係 (Dependency)」、所有権の確認待ちで承認済みインベントリに含めない資産は「候補 (Candidate)」に分類します。',
        explanationEn: 'Classify known third-party infrastructure as Dependency and unverified assets awaiting ownership confirmation as Candidate.',
      },
    ],
    overallExplanationJa: `Defender EASM の資産ステートにおいて、外部パートナーやクラウド事業者が所有する関連インフラは **依存関係 (Dependency)**、自社資産である可能性があるが所有権を検証中の資産は **候補 (Candidate)** に分類して承認済みインベントリと分離します。`,
    overallExplanationEn: `In Defender EASM, third-party infrastructure is labeled Dependency and assets pending ownership verification are tracked as Candidate outside Approved Inventory.`,
    keyPointsJa: [
      'Dependency (依存関係): 第三者所有の関連インフラを自社所有資産と分けて追跡',
      'Candidate (候補): 所有権が未確認であり承認済みインベントリ外で評価する資産',
      'Approved Inventory: 所有・管理が確認済みの公式インベントリ',
    ],
    keyPointsEn: [
      'Dependency: tracks third-party infrastructure separately from owned assets',
      'Candidate: holds unconfirmed assets outside Approved Inventory pending verification',
      'Approved Inventory: confirmed organization-owned external assets',
    ],
    referenceTopic: 'Defender EASM 資産インベントリと状態分類 (Asset States)',
  },
  {
    id: 'pdf-q96',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'カスタム Sentinel データ コネクタで SaaS の JSON ログを取り込む最初の準備',
    titleEn: 'First Step to Prepare Log Analytics Workspace for Custom JSON Connector',
    scenarioJa: `Microsoft Sentinel が有効になっている Workspace1 という名前の Log Analytics ワークスペースがあります。会社は、サービスとしてのソフトウェア (SaaS) アプリケーションから JSON セキュリティ イベントを受信します。カスタム Microsoft Sentinel データ コネクタを作成する予定です。
受信する JSON データに備えて Workspace1 を準備する必要があります。`,
    scenarioEn: `You have a Log Analytics workspace named Workspace1 with Microsoft Sentinel enabled. Your organization receives JSON security events from a SaaS application and plans to create a custom Microsoft Sentinel data connector.
You need to prepare Workspace1 to receive the incoming JSON data.`,
    questionJa: '最初に何をする必要がありますか。1つ選んでください。',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'SaaS アプリケーションの診断設定を構成する。',
        textEn: 'Configure SaaS app diagnostic settings.',
        isCorrect: false,
        explanationJa: '【不正解】診断設定は Azure リソース用の機能であり、外部 SaaS アプリからのカスタム JSON 取り込みテーブルを作成する操作ではありません。',
        explanationEn: 'Diagnostic settings apply to Azure resources and do not create a target table schema for external SaaS JSON ingestion.',
      },
      {
        id: 'B',
        textJa: 'Workspace1 に組み込みのコネクタを導入する。',
        textEn: 'Install a built-in connector in Workspace1.',
        isCorrect: false,
        explanationJa: '【不正解】今回は独自 JSON を扱うカスタム コネクタの準備であり、別製品用の組み込みコネクタでは保存先テーブル スキーマを用意できません。',
        explanationEn: 'Installing an unrelated built-in connector does not define the custom table schema for your SaaS JSON events.',
      },
      {
        id: 'C',
        textJa: 'Workspace1 にカスタム ログ テーブルを作成する。',
        textEn: 'Create a custom log table in Workspace1.',
        isCorrect: true,
        explanationJa: '【正解】Logs Ingestion API を使ったカスタム コネクタでは、データ収集ルール (DCR) の送信先となるスキーマ (列名・データ型) を定義するため、最初に Workspace1 にカスタム ログ テーブルを作成します。',
        explanationEn: 'With a custom connector using the Logs Ingestion API, you must first create a custom log table in Workspace1 to define the destination schema for the DCR.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel で分析ルールを作成する。',
        textEn: 'Create an analytics rule in Sentinel.',
        isCorrect: false,
        explanationJa: '【不正解】分析ルールはデータ取り込み後の検知用であり、JSON データの受け皿を作成する最初の準備ではありません。',
        explanationEn: 'Analytics rules detect threats after ingestion and do not prepare the workspace schema for incoming data.',
      },
    ],
    overallExplanationJa: 'Logs Ingestion API とデータ収集ルール (DCR) を使って外部 SaaS からカスタム JSON ログを Sentinel へ取り込む場合、DCR の出力先スキーマとして最初に **カスタム ログ テーブル (`*_CL`)** をワークスペースに作成する必要があります。',
    overallExplanationEn: `Before configuring a custom connector and DCR with the Logs Ingestion API, you must first create the destination custom log table (*_CL) in Workspace1 to define its columns and types.`,
    keyPointsJa: [
      'カスタム JSON 取り込み手順: ① カスタム ログ テーブル作成 → ② DCR / DCE 構成 → ③ API 送信',
      'TimeGenerated 列など保存先スキーマを最初に定義する必要がある',
    ],
    keyPointsEn: [
      'Custom ingestion order: 1. Create custom log table -> 2. Configure DCR/DCE -> 3. Send via API',
      'Destination schema (including TimeGenerated) must exist before wiring the DCR',
    ],
    referenceTopic: 'Sentinel カスタム ログ テーブルと Logs Ingestion API',
  },
  {
    id: 'pdf-q97',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Windows LOB アプリ VM と Linux DB VM のマルウェア対策プラン選定',
    titleEn: 'Selecting Defender for Cloud Antimalware Plans for Windows and Linux VMs',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあります。Sub1 には、Windows Server または Linux を実行する仮想マシンが60台あります。Windows Server の仮想マシンはすべて基幹業務 (LOB) アプリケーションをホストし、Linux の仮想マシンはすべてバックエンド データベースをホストしています。
これらの仮想マシンでマルウェア対策を有効にする必要があります。各プランは1回、複数回、またはまったく使用しない場合があります。`,
    scenarioEn: `Azure subscription Sub1 contains 60 virtual machines running either Windows Server or Linux. All Windows Server VMs host line-of-business (LOB) applications, and all Linux VMs host backend databases.
You need to enable antimalware protection on these virtual machines. Each plan may be used once, more than once, or not at all.`,
    questionJa: '仮想マシンの種類ごとに有効にすべき Microsoft Defender for Cloud のプランの組み合わせを、次のうちから1つ選んでください。',
    questionEn: 'Which combination of Defender for Cloud plans should you enable for Windows Server and Linux VMs?',
    options: [
      {
        id: 'A',
        textJa: 'Windows Server：Microsoft Defender for Servers／Linux：Microsoft Defender for Databases',
        textEn: 'Windows Server: Microsoft Defender for Servers / Linux: Microsoft Defender for Databases',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Databases は DB 層への攻撃検出であり、Linux VM 自体の OS マルウェア対策は提供しません。',
        explanationEn: 'Defender for Databases protects database workloads, not OS-level antimalware on Linux VMs.',
      },
      {
        id: 'B',
        textJa: 'Windows Server：Microsoft Defender for App Service／Linux：Microsoft Defender for Servers',
        textEn: 'Windows Server: Microsoft Defender for App Service / Linux: Microsoft Defender for Servers',
        isCorrect: false,
        explanationJa: '【不正解】Windows VM 上の LOB アプリは PaaS の Azure App Service ではないため、Defender for App Service は該当しません。',
        explanationEn: 'LOB apps on Windows Server VMs are not Azure App Service PaaS resources.',
      },
      {
        id: 'C',
        textJa: 'Windows Server：Microsoft Defender for Servers／Linux：Microsoft Defender for Servers',
        textEn: 'Windows Server: Microsoft Defender for Servers / Linux: Microsoft Defender for Servers',
        isCorrect: true,
        explanationJa: '【正解】ゲスト OS 上のアプリや DB の役割にかかわらず、Windows Server および Linux 仮想マシンのマルウェア対策・EDR は両方とも Microsoft Defender for Servers で提供されます。',
        explanationEn: 'Microsoft Defender for Servers provides OS-level antimalware and EDR for both Windows Server and Linux VMs regardless of what workload runs inside them.',
      },
      {
        id: 'D',
        textJa: 'Windows Server：Defender CSPM／Linux：Microsoft Defender for Databases',
        textEn: 'Windows Server: Defender CSPM / Linux: Microsoft Defender for Databases',
        isCorrect: false,
        explanationJa: '【不正解】Defender CSPM は姿勢管理であり、VM 上のマルウェア対策機能ではありません。',
        explanationEn: 'Defender CSPM evaluates posture and attack paths rather than providing VM antimalware.',
      },
      {
        id: 'E',
        textJa: 'Windows Server：Microsoft Defender for Resource Manager／Linux：Microsoft Defender for App Service',
        textEn: 'Windows Server: Microsoft Defender for Resource Manager / Linux: Microsoft Defender for App Service',
        isCorrect: false,
        explanationJa: '【不正解】管理プレーン監視や App Service 向けプランでは VM のマルウェア対策を行えません。',
        explanationEn: 'Neither Defender for Resource Manager nor Defender for App Service provides OS antimalware on VMs.',
      },
      {
        id: 'F',
        textJa: 'Windows Server：Microsoft Defender for Databases／Linux：Defender CSPM',
        textEn: 'Windows Server: Microsoft Defender for Databases / Linux: Defender CSPM',
        isCorrect: false,
        explanationJa: '【不正解】どちらの VM に対しても OS マルウェア対策を提供するプランではありません。',
        explanationEn: 'Neither plan provides OS-level antimalware for Windows Server or Linux VMs.',
      },
    ],
    overallExplanationJa: `仮想マシン上のマルウェア対策 (Defender for Endpoint 統合を含む) は、中で稼働するワークロード (LOB アプリや DB) の種別ではなく **OS 保護の層** で判断し、Windows Server と Linux の双方に対して **Microsoft Defender for Servers** を有効にします。`,
    overallExplanationEn: `OS-level antimalware for both Windows Server and Linux VMs is provided by Microsoft Defender for Servers, regardless of whether the VMs host LOB apps or databases.`,
    keyPointsJa: [
      'VM の OS マルウェア対策・EDR = Microsoft Defender for Servers (Windows / Linux 共通)',
      '内部で動くアプリや DB 名称に惑わされないこと',
    ],
    keyPointsEn: [
      'Antimalware and EDR on Windows and Linux VMs = Microsoft Defender for Servers',
      'Do not confuse workload roles inside the OS with PaaS Defender plans',
    ],
    referenceTopic: 'Microsoft Defender for Servers によるクロスプラットフォーム VM 保護',
  },
  {
    id: 'pdf-q98',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure と AWS で環境コンテキストに基づくリスク評価を行うためのプラン設定',
    titleEn: 'Enabling Context-Aware Risk Prioritization Across Azure and AWS',
    scenarioJa: `Azure サブスクリプションがあり、Microsoft Defender for Cloud の Foundational Cloud Security Posture Management (CSPM) プランが有効になっています。
セキュリティ体制の管理のために Defender for Cloud に接続された Amazon Web Services (AWS) アカウントがあります。
Defender for Cloud では、Azure と AWS のリソースに対するセキュリティ推奨事項のリスク レベルが、推奨事項の重大度だけに基づいて割り当てられています。
Defender for Cloud が、環境のコンテキストを考慮して推奨事項のリスク レベルを評価するようにする必要があります。`,
    scenarioEn: `You have an Azure subscription with Microsoft Defender for Cloud's Foundational CSPM plan enabled, and an AWS account connected to Defender for Cloud.
Currently, risk levels for security recommendations on Azure and AWS resources are assigned solely based on recommendation severity.
You need Defender for Cloud to evaluate recommendation risk levels considering environmental context.`,
    questionJa: '行うべきことを1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'AWS の VM を Azure Arc に追加する。',
        textEn: 'Onboard AWS VMs to Azure Arc.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Arc へのサーバー登録だけでは、Foundational CSPM からコンテキスト考慮型のリスク評価へ切り替わりません。',
        explanationEn: 'Onboarding EC2 VMs to Azure Arc does not unlock contextual risk prioritization without the Defender CSPM plan.',
      },
      {
        id: 'B',
        textJa: 'Defender for Servers P2 を有効化。',
        textEn: 'Enable Defender for Servers P2.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Servers Plan 2 はサーバーの脅威検出・脆弱性評価プランであり、CSPM のコンテキスト型リスク評価機能を有効化するプランではありません。',
        explanationEn: 'Defender for Servers Plan 2 provides server workload protection rather than CSPM contextual risk scoring.',
      },
      {
        id: 'C',
        textJa: 'CIS AWS v3.0.0 標準を割り当てる。',
        textEn: 'Assign CIS AWS v3.0.0 standard.',
        isCorrect: false,
        explanationJa: '【不正解】規制標準の追加は準拠評価項目を増やすだけであり、推奨事項の重大度に環境コンテキストを加味する設定ではありません。',
        explanationEn: 'Assigning a compliance standard adds control checks but does not enable context-aware risk prioritization.',
      },
      {
        id: 'D',
        textJa: 'Defender CSPM プランを有効にする。',
        textEn: 'Enable the Defender CSPM plan.',
        isCorrect: true,
        explanationJa: '【正解】Azure サブスクリプションと AWS コネクタで有料の Defender CSPM プランを有効にすると、外部公開、攻撃パス、機密データ、権限などの環境コンテキストに基づくリスク評価・優先順位付けが利用可能になります。',
        explanationEn: 'Enabling the Defender CSPM plan activates context-aware risk prioritization (factoring in exposure, permissions, sensitive data, and attack paths) across Azure and AWS.',
      },
    ],
    overallExplanationJa: `無料の Foundational CSPM では推奨事項の重大度のみに基づく静的な評価に留まりますが、**Defender CSPM プラン** を有効にすることで、インターネット公開状態・権限・機密データ・攻撃パスといった環境のコンテキストを考慮したリスク レベル評価が可能になります。`,
    overallExplanationEn: `Upgrading from Foundational CSPM to the Defender CSPM plan unlocks contextual risk assessment across Azure and AWS based on exposure, permissions, data sensitivity, and attack paths.`,
    keyPointsJa: [
      'Foundational CSPM: 基本的な推奨事項・重大度のみに基づく評価',
      'Defender CSPM: 環境コンテキスト (公開性・攻撃パス・機密性・アクセス権) に基づく動的リスク優先順位付け',
    ],
    keyPointsEn: [
      'Foundational CSPM evaluates recommendations by static severity only',
      'Defender CSPM adds contextual risk prioritization using attack paths and exposure',
    ],
    referenceTopic: 'Foundational CSPM と Defender CSPM の機能差 (コンテキスト リスク評価)',
  },
  {
    id: 'pdf-q99',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ASN・ホスト名・IP・SSL 証明書のマッピングと脆弱性スキャンに使う製品',
    titleEn: 'Mapping and Vulnerability Scanning External Infrastructure Using Defender EASM',
    scenarioJa: `Azure サブスクリプションがあります。
次のものについて、オンライン インフラストラクチャのマッピングと脆弱性スキャンを行う予定です。
・ASN
・ホスト名
・IP アドレス
・SSL 証明書`,
    scenarioEn: `You have an Azure subscription. You plan to map and vulnerability-scan your online infrastructure covering:
- ASNs
- Hostnames
- IP addresses
- SSL certificates`,
    questionJa: '使用すべきものを1つ選んでください。',
    questionEn: 'Which service should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Identity',
        textEn: 'Microsoft Defender for Identity',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Identity はオンプレミス AD DS 等の認証・ディレクトリ攻撃を検出する製品であり、外部公開資産の探索機能はありません。',
        explanationEn: 'Defender for Identity monitors on-premises AD DS and identity signals rather than mapping external internet assets.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender External Attack Surface Management (Defender EASM)',
        textEn: 'Microsoft Defender External Attack Surface Management (Defender EASM)',
        isCorrect: true,
        explanationJa: '【正解】Defender EASM はドメインや IP などを起点に ASN、ホスト名、IP アドレス、SSL 証明書をたどって組織の外部攻撃対象領域を自動的にマッピングし、脆弱性や構成不備を検出します。',
        explanationEn: 'Defender EASM discovers and maps external attack surfaces across ASNs, hostnames, IPs, and SSL certificates to identify exposures and vulnerabilities.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Endpoint',
        textEn: 'Microsoft Defender for Endpoint',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Endpoint は登録済みエンドポイント内部の保護・EDR を行う製品です。',
        explanationEn: 'Defender for Endpoint protects enrolled endpoints internally rather than mapping external infrastructure.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Cloud',
        textEn: 'Microsoft Defender for Cloud',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud はクラウド内の接続済みリソース構成を評価しますが、ASN や証明書をたどって未知の外部公開資産を発見するのは Defender EASM の役割です。',
        explanationEn: 'Defender for Cloud assesses connected cloud workloads internally, whereas Defender EASM maps external internet-facing infrastructure.',
      },
    ],
    overallExplanationJa: `ASN、ホスト名、IP アドレス、SSL 証明書といったインターネット上の公開情報から組織の外部攻撃対象領域 (アタック サーフェス) をマッピングし、脆弱性を評価する専用サービスは **Microsoft Defender EASM** です。`,
    overallExplanationEn: `Microsoft Defender EASM maps internet-facing infrastructure (ASNs, hostnames, IPs, SSL certificates) from an attacker's outside-in perspective to detect vulnerabilities.`,
    keyPointsJa: [
      'Defender EASM: 外側 (インターネット) から ASN・ドメイン・IP・SSL 証明書を起点に公開資産を発見',
      'Defender for Cloud (クラウド内側) や Defender for Endpoint (端末内側) との対比を把握する',
    ],
    keyPointsEn: [
      'Defender EASM discovers outside-in attack surface via ASNs, hostnames, IPs, and certificates',
      'Complements inside-out posture management in Defender for Cloud',
    ],
    referenceTopic: 'Microsoft Defender External Attack Surface Management (EASM) の用途',
  },
  {
    id: 'pdf-q100',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Security Store エージェントの承認待ち解除と最小特権セットアップ手順',
    titleEn: 'Unblocking Partner Agent Setup from Microsoft Security Store',
    scenarioJa: `次の表に示すユーザーが含まれる Microsoft Entra テナントがあります。

| 名前 | ロール |
| :--- | :--- |
| User1 | Security Copilot 共同作成者 (Security Copilot Contributor) |
| User2 | グローバル管理者 (Global Administrator) |

Microsoft Security Copilot ワークスペースがあります。Microsoft Security Store から、Microsoft Intune へのアクセスを必要とする Agent1 という名前のパートナー製エージェントをデプロイする予定です。
User1 が Agent1 を選択すると、セットアップ (Set up) オプションは利用できません。
User1 がエージェントのセットアップを完了できるようにする必要があります。ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have a Microsoft Entra tenant containing the following users:

| Name | Role |
| :--- | :--- |
| User1 | Security Copilot Contributor |
| User2 | Global Administrator |

You have a Microsoft Security Copilot workspace. You plan to deploy a partner-built agent named Agent1 from Microsoft Security Store that requires access to Microsoft Intune.
When User1 selects Agent1, the "Set up" option is unavailable.
You need to enable User1 to complete the agent setup while adhering to the principle of least privilege.`,
    questionJa: '最初に行うべきことを1つ選んでください。',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'Security Copilot で Agent1 の ID を作成する。',
        textEn: 'Create an agent ID for Agent1 in Copilot.',
        isCorrect: false,
        explanationJa: '【不正解】エージェント ID を作成しても、Intune データへのテナント承認待ちは解消されず、Set up ボタンは有効になりません。',
        explanationEn: 'Creating an agent ID does not grant the tenant consent required for Intune access.',
      },
      {
        id: 'B',
        textJa: 'Security Copilot で Agent1 のデータ ソースを設定。',
        textEn: 'Configure Agent1 data sources in Copilot.',
        isCorrect: false,
        explanationJa: '【不正解】承認待ちでセットアップが開始できない段階では、データ ソース構成でアクセス許可の未承認状態を解消できません。',
        explanationEn: 'Configuring data sources does not bypass the prerequisite Global Administrator approval.',
      },
      {
        id: 'C',
        textJa: 'User1 に AI 管理者 (AI Administrator) ロールを付与。',
        textEn: 'Assign AI Administrator role to User1.',
        isCorrect: false,
        explanationJa: '【不正解】AI 管理者にはパートナー製エージェントの Microsoft 製品アクセス許可を承認する権限がなく、最小特権にも反します。',
        explanationEn: 'AI Administrator cannot perform Global Administrator consent for partner agents, and elevates User1 unnecessarily.',
      },
      {
        id: 'D',
        textJa: 'User1 に Agent ID 管理者ロールを割り当てる。',
        textEn: 'Assign Agent ID Administrator to User1.',
        isCorrect: false,
        explanationJa: '【不正解】Agent ID 管理者はエージェント ID の管理用ロールであり、Intune へのアクセス許可を承認する権限はありません。',
        explanationEn: 'Agent ID Administrator manages agent identities rather than granting Global Administrator consent for Intune access.',
      },
      {
        id: 'E',
        textJa: 'User2 にエージェントのセットアップを承認するよう指示する。',
        textEn: 'Instruct User2 to approve the agent setup.',
        isCorrect: true,
        explanationJa: '【正解】Intune など Microsoft 製品データを利用するパートナー製エージェントは、最初にグローバル管理者 (User2) によるアクセス許可の承認が必要です。承認完了後、User1 は権限昇格なしで既存ロールのままセットアップを実行できます。',
        explanationEn: 'A Global Administrator (User2) must first approve the partner agent’s access permissions to Microsoft Intune; once approved, User1 can complete setup under least privilege.',
      },
    ],
    overallExplanationJa: `Security Store のパートナー製エージェントが Intune などの Microsoft 製品にアクセスする場合、**グローバル管理者 (User2)** がアクセス許可を承認するまで「Set up」オプションは無効化されます。User1 に上位ロールを与えず User2 に承認を依頼するのが最小特権の原則に合致します。`,
    overallExplanationEn: `When a Security Store partner agent requires access to Microsoft products like Intune, the Set up option remains locked until a Global Administrator (User2) approves permissions. Having User2 approve keeps User1 at least privilege.`,
    keyPointsJa: [
      'Security Store パートナー製エージェントの初期承認 = グローバル管理者 (Global Administrator)',
      '承認後に Security Copilot Contributor (User1) がセットアップを完了可能',
      'User1 への過剰なロール昇格は最小特権違反',
    ],
    keyPointsEn: [
      'Partner agents accessing Microsoft 365/Intune require Global Administrator approval first',
      'After approval, Security Copilot Contributor (User1) can run Set up',
      'Avoid elevating User1 to preserve least privilege',
    ],
    referenceTopic: 'Microsoft Security Store パートナー製エージェントの承認フロー',
  },
];
