import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH5: Question[] = [
  {
    id: 'sc500-q77',
    number: 77,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Virtual WAN セキュリティで保護された仮想ハブとルーティング インテント',
    titleEn: 'Securing Azure Virtual WAN with Secured Virtual Hubs and Routing Intent',
    scenarioJa: `Contoso Ltd. は、2 つの Azure リージョンにまたがる複数のブランチ オフィスと仮想ネットワークを接続する 2 つの仮想ハブを備えた Azure Virtual WAN を使用しています。セキュリティ チームは、インターネット向けトラフィックとブランチ オフィス間 (Branch-to-branch) を通過するトラフィックの両方が各仮想ハブを通過する際に、一元的に検査および保護されるようにしたいと考えています。

ソリューションでは単一の場所からセキュリティ ポリシーを一元管理でき、各接続で手動のルート テーブル変更を必要とするのではなく、ネイティブの Azure Virtual WAN 機能を使用する必要があります。`,
    scenarioEn: `Contoso Ltd. uses Azure Virtual WAN with two virtual hubs that connect several branch offices and virtual networks across two Azure regions. The security team wants to centrally inspect and secure both internet-bound traffic and traffic that passes between branch offices (branch-to-branch traffic) as it transits each virtual hub. The solution must allow security policies to be managed centrally from a single location and must use native Azure Virtual WAN capabilities rather than requiring manual route table changes on each connection.`,
    questionJa: 'これらの要件を満たすために何を構成すべきですか？',
    questionEn: 'What should you configure to meet these requirements?',
    options: [
      {
        id: 'A',
        textJa: '各スポーク仮想ネットワークにサードパーティ製のネットワーク仮想アプライアンス (NVA) をデプロイし、インターネット向けおよびブランチ間のトラフィックを各アプライアンスへ誘導するためすべての接続にユーザー定義ルート (UDR) を手動で構成して個別管理する',
        textEn: 'Deploy a third-party network virtual appliance in each spoke virtual network and manually configure user-defined routes on every connection for traffic inspection',
        isCorrect: false,
        explanationJa: '【不正解】このアプローチでは接続ごとに手動でルートを構成する必要があり、手動のルート テーブル変更を回避する要件に直接反します。またスポーク単位でデプロイされた NVA ではネイティブな Virtual WAN の一元的なセキュリティ統合を提供できません。',
        explanationEn: 'This approach requires manual route configuration on every connection, which directly contradicts the requirement to avoid manual route table changes, and third-party NVAs deployed per spoke do not provide the centralized, native Virtual WAN security integration described.'
      },
      {
        id: 'B',
        textJa: '各仮想ハブに Azure Firewall をデプロイして「セキュリティで保護された仮想ハブ」(Secured virtual hub) を作成し、Azure Firewall Manager を使用してルーティング インテント (Routing intent) とセキュリティ ポリシーを構成する',
        textEn: 'Deploy Azure Firewall in each virtual hub to create secured virtual hubs, and use Azure Firewall Manager to configure routing intent and security policies',
        isCorrect: true,
        explanationJa: '【正解】Azure Firewall Manager を使用すると、仮想ハブに直接 Azure Firewall をデプロイして Virtual WAN の仮想ハブを「セキュリティで保護された仮想ハブ」に変換でき、さらにルーティング インテント (Routing intent) を構成することで、すべての接続で手動でルート テーブルを構成することなく、インターネット向けトラフィックとプライベート (ブランチ間) トラフィックの両方を検査のためにファイアウォールへ自動的に誘導できます。',
        explanationEn: 'Azure Firewall Manager allows you to convert a Virtual WAN virtual hub into a secured virtual hub by deploying Azure Firewall directly in the hub, and routing intent lets you centrally direct both internet and private (branch-to-branch) traffic through the firewall for inspection without manually configuring route tables on every connection.'
      },
      {
        id: 'C',
        textJa: 'Virtual WAN ハブに接続されたすべてのスポーク仮想ネットワーク上のサブネットおよびネットワーク インターフェイスにネットワーク セキュリティ グループ (NSG) を構成し、インターネット向けおよびブランチ間ルールのポリシーを各環境で個別に管理する',
        textEn: 'Configure Network Security Groups on every virtual network connected to the Virtual WAN hubs and manage internet and branch rules individually',
        isCorrect: false,
        explanationJa: '【不正解】NSG は個別の仮想ネットワーク内のサブネットまたは NIC レベルで動作するため、Virtual WAN 展開全体にわたるインターネット トラフィックやブランチ間トラフィックのハブ レベルでの一元検査は提供できず、ポリシーの一元管理要件も満たしません。',
        explanationEn: 'NSGs operate at the subnet or NIC level within individual virtual networks and cannot provide centralized, hub-level inspection of internet or inter-branch traffic across a Virtual WAN deployment, nor do they offer the centralized policy management the requirement specifies.'
      },
      {
        id: 'D',
        textJa: 'Azure Firewall と集約用ルート テーブルをデプロイした別の外部ハブ仮想ネットワークを作成し、各リージョンの Virtual WAN 仮想ハブに直接ピアリング接続してすべてのインターネット向けおよびブランチ間トラフィックを転送・検査する',
        textEn: 'Create a separate hub virtual network with Azure Firewall deployed and peer it directly to each Virtual WAN virtual hub to route all internet and branch traffic',
        isCorrect: false,
        explanationJa: '【不正解】別のハブ VNet に Azure Firewall をデプロイする構成は Virtual WAN 外部で使用される従来のハブ アンド スポーク パターンであり、ネイティブの Secured virtual hub 機能を活用できず、Virtual WAN ハブをそのように外部ハブ VNet とピアリングして一元的なルーティング インテントを構成することはできません。',
        explanationEn: 'Deploying Azure Firewall in a separate hub VNet and peering it to the Virtual WAN hub is a hub-and-spoke pattern used outside Virtual WAN; it does not leverage native secured virtual hub functionality and Virtual WAN hubs cannot be peered to external VNets in this manner for centralized routing intent.'
      }
    ],
    overallExplanationJa: `Azure Virtual WAN 環境をネイティブかつ一元的に保護するには、**Azure Firewall Manager** を使用して仮想ハブ内に Azure Firewall をデプロイして**セキュリティで保護された仮想ハブ (Secured virtual hub)** に変換し、**ルーティング インテント (Routing intent)** を適用します。

これにより、インターネット トラフィックとプライベート (ブランチ間・VNet 間) トラフィックの両方が手動ルート テーブル設定なしで自動的に Azure Firewall を経由して検査されるようになり、全ハブのセキュリティ ポリシーも Azure Firewall Manager から一元管理できます。`,
    overallExplanationEn: `Securing an Azure Virtual WAN deployment centrally is achieved by converting virtual hubs into secured virtual hubs using Azure Firewall Manager, then applying routing intent so both internet and private traffic are automatically routed through Azure Firewall for inspection. This native integration eliminates the need for manual route table management and provides a single pane of glass for security policy administration across all hubs.`,
    keyPointsJa: [
      'Virtual WAN ハブでインターネット＆ブランチ間トラフィックを手動ルート変更なしに一元検査 ＝ Secured virtual hub ＋ Azure Firewall Manager の Routing intent',
      'Azure Firewall Manager で複数ハブに適用するファイアウォール ポリシーを一元管理できる',
      '従来の UDR 手動管理やスポーク単位 NVA 配置は運用要件とネイティブ要件に反する'
    ],
    keyPointsEn: [
      'Convert Virtual WAN hubs to secured virtual hubs by deploying Azure Firewall in each hub',
      'Configure Routing Intent via Azure Firewall Manager to automatically inspect internet and private (branch-to-branch) traffic',
      'Eliminates manual route table management across Virtual WAN connections'
    ],
    referenceTopic: 'Azure Virtual WAN の Secured Virtual Hub と Routing Intent'
  },
  {
    id: 'sc500-q78',
    number: 78,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Firewall Standard のネットワーク規則での FQDN フィルタリング (DNS プロキシ有効化)',
    titleEn: 'Using FQDNs in Azure Firewall Network Rules with DNS Proxy (UDP/123)',
    scenarioJa: `あなたの会社では、複数の Windows Server 仮想マシンを含む仮想ネットワークからの送信トラフィックを制御するために Azure Firewall Standard を使用しています。VM は UDP ポート 123 経由で完全修飾ドメイン名 (FQDN) time.contoso-partner.com を使用して特定の外部 NTP サーバーに接続し、時刻を同期できる必要があります。外部パートナーは、この NTP サーバーの IP アドレスが予告なく定期的に変更されると述べているため、IP アドレスによるフィルタリングは受け入れられません。

UDP ポート 123 上の他のすべての送信トラフィックをブロックしつつ、FQDN を使用してこのトラフィックを許可するように Azure Firewall を構成する必要があります。`,
    scenarioEn: `Your company uses Azure Firewall Standard to control outbound traffic from a virtual network containing several Windows Server virtual machines. The virtual machines must be allowed to synchronize time by contacting a specific external NTP server using the fully qualified domain name (FQDN) time.contoso-partner.com over UDP port 123. The external partner has stated that the IP address of this NTP server changes periodically without notice, so filtering by IP address is not acceptable.

You need to configure Azure Firewall to allow this traffic using the FQDN, while blocking all other outbound traffic on UDP port 123.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'ファイアウォールのアプリケーション規則コレクションにターゲット FQDN として time.contoso-partner.com、プロトコルとして UDP とポート 123 を指定した許可規則を新しく作成する',
        textEn: 'Create an application rule in a firewall policy collection that specifies time.contoso-partner.com as the target FQDN, using UDP and port 123 for outbound synchronization.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Firewall のアプリケーション規則は HTTP、HTTPS、および MSSQL トラフィックの FQDN フィルタリングのみをサポートしており、UDP ポート 123 のような任意のプロトコルのフィルタリングには使用できないため、この NTP シナリオでは機能しません。',
        explanationEn: 'Azure Firewall application rules only support FQDN filtering for HTTP, HTTPS, and MSSQL traffic; they cannot be used to filter arbitrary protocols like UDP on port 123, so an application rule would not work for this NTP scenario.'
      },
      {
        id: 'B',
        textJa: '宛先 IP として time.contoso-partner.com の現在の IP アドレス、プロトコルとして UDP とポート 123 を指定したネットワーク規則を作成し、アドレス変更に合わせて規則を定期的に手動更新する',
        textEn: 'Create a network rule using the current IP address of time.contoso-partner.com as the destination, with UDP as the protocol and port 123, and update the rule periodically.',
        isCorrect: false,
        explanationJa: '【不正解】静的 IP アドレスによるフィルタリングはパートナーの NTP サーバーの IP アドレスが変更されると即座に破綻し、IP の変化を追跡して手動で規則を更新する方法は信頼性に欠け要件も満たしません。',
        explanationEn: 'Filtering by a static IP address would break as soon as the partner\'s NTP server IP address changes, and manually updating firewall rules to track a changing IP is unreliable and not a supported dynamic approach in Azure Firewall.'
      },
      {
        id: 'C',
        textJa: 'ファイアウォールのアプリケーション規則コレクションに必要な外部 NTP サービス向けの組み込み FQDN タグを追加し、プロトコルとして UDP と宛先ポート 123 を指定してすべての VM からの送信トラフィックを許可する',
        textEn: 'Add a built-in FQDN tag for the required external NTP service to an application rule collection on the firewall, and configure the protocol to allow UDP port 123 outbound.',
        isCorrect: false,
        explanationJa: '【不正解】FQDN タグは特定の既知サービス (Windows Update や App Service など) 向けに Microsoft が管理する事前定義済み FQDN グループであり、カスタムのサードパーティ NTP サーバー用 FQDN タグは存在しません。また FQDN タグは UDP/123 非対応のアプリケーション規則でのみ使用されます。',
        explanationEn: 'FQDN tags are predefined groups of FQDNs maintained by Microsoft for specific well-known services (such as Windows Update or App Service), and there is no FQDN tag for a custom third-party NTP server; FQDN tags are also used only within application rules, which do not support UDP/123.'
      },
      {
        id: 'D',
        textJa: 'ファイアウォールで DNS プロキシ (DNS proxy) を有効にし、宛先として FQDN time.contoso-partner.com、プロトコルとして UDP とポート 123 を指定したネットワーク規則を作成する',
        textEn: 'Enable DNS proxy on the firewall, and then create a network rule that specifies the FQDN time.contoso-partner.com as the destination, with UDP as the protocol and port 123.',
        isCorrect: true,
        explanationJa: '【正解】Azure Firewall のネットワーク規則では、ファイアウォールで DNS プロキシが有効になっている場合に限り FQDN フィルタリングがサポートされます。有効化すると、ファイアウォールが FQDN を名前解決して許可された IP アドレスを動的に更新し、アプリケーション規則では扱えない任意のプロトコル・ポート (UDP 123 等) で FQDN 指定が可能になります。',
        explanationEn: 'Network rules in Azure Firewall support FQDN filtering only for network rules when DNS proxy is enabled on the firewall; once enabled, the firewall resolves the FQDN and dynamically updates the allowed IP addresses, which is required here because network rules (not application rules) support arbitrary protocols and ports such as UDP/123.'
      }
    ],
    overallExplanationJa: `Azure Firewall の**アプリケーション規則**は HTTP / HTTPS / MSSQL に限定されているため、NTP (UDP/123) などの任意のプロトコルやポートには使用できません。

一方で、**ネットワーク規則**では任意のプロトコル・ポートを使用できますが、宛先に **FQDN** を指定するにはファイアウォール上で **DNS プロキシ (DNS proxy)** を有効化する必要があります。DNS プロキシを有効にすることで、Azure Firewall 自身が名前解決を行い、バックエンドで IP アドレスが変化しても動的に正しい IP アドレスへとルールを追従させることができます。`,
    overallExplanationEn: `Azure Firewall network rules support FQDN filtering for any protocol (including UDP) only when DNS proxy is enabled, allowing the firewall to resolve FQDNs and dynamically maintain the correct destination IP addresses. Application rules, by contrast, are restricted to HTTP, HTTPS, and MSSQL traffic, making them unsuitable for NTP (UDP/123) traffic in this scenario.`,
    keyPointsJa: [
      'HTTP/HTTPS/MSSQL 以外のプロトコル (UDP/123 NTP 等) を FQDN で制御 ＝ ファイアウォールで DNS プロキシを有効化 ＋ ネットワーク規則で FQDN 指定',
      'アプリケーション規則は HTTP / HTTPS / MSSQL のみサポート',
      'DNS プロキシが無効のままではネットワーク規則の宛先に FQDN を使用できない'
    ],
    keyPointsEn: [
      'Enable DNS proxy on Azure Firewall to use FQDNs inside Network rules for non-HTTP/HTTPS/MSSQL protocols (such as UDP/123)',
      'Firewall dynamically resolves and updates the destination IPs behind the FQDN',
      'Application rules only support HTTP, HTTPS, and MSSQL'
    ],
    referenceTopic: 'Azure Firewall ネットワーク規則の FQDN フィルタリングと DNS プロキシ'
  },
  {
    id: 'sc500-q79',
    number: 79,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Sentinel オートメーション ルールにプレイブックが表示されない原因 (トリガー不一致)',
    titleEn: 'Troubleshooting Playbook Visibility in Sentinel Automation Rules',
    scenarioJa: `ある企業のセキュリティ オペレーション センター (SOC) は Microsoft Sentinel を使用しています。アナリストは、トリガーされるたびに Microsoft Entra ID 内のユーザー アカウントを自動的に無効化する Logic App プレイブックを作成しました。アナリストは、重大度「高」(High) の「Impossible travel activity」という名前の分析ルールによって Microsoft Sentinel インシデントが生成されるたびに、このプレイブックを自動実行したいと考えています。

アナリストは、「インシデントが作成されたとき」(When incident is created) のトリガー、分析ルール名と重大度をチェックする条件、およびプレイブックを実行するアクションを持つオートメーション ルールを作成しました。しかし、「プレイブックの実行」アクションを構成する際、新しく作成したプレイブックが利用可能なプレイブックの一覧に表示されません。`,
    scenarioEn: `A company's Security Operations Center uses Microsoft Sentinel. An analyst creates a Logic App playbook that automatically disables a user's account in Microsoft Entra ID whenever it is triggered. The analyst wants this playbook to run automatically whenever a Microsoft Sentinel incident is generated by the analytics rule named "Impossible travel activity" with a severity of High.

The analyst creates an automation rule with a trigger of "When incident is created," a condition that checks the analytics rule name and severity, and an action to run a playbook. However, when configuring the "Run playbook" action, the newly created playbook does not appear in the list of available playbooks.`,
    questionJa: 'プレイブックが一覧に表示されない最も可能性の高い原因は何ですか？',
    questionEn: 'What is the most likely reason the playbook is not listed?',
    options: [
      {
        id: 'A',
        textJa: 'プレイブックが Microsoft Sentinel インシデント トリガーではなく Microsoft Sentinel アラート トリガーを使用して構築されているため、オートメーション ルールと互換性がない',
        textEn: 'The playbook was built using the Microsoft Sentinel alert trigger instead of the Microsoft Sentinel incident trigger, so it is not compatible with automation rules.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Sentinel のオートメーション ルールが実行できるのは、「Microsoft Sentinel インシデント」トリガー (Azure Logic Apps トリガー: When a response to an Azure Sentinel incident is triggered) を使用するプレイブックのみです。古いアラート トリガーで作成されたプレイブックは、インシデント ベースのオートメーション ルール アクションと互換性がないため、ドロップダウンの一覧に表示されません。',
        explanationEn: 'Automation rules in Microsoft Sentinel can only run playbooks that use the "Microsoft Sentinel incident" trigger (Azure Logic Apps trigger: "When a response to an Azure Sentinel incident is triggered"). Playbooks built with the older alert trigger will not appear in the automation rule\'s "Run playbook" list because they are not compatible with the incident-based automation rule action.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel サービス プリンシパルではなく、アナリスト自身のユーザー アカウントに「Microsoft Sentinel 自動化共同作成者」ロールが割り当てられていないため',
        textEn: 'The Microsoft Sentinel Automation Contributor role must be assigned to the analyst\'s own user account rather than to the Microsoft Sentinel service principal.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel 自動化共同作成者 (Automation Contributor) ロールは、アナリストの個人アカウントではなく、プレイブックを含むリソース グループ上の Microsoft Sentinel サービス プリンシパル (Azure Security Insights) に付与する必要があります。また、このロールが不足していても通常は一覧から非表示になるのではなく実行権限エラーになります。',
        explanationEn: 'The Microsoft Sentinel Automation Contributor role must be granted to the Microsoft Sentinel service principal (Azure Security Insights) on the resource group containing the playbook, not to the analyst\'s personal user account. While missing this role assignment can prevent a playbook from running successfully, it does not typically cause the playbook to be absent from the selection list—an incompatible trigger type does.'
      },
      {
        id: 'C',
        textJa: 'オートメーション ルールはスケジュールされた分析ルールに関連付けられたプレイブックのみを呼び出すことができ、手動または他のルール タイプで作成されたインシデントでは実行できないため',
        textEn: 'Automation rules can only invoke playbooks that are associated with scheduled analytics rules, not with incidents created manually or through other rule types.',
        isCorrect: false,
        explanationJa: '【不正解】オートメーション ルールは、スケジュール分析ルール・NRT・Microsoft セキュリティ分析ルールなど、あらゆる分析ルール タイプで生成されたインシデントや更新されたインシデントに対してプレイブックを実行できます。',
        explanationEn: 'Automation rules can run playbooks for incidents generated by any analytics rule type, including scheduled, NRT, and Microsoft security analytics rules, as well as for incidents created or updated through other means. There is no restriction limiting playbook execution to only scheduled analytics rule incidents.'
      },
      {
        id: 'D',
        textJa: 'プレイブックが Microsoft Sentinel で使用されているワークスペースとは異なる Log Analytics ワークスペースにデプロイされており、プレイブックは Sentinel インスタンスと同じワークスペースに存在する必要があるため',
        textEn: 'The playbook is deployed in a different Log Analytics workspace than the one used by Microsoft Sentinel, and playbooks must reside in the same workspace as the Sentinel instance.',
        isCorrect: false,
        explanationJa: '【不正解】プレイブックが Microsoft Sentinel と同じ Log Analytics ワークスペースに存在しなければならないという要件はありません。プレイブックはリソース グループ／サブスクリプション内に独立して存在する Logic Apps リソースです。',
        explanationEn: 'There is no requirement that a playbook reside in the same Log Analytics workspace as Microsoft Sentinel; playbooks are Logic Apps resources that exist independently in a resource group/subscription and are simply invoked by Sentinel. Workspace co-location is not a factor in whether a playbook appears in the automation rule dropdown.'
      }
    ],
    overallExplanationJa: `Microsoft Sentinel のオートメーション ルールは個別の「アラート」ではなく「インシデント」に対して動作するため、オートメーション ルール内の「プレイブックの実行 (Run playbook)」アクションで選択可能にするには、Logic App が **Microsoft Sentinel インシデント トリガー (Microsoft Sentinel incident trigger)** を使用している必要があります。

アラート トリガー (Alert trigger) で作成されたプレイブックはレガシーな分析ルール アラート自動化向けであり、オートメーション ルールの選択肢には表示されません。なお、実際にオートメーション ルールからプレイブックを起動するには、プレイブックがあるリソース グループ上で「Azure Security Insights」サービス プリンシパルに **Microsoft Sentinel Automation Contributor** ロールが付与されていることも必要です。`,
    overallExplanationEn: `For a playbook to be selectable within a Microsoft Sentinel automation rule, it must use the "Microsoft Sentinel incident" trigger, since automation rules operate on incidents rather than individual alerts. Playbooks built with the alert trigger are designed for use with analytics rule alert automation configurations (a legacy mechanism) and will not appear as options in automation rule actions.`,
    keyPointsJa: [
      'オートメーション ルールでプレイブックが選択候補に表示されない ＝ Logic App が「Microsoft Sentinel alert」トリガーになっており「Microsoft Sentinel incident」トリガーを使っていない',
      'オートメーション ルールはインシデント トリガーを使用するプレイブックのみ呼び出し可能',
      '実行権限用には Azure Security Insights サービス プリンシパルへ「Microsoft Sentinel Automation Contributor」ロールを付与する'
    ],
    keyPointsEn: [
      'Playbooks must use the "Microsoft Sentinel incident" trigger to appear in Sentinel automation rules',
      'Alert-triggered playbooks are incompatible with incident-based automation rules',
      'Microsoft Sentinel Automation Contributor is assigned to the Azure Security Insights service principal, not the analyst'
    ],
    referenceTopic: 'Microsoft Sentinel オートメーション ルールとプレイブック トリガー互換性'
  },
  {
    id: 'sc500-q80',
    number: 80,
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure RBAC for Kubernetes Authorization による AKS 名前空間の純粋 Azure ロール管理',
    titleEn: 'Namespace Access via Azure RBAC for Kubernetes Authorization in AKS',
    scenarioJa: `Contoso 社は、ユーザー認証用に Microsoft Entra ID 統合が有効化された本番環境の Azure Kubernetes Service (AKS) クラスターを運用しています。セキュリティ チームは、開発者グループに対し、「billing」名前空間内のポッド (Pods) とデプロイメント (Deployments) のみに対する読み取り専用アクセスを付与したいと考えています。

クラスター内に Kubernetes の Role オブジェクトや RoleBinding オブジェクトを作成・管理することなく、Microsoft Entra ID セキュリティ グループに Azure ロールを割り当てることだけでこのアクセスを完全に管理したいと考えています。`,
    scenarioEn: `Contoso operates a production Azure Kubernetes Service (AKS) cluster with Microsoft Entra ID integration enabled for user authentication. The security team wants to grant a group of developers read-only access to pods and deployments within the "billing" namespace only. They want to manage this access entirely by assigning Azure roles to a Microsoft Entra ID security group, without creating or maintaining any Kubernetes Role or RoleBinding objects inside the cluster.`,
    questionJa: 'この要件を満たすためにどの AKS 承認機能を有効にすべきですか？',
    questionEn: 'Which AKS authorization feature should you enable to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'AKS API サーバー アプリケーションをスコープとした条件付きアクセス ポリシー (Conditional Access policies)',
        textEn: 'Conditional Access policies for AKS API server',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセス ポリシーは AKS API サーバーへの認証時のサインイン条件 (MFA や準拠デバイスの要求など) を制御しますが、認証済み ID が特定の名前空間内でポッドやデプロイメントに対して実行できるアクション (認可) を定義するものではありません。',
        explanationEn: 'Conditional Access policies control sign-in conditions (such as requiring MFA or compliant devices) for authenticating to the AKS API server, but they do not define what actions an authenticated identity can perform on Kubernetes resources like pods or deployments.'
      },
      {
        id: 'B',
        textJa: '組み込みのポリシー イニシアチブを使用した AKS 用 Azure Policy アドオン (Azure Policy Add-on for AKS)',
        textEn: 'Azure Policy Add-on for AKS built-in initiative',
        isCorrect: false,
        explanationJa: '【不正解】AKS 用 Azure Policy アドオンは、Gatekeeper / OPA 制約を通じてガバナンスとコンプライアンス規則 (リソース制限の要求や特権コンテナーのブロックなど) を強制するためのものであり、ユーザーやグループに名前空間スコープの読み取り/書き込みアクセス許可を付与する機能ではありません。',
        explanationEn: 'The Azure Policy Add-on for AKS is used to enforce governance and compliance rules (such as requiring resource limits or blocking privileged containers) via Gatekeeper/OPA constraints, not to grant granular, namespace-scoped read/write permissions to users or groups.'
      },
      {
        id: 'C',
        textJa: 'Kubernetes 承認のための Azure RBAC (Azure RBAC for Kubernetes Authorization)',
        textEn: 'Azure RBAC for Kubernetes Authorization',
        isCorrect: true,
        explanationJa: '【正解】Azure RBAC for Kubernetes Authorization を有効にすると、管理者は Kubernetes リソースの認証と承認の両方を、Microsoft Entra ID グループに直接割り当てた名前空間スコープの Azure ロール割り当て (「Azure Kubernetes Service RBAC 閲覧者」など) だけで完全に管理でき、クラスター内で Kubernetes の Role や RoleBinding オブジェクトを作成する必要がなくなります。',
        explanationEn: 'Azure RBAC for Kubernetes Authorization allows administrators to manage both authentication and authorization for Kubernetes resources entirely through Azure role assignments (such as "Azure Kubernetes Service RBAC Reader") scoped to a namespace, assigned directly to a Microsoft Entra ID group, eliminating the need to create Kubernetes Role or RoleBinding objects inside the cluster.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Entra ID 統合 ClusterRoleBindings を使用した Kubernetes RBAC',
        textEn: 'Kubernetes RBAC with Entra ClusterRoleBindings',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Entra ID 統合によって認証は処理されますが、標準の Kubernetes RBAC では承認を定義するために依然としてクラスター内に Role / RoleBinding または ClusterRole / ClusterRoleBinding オブジェクトを作成・保守する必要があり、Azure ロール割り当てのみで管理する要件に反します。',
        explanationEn: 'While Microsoft Entra ID integration handles authentication, standard Kubernetes RBAC still requires creating and maintaining Role/RoleBinding or ClusterRole/ClusterRoleBinding objects inside the cluster to define authorization, which contradicts the requirement to manage access exclusively through Azure role assignments.'
      }
    ],
    overallExplanationJa: `**Kubernetes 承認のための Azure RBAC (Azure RBAC for Kubernetes Authorization)** は、AKS の Microsoft Entra ID 認証統合をさらに拡張する機能です。

これを有効にすることで、ネイティブな Kubernetes ` + '`Role`' + ` や ` + '`RoleBinding`' + ` を作成・保守する代わりに、特定の名前空間 (例: ` + '`/namespaces/billing`' + `) をスコープとした組み込みまたはカスタムの Azure ロール (「Azure Kubernetes Service RBAC Reader」など) を Entra ID のユーザーやグループに直接割り当ててアクセスを統一管理できます。`,
    overallExplanationEn: `Azure RBAC for Kubernetes Authorization extends Microsoft Entra ID integration by letting administrators assign built-in or custom Azure roles, scoped to specific namespaces, directly to Entra ID users or groups, fully replacing the need for native Kubernetes RoleBindings. This is the correct feature to enable when an organization wants unified, Azure-native access management for AKS resources.`,
    keyPointsJa: [
      'Kubernetes Role / RoleBinding を作らずに Azure ロール割り当てのみで AKS 名前空間単位の権限管理 ＝ Azure RBAC for Kubernetes Authorization',
      '名前空間スコープで「Azure Kubernetes Service RBAC Reader」等の Azure ロールを Entra グループに割り当てる',
      '標準の Microsoft Entra 統合 + Kubernetes RBAC は認証のみ Entra を使い、認可にはクラスター内の RoleBinding 管理が必要'
    ],
    keyPointsEn: [
      'Enable Azure RBAC for Kubernetes Authorization to manage AKS namespace permissions purely via Azure role assignments',
      'Replaces in-cluster Kubernetes Role and RoleBinding manifests with Azure RBAC (e.g., Azure Kubernetes Service RBAC Reader)',
      'Supports scoping assignments down to an individual Kubernetes namespace'
    ],
    referenceTopic: 'AKS における Azure RBAC for Kubernetes Authorization'
  },
  {
    id: 'sc500-q81',
    number: 81,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ゲスト OS 内暗号化 (DM-Crypt) と Key Vault 連携のための Azure Disk Encryption',
    titleEn: 'Guest-OS Disk Encryption Using Azure Disk Encryption (DM-Crypt)',
    scenarioJa: `Contoso Ltd. は、規制対象の財務データを処理する Linux 仮想マシン (VM) 群を Azure で稼働させています。セキュリティ チームには次の要件があります：

- 暗号化は DM-Crypt を使用してゲスト オペレーティング システム内部で行われること。
- VM が Azure Key Vault から暗号化シークレットを取得するために Microsoft Entra ID に対して認証すること。
- 管理者がゲスト OS 自体の内部から暗号化ステータスを確認できること。
- ソリューションは OS ディスクおよびアタッチされたすべてのデータ ディスクの暗号化をサポートしていること。`,
    scenarioEn: `Contoso Ltd. runs a fleet of Linux virtual machines (VMs) in Azure that process regulated financial data. The security team has the following requirements:

- Encryption must occur inside the guest operating system using DM-Crypt.
- The VMs must authenticate to Microsoft Entra ID to retrieve encryption secrets from an Azure Key Vault.
- Administrators must be able to verify encryption status from within the guest OS itself.
- The solution must support encrypting both the OS disk and any attached data disks.`,
    questionJa: 'これらの要件を満たすためにどの暗号化ソリューションを実装すべきですか？',
    questionEn: 'Which encryption solution should you implement to meet these requirements?',
    options: [
      {
        id: 'A',
        textJa: 'ホストでの暗号化 (Encryption at host)',
        textEn: 'Encryption at host',
        isCorrect: false,
        explanationJa: '【不正解】ホストでの暗号化は、プラットフォーム マネージド キーまたはカスタマー マネージド キーを使用して一時ディスクやキャッシュを含むデータを VM ホスト マシン上で暗号化しますが、ゲスト OS 内部で DM-Crypt を使用するわけではなく、VM 内部から暗号化ステータスを確認することもできません。',
        explanationEn: 'Encryption at host encrypts data on the host machine, including temporary disks and caches, using either platform-managed or customer-managed keys, but it does not use DM-Crypt inside the guest OS and cannot be verified from within the VM. It is complementary to, but not a substitute for, guest-OS-based disk encryption.'
      },
      {
        id: 'B',
        textJa: 'Azure Disk Encryption (ADE)',
        textEn: 'Azure Disk Encryption',
        isCorrect: true,
        explanationJa: '【正解】Azure Disk Encryption (ADE) は Windows には BitLocker、Linux には DM-Crypt を使用してゲスト OS の内部からディスクを暗号化し、Azure Key Vault に保存された暗号化キー/シークレットにアクセスするために VM が Microsoft Entra ID に対して認証することを要求します。暗号化がゲスト OS 内で行われるため VM 内から暗号化ステータスを照会でき、OS ディスクとデータ ディスクの両方をサポートします。',
        explanationEn: 'Azure Disk Encryption (ADE) uses BitLocker for Windows and DM-Crypt for Linux to encrypt disks from inside the guest OS, and it requires the VM to authenticate to Microsoft Entra ID to access encryption keys/secrets stored in Azure Key Vault. Because encryption happens within the guest OS, administrators can query encryption status from inside the VM, and it supports both OS and data disks.'
      },
      {
        id: 'C',
        textJa: 'プラットフォーム マネージド キーによるサーバー側暗号化 (SSE with PMK)',
        textEn: 'Server-side encryption with platform-managed keys',
        isCorrect: false,
        explanationJa: '【不正解】プラットフォーム マネージド キーによるサーバー側暗号化は、Microsoft が完全に管理するキーを使用してストレージ層で透過的に暗号化するものであり、ゲスト OS の関与や VM からの Microsoft Entra ID 認証は行われず、ゲスト OS 内から暗号化を確認できません。',
        explanationEn: 'Server-side encryption with platform-managed keys encrypts data at the storage layer transparently, using keys fully managed by Microsoft, with no guest OS involvement and no Microsoft Entra ID authentication from the VM. It cannot be verified from inside the guest OS because the guest OS has no visibility into this encryption process.'
      },
      {
        id: 'D',
        textJa: 'カスタマー マネージド キーによるサーバー側暗号化 (SSE with CMK)',
        textEn: 'Server-side encryption with customer-managed keys',
        isCorrect: false,
        explanationJa: '【不正解】カスタマー マネージド キーによるサーバー側暗号化も (ゲスト OS 外部の) ストレージ層で暗号化するものであり、Key Vault への認証は VM 自体ではなくディスク暗号化セット (Disk Encryption Set) が行い、DM-Crypt やゲスト OS 内での検証機能はありません。',
        explanationEn: 'Server-side encryption with customer-managed keys also encrypts at the storage layer (outside the guest OS) using keys stored in Key Vault, but the disk encryption service (not the VM itself) authenticates to Key Vault, and there is no DM-Crypt or in-guest verification mechanism. This does not meet the guest-OS-based encryption requirement.'
      }
    ],
    overallExplanationJa: `**Azure Disk Encryption (ADE)** は、ゲスト OS 内部で暗号化 (Linux では **DM-Crypt**、Windows では **BitLocker**) を実行し、VM が Azure Key Vault から暗号化シークレットを取得するために Microsoft Entra ID に対して認証し、さらに OS ディスクとデータ ディスクの両方でゲスト OS 内から暗号化ステータスを検証できる唯一のソリューションです。

サーバー側暗号化 (PMK / CMK) やホストでの暗号化 (Encryption at host) はストレージ層／ハイパーバイザ ホスト層で透過的に動作するため、ゲスト OS 内部からの暗号化可視性や DM-Crypt 要件を満たしません。`,
    overallExplanationEn: `Azure Disk Encryption is the correct choice because it is the only solution that performs encryption inside the guest OS (via BitLocker/DM-Crypt), requires the VM to authenticate to Microsoft Entra ID to retrieve keys from Key Vault, and allows encryption status to be verified from within the guest OS on both OS and data disks. Server-side encryption options and encryption at host operate at the storage/host layer and do not meet the guest-OS visibility and Microsoft Entra ID authentication requirements described.`,
    keyPointsJa: [
      'ゲスト OS 内での DM-Crypt / BitLocker 暗号化 ＋ VM から Key Vault への Entra 認証 ＝ Azure Disk Encryption (ADE)',
      'ホストでの暗号化 (Encryption at host) や SSE (PMK/CMK) はゲスト OS の外 (ホスト/ストレージ層) で暗号化され OS からは透過的',
      'ADE は OS ディスクとデータ ディスクの両方をサポートし、ゲスト OS 内から暗号化ステータスを確認可能'
    ],
    keyPointsEn: [
      'Azure Disk Encryption (ADE) runs BitLocker (Windows) or DM-Crypt (Linux) inside the guest OS',
      'VM authenticates via Microsoft Entra ID to retrieve secrets/keys from Azure Key Vault',
      'Encryption at host and SSE operate below the guest OS and cannot be queried from inside the VM'
    ],
    referenceTopic: 'Azure VM ディスク暗号化方式の比較 (ADE vs Encryption at host vs SSE)'
  },
  {
    id: 'sc500-q82',
    number: 82,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: 'Logs Ingestion API によるカスタム JSON ログ取込のためのテーブル・DCR・DCE 構成',
    titleEn: 'Preparing Sentinel for Custom JSON Ingestion via Logs Ingestion API',
    scenarioJa: `あなたの会社には、独自の JSON 形式でセキュリティ関連イベントを生成するカスタム基幹業務アプリケーションがあります。これらのイベントを Microsoft Sentinel ワークスペースに取り込み、Kusto 照会言語 (KQL) でクエリして分析ルールで使用できるようにする必要があります。このアプリケーションのログ形式をサポートする既存の Microsoft Sentinel データ コネクタは存在しないため、Log Analytics Logs Ingestion API を使用してデータを直接送信する予定です。

アプリケーションからイベントの送信を開始する前に、このカスタム データを受信して保存できるようにワークスペースを準備する必要があります。`,
    scenarioEn: `Your company has a custom line-of-business application that generates security-relevant events in a proprietary JSON format. You need to ingest these events into your Microsoft Sentinel workspace so they can be queried with Kusto Query Language (KQL) and used in analytics rules. No existing Microsoft Sentinel data connector supports this application's log format, so you plan to send the data directly using the Log Analytics Logs Ingestion API.

You need to prepare the workspace to receive and store this custom data before you begin sending events from the application.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Log Analytics ワークスペースに接続された Windows イベント ログ用の Azure Monitor エージェント (AMA) データ収集ルール (DCR) を有効化し、取得されたアプリケーション イベントが自動的に新しいカスタム テーブルにルーティングされるようデータ ソースを構成する',
        textEn: 'In the Log Analytics workspace, enable the Azure Monitor Agent (AMA) data collection rule (DCR) for Windows Event Logs and configure the custom application as an event source so incoming events are automatically parsed and routed into a newly generated custom table.',
        isCorrect: false,
        explanationJa: '【不正解】Windows イベント ログ用の AMA データ収集ルールは組み込みの Windows / Syslog イベント収集向けに設計されており、API 経由の任意のカスタム JSON データの取り込みや新しいカスタム テーブルの自動作成には対応していません。',
        explanationEn: 'Azure Monitor Agent data collection rules for Windows Event Logs are designed for built-in Windows/Syslog event collection, not for ingesting arbitrary custom JSON application data, and they do not automatically create a new custom table for this purpose.'
      },
      {
        id: 'B',
        textJa: 'Log Analytics ワークスペースで [テーブル] (Tables (preview)) ブレードを使用して新しいカスタム テーブルを作成してそのスキーマを定義し、受信した JSON フィールドをカスタム テーブルの列にマッピングするデータ収集エンドポイント (DCE) に関連付けられたデータ収集ルール (DCR) を作成する',
        textEn: 'In the Log Analytics workspace, use the Tables (preview) blade to create a new custom table and define its schema, then create a data collection rule (DCR) associated with a data collection endpoint (DCE) that maps the incoming JSON fields to the custom table columns.',
        isCorrect: true,
        explanationJa: '【正解】Logs Ingestion API 経由で取り込まれるカスタム データを受け入れるために Log Analytics / Microsoft Sentinel ワークスペースを準備する最新のサポート済み手順は、Tables ブレードでカスタム テーブル (とそのスキーマ) を明示的に作成し、次にアプリケーションがインジェスト エンドポイントを呼び出したときに使用する変換とマッピングを定義する DCR と DCE を作成することです。',
        explanationEn: 'The supported, modern method to prepare a Log Analytics/Microsoft Sentinel workspace for custom data ingested via the Logs Ingestion API is to explicitly create the custom table (with its schema) using the Tables blade, then create a DCR and DCE that define the transformation and mapping used when the application calls the ingestion endpoint.'
      },
      {
        id: 'C',
        textJa: 'サーバーにレガシーな Microsoft Monitoring Agent (MMA) をインストールしてワークスペースへ接続し、最初の JSON ログ ファイルがアップロードされたときにワークスペースがスキーマを推測して自動的にテーブルを作成するよう [詳細設定] の [カスタム ログ] 構成を定義する',
        textEn: 'On the application server, install the legacy Microsoft Monitoring Agent (MMA) connected to the workspace, and configure the Custom Logs data source under Advanced Settings so the workspace infers fields and creates the custom table upon initial upload.',
        isCorrect: false,
        explanationJa: '【不正解】レガシーな MMA エージェントのカスタム ログ データ ソースは非推奨の方法であり、Logs Ingestion API を使用せず、Microsoft Sentinel の新しいカスタム ログ取り込みに推奨されるアプローチではありません。',
        explanationEn: 'The Custom Logs data source under the legacy MMA agent is a deprecated method tied to the legacy agent, does not use the Logs Ingestion API, and is not the recommended approach for new custom log ingestion in Microsoft Sentinel.'
      },
      {
        id: 'D',
        textJa: 'Log Analytics ワークスペースの [ログ] ブレードを開き、列の型や JSON マッピングを定義する「.create table」などの KQL 管理コマンドをクエリ ウィンドウで直接実行して新しいテーブル スキーマを作成し、アプリケーションのインジェスト呼び出しでそのテーブル名を参照する',
        textEn: 'Open the Log Analytics workspace and run a KQL management command such as ".create table" in the Logs blade query editor to explicitly define the table schema and column mappings, then reference that table name directly in the application\'s ingestion API calls.',
        isCorrect: false,
        explanationJa: '【不正解】Log Analytics ワークスペース UI では、API ベースのインジェスト用のカスタム テーブルを定義するために KQL の「.create table」スタイルの管理コマンドは使用されません。テーブル作成とスキーマ定義は Tables ブレードまたは ARM/REST API を通じて行う必要があります。',
        explanationEn: 'KQL "create table" style commands are not used to define custom tables for ingestion in the Log Analytics workspace UI; table creation and schema definition for API-based ingestion must be done through the Tables (preview) blade or corresponding ARM/API calls, not ad hoc query commands in the Logs blade.'
      }
    ],
    overallExplanationJa: `Log Analytics **Logs Ingestion API** を介してカスタム アプリケーション データを Microsoft Sentinel に取り込むには、以下の手順でワークスペース側を準備する必要があります：
1. Log Analytics ワークスペースの **[テーブル] (Tables)** ブレードで新しいカスタム テーブル (DCR ベースのカスタム テーブル、通常は ` + '`_CL`' + ` サフィックス付き) とスキーマを作成する。
2. 受信する JSON データを変換・ルーティングする **データ収集ルール (DCR)** と、API の送信先 URL を提供する **データ収集エンドポイント (DCE)** を構成する。

レガシーな MMA ベースのカスタム ログ手法に代わる、現行の標準ワークフローです。`,
    overallExplanationEn: `To ingest custom application data into Microsoft Sentinel via the Logs Ingestion API, you must first create a custom table with a defined schema in the Log Analytics workspace, then configure a data collection rule and data collection endpoint that transform and route the incoming data to that table. This is the current, supported workflow for custom log collection, replacing the legacy MMA-based Custom Logs method.`,
    keyPointsJa: [
      'Logs Ingestion API によるカスタム JSON データの Sentinel 取込準備 ＝ カスタム テーブル作成 ＋ DCR (変換/マッピング) ＋ DCE (エンドポイント)',
      'DCR ベースのカスタム テーブルはスキーマを事前定義でき、インジェスト時 KQL 変換もサポートする',
      'MMA エージェントの Custom Logs や KQL の .create table コマンドは誤り'
    ],
    keyPointsEn: [
      'Prepare Log Analytics for Logs Ingestion API by creating a custom table schema, a DCR, and a DCE',
      'DCR defines how incoming JSON fields transform and map into custom table columns',
      'Replaces the deprecated MMA Custom Logs workflow'
    ],
    referenceTopic: 'Sentinel / Log Analytics Logs Ingestion API (DCR と DCE)'
  },
  {
    id: 'sc500-q83',
    number: 83,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '複数のリソースで共有・独立ライフサイクルを持つユーザー割り当てマネージド ID',
    titleEn: 'Sharing a User-Assigned Managed Identity Across Multiple Azure Function Apps',
    scenarioJa: `あなたの会社には、すべて同じ Azure Key Vault からシークレットを読み取る必要がある 5 つの Azure Function アプリがあります。これら 5 つの Function アプリすべてに同時に割り当てることができる単一のマネージド ID を作成したいと考えており、1 つ以上の Function アプリが削除されて再作成された場合でもその ID は引き続き存在し続ける必要があります。

資格情報を手動で保存およびローテーションする管理オーバーヘッドを回避しながら、これらの要件を満たす ID ソリューションを構成する必要があります。`,
    scenarioEn: `Your company has five Azure Function apps that all need to read secrets from the same Azure Key Vault. You want to create a single managed identity that can be assigned to all five Function apps simultaneously, and the identity must continue to exist even if one or more of the Function apps are deleted and recreated. You need to configure an identity solution that meets these requirements while avoiding the management overhead of storing and rotating credentials manually.`,
    questionJa: '何を実装すべきですか？',
    questionEn: 'What should you implement?',
    options: [
      {
        id: 'A',
        textJa: '5 つすべての Function アプリに割り当てられたユーザー割り当てマネージド ID (User-assigned managed identity)',
        textEn: 'A user-assigned managed identity assigned to all five Function apps',
        isCorrect: true,
        explanationJa: '【正解】ユーザー割り当てマネージド ID は、どの Function アプリからも独立した独自のライフサイクルを持つスタンドアロンの Azure リソースとして作成されます。複数のリソース (5 つすべての Function アプリなど) に同時に割り当てることができ、Microsoft Entra ID が基盤となる資格情報を自動的に管理するため、手動のシークレット ローテーションが不要になります。',
        explanationEn: 'A user-assigned managed identity is created as a standalone Azure resource with its own lifecycle, independent of any Function app. It can be assigned to multiple resources (such as all five Function apps) simultaneously, and Microsoft Entra ID automatically manages the underlying credentials, eliminating manual secret rotation.'
      },
      {
        id: 'B',
        textJa: 'すべての Function アプリが参照できるように Key Vault にクライアント シークレットを保存した単一の Microsoft Entra サービス プリンシパル',
        textEn: 'A single service principal with a client secret stored in Key Vault',
        isCorrect: false,
        explanationJa: '【不正解】クライアント シークレットを持つサービス プリンシパルは、シークレットの手動作成・保存・定期的なローテーションを必要とするため、まさにシナリオが回避しようとしている資格情報管理オーバーヘッドが発生します。',
        explanationEn: 'A service principal with a client secret requires manual creation, storage, and periodic rotation of the secret, which introduces the exact credential management overhead the scenario is trying to avoid. Managed identities are designed specifically to eliminate this need.'
      },
      {
        id: 'C',
        textJa: '5 つの Function アプリそれぞれに個別に有効化するシステム割り当てマネージド ID (System-assigned managed identity)',
        textEn: 'Individual system-assigned managed identities on each Function app',
        isCorrect: false,
        explanationJa: '【不正解】システム割り当てマネージド ID は単一の Azure リソースのライフサイクルに直接結び付けられているため、そのリソースが削除されると自動的に削除され、複数の Function アプリ間で共有することもできません。',
        explanationEn: 'A system-assigned managed identity is tied directly to the lifecycle of a single Azure resource, so it is automatically deleted when that resource is deleted, and it cannot be shared across multiple Function apps. This does not meet the requirement for an identity that persists independently and can be reused across five apps.'
      },
      {
        id: 'D',
        textJa: 'すべての Function アプリで共有される、証明書資格情報で構成された Microsoft Entra ID の単一アプリ登録 (App registration)',
        textEn: 'A shared app registration in Microsoft Entra ID with a certificate',
        isCorrect: false,
        explanationJa: '【不正解】証明書を持つアプリ登録でも、証明書の発行・保管・更新を自分で管理する必要があるため、資格情報管理のオーバーヘッドをなくすことはできません。',
        explanationEn: 'An app registration with a certificate still requires you to manage certificate issuance, storage, and renewal, which does not eliminate credential management overhead. Managed identities remove this burden entirely by having Microsoft Entra ID handle credential rotation automatically.'
      }
    ],
    overallExplanationJa: `**ユーザー割り当てマネージド ID (User-assigned managed identity)** は、特定の Azure リソースに依存せず独立して存在するスタンドアロンの Microsoft Entra ID リソースです。

複数のリソース (本問の 5 つの Function アプリなど) に同じ ID を共有してアタッチでき、紐付け先のリソースが削除されても ID 自体は存続し続け、さらに基盤の資格情報ローテーションも Microsoft Entra ID によって自動管理されるため、本シナリオに完全に適合します。`,
    overallExplanationEn: `User-assigned managed identities are standalone Microsoft Entra ID objects that exist independently of any single Azure resource, allowing the same identity to be attached to multiple resources (like several Function apps) while Microsoft Entra ID automatically manages the underlying credentials. This makes them the correct choice when an identity needs to be shared across resources and persist beyond the lifecycle of any one resource, unlike system-assigned identities, which are resource-specific, or traditional service principals/app registrations, which require manual credential management.`,
    keyPointsJa: [
      '複数リソース間で共有 ＋ アプリを削除しても ID が存続 ＋ 資格情報管理不要 ＝ ユーザー割り当てマネージド ID',
      'システム割り当てマネージド ID は 1 対 1 でリソースと運命を共にする（リソース削除時に自動削除）',
      'サービス プリンシパルのシークレットや証明書は手動のローテーション管理が必要になる'
    ],
    keyPointsEn: [
      'Use a user-assigned managed identity when multiple Azure resources share one identity with an independent lifecycle',
      'System-assigned managed identities are 1:1 with a resource and deleted when that resource is deleted',
      'Managed identities eliminate manual secret or certificate rotation'
    ],
    referenceTopic: 'システム割り当て vs ユーザー割り当てマネージド ID'
  },
  {
    id: 'sc500-q84',
    number: 84,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Backup でのマルチユーザー承認 (MUA) と Resource Guard による職務分離',
    titleEn: 'Protecting Azure Backup with Multi-User Authorization (MUA) and Resource Guard',
    scenarioJa: `あなたの組織では、重要な VM および SQL Server バックアップを含む複数の Recovery Services コンテナーを保護するために Azure Backup を使用しています。セキュリティ チームは、バックアップ管理者の資格情報が侵害された場合、攻撃者が論理的な削除 (Soft delete) を無効化したり、バックアップ ポリシーを変更したり、復旧ポイントを削除したりして回復不能なデータ損失を引き起こす可能性があることを懸念しています。

重要なバックアップ操作 (論理的な削除の無効化、セキュリティ PIN の変更、バックアップ データの削除など) を完了する前に、Recovery Services コンテナーに対する「共同作成者」(Contributor) アクセス権を持たない、指定されたセキュリティ チーム メンバーからの承認を必須とするセキュリティ制御を実装する必要があります。`,
    scenarioEn: `Your organization uses Azure Backup to protect several Recovery Services vaults containing critical VM and SQL Server backups. The security team is concerned that if a Backup Administrator's credentials are compromised, an attacker could disable soft delete, modify backup policies, or delete recovery points, causing irreversible data loss.

You need to implement a security control that requires approval from a designated security team member, who has NO Contributor access to the Recovery Services vault, before any critical backup operation (such as disabling soft delete, changing security PINs, or deleting backup data) can be completed.`,
    questionJa: 'この要件を満たすためにどの Azure Backup セキュリティ機能を構成すべきですか？',
    questionEn: 'Which Azure Backup security feature should you configure to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'Recovery Services コンテナーのバックアップ データに対して既定の論理的な削除 (Soft delete) と保持保護機能を有効にする',
        textEn: 'Enable soft delete protection on the Recovery Services vault to retain deleted backup items for recovery',
        isCorrect: false,
        explanationJa: '【不正解】論理的な削除は削除されたバックアップ データを保持期間中維持して誤削除や悪意ある削除からの復旧を可能にしますが、重要な操作を実行する前に別の承認済みユーザーによる承認を要求するワークフローを導入するものではありません。',
        explanationEn: 'Soft delete automatically retains deleted backup data for a retention period, allowing recovery from accidental or malicious deletion, but it does not introduce an approval workflow requiring a separate authorized user to approve critical operations. It is a valuable complementary control but does not satisfy the stated requirement.'
      },
      {
        id: 'B',
        textJa: 'Recovery Services コンテナーでコンテナー レベルの不変性 (Vault-level immutability) ロック設定を有効にする',
        textEn: 'Enable vault-level immutability settings on the Recovery Services vault to lock all stored recovery points',
        isCorrect: false,
        explanationJa: '【不正解】コンテナーの不変性は不変性設定が有効な期間中の復旧ポイントの削除や保持期間短縮を防止しますが、重要操作に対する承認ベースのワークフローを作成するものではなく、一度ロックすると権限のあるセキュリティ担当者であっても解除できなくなります。',
        explanationEn: 'Vault immutability prevents recovery points from being deleted or having their retention shortened for the duration the immutability setting is enabled, but it does not create an approval-based workflow for critical operations and, once locked, cannot be reversed even by authorized security staff.'
      },
      {
        id: 'C',
        textJa: 'Recovery Services コンテナーにアクセス権を持つすべてのユーザーに対して Microsoft Entra 多要素認証 (MFA) を強制する',
        textEn: 'Enforce Microsoft Entra multifactor authentication (MFA) for all users with access to the Recovery Services vault',
        isCorrect: false,
        explanationJa: '【不正解】MFA の強制は認証を強化して資格情報侵害のリスクを低減しますが、独立した第 2 の承認者が重要なバックアップ操作を承認しなければならない「職務の分離」(Separation of duties) モデルは実現しません。',
        explanationEn: 'While enforcing MFA strengthens authentication and reduces the risk of credential compromise, it does not create a separation-of-duties model where a second, independent approver must authorize critical backup operations. MFA alone does not stop an attacker who has already compromised valid MFA-enabled credentials.'
      },
      {
        id: 'D',
        textJa: '別のサブスクリプションまたはテナントにデプロイされたリソース ガード (Resource Guard) を使用してマルチユーザー承認 (MUA) を構成する',
        textEn: 'Configure Multi-user authorization (MUA) using a Resource Guard deployed in a separate subscription or tenant',
        isCorrect: true,
        explanationJa: '【正解】マルチユーザー承認 (MUA) は、理想的にはバックアップ管理者が制御できない別のサブスクリプションまたは Microsoft Entra テナントにデプロイされた「Resource Guard」リソースを使用して、重要操作 (論理的な削除の無効化、セキュリティ設定変更、バックアップ アイテム削除など) に Resource Guard 上の権限 (閲覧者ロール ＋ backupResourceGuardProxy アクション等) を持つユーザーからの明示的な承認を強制します。これにより職務が分離され、1 つのアカウントが侵害されても破壊的操作が単独で実行されるのを防げます。',
        explanationEn: 'Multi-user authorization (MUA) uses a Resource Guard resource, ideally deployed in a separate subscription or Microsoft Entra tenant that the Backup Administrator does not control, to enforce that critical operations (disabling soft delete, modifying security settings, deleting backup items, etc.) require explicit approval from a user who has permissions on the Resource Guard, such as the Reader role plus Microsoft.RecoveryServices/locations/backupResourceGuardProxy actions. This directly separates duties and prevents a single compromised account from performing destructive actions unilaterally.'
      }
    ],
    overallExplanationJa: `Resource Guard を使用した**マルチユーザー承認 (Multi-user authorization / MUA)** は、Azure Backup の重要な操作に対して**職務の分離 (Separation of duties)** を強制するために特別に設計されたセキュリティ機能です。

バックアップ管理者が変更権限を持たない別のサブスクリプションや別テナントに **Resource Guard** を配置して保護対象コンテナーとリンクさせることで、論理的削除の無効化や保護停止などの破壊的操作を実行するには、Resource Guard 側で認可された独立したセキュリティ担当者からの承認 (例: 代理承認や JIT での Resource Guard 権限取得) が必須となります。`,
    overallExplanationEn: `Multi-user authorization (MUA) using Resource Guard is the Azure Backup security feature specifically designed to enforce separation of duties for critical operations. By placing the Resource Guard in a separate subscription or tenant that the Backup Administrator cannot modify, organizations ensure that destructive or security-impacting actions require approval from an independent security team member, protecting backups even if administrator credentials are compromised.`,
    keyPointsJa: [
      'Azure Backup の重要操作 (Soft delete 無効化・バックアップ削除等) に別管理者の承認を必須化 ＝ Multi-user authorization (MUA) + Resource Guard',
      'Resource Guard は Backup 管理者が権限を持たない別サブスクリプションまたは別テナントに配置して職務分離を徹底する',
      'Soft delete や Immutable vault だけでは「別ユーザーによる承認ワークフロー」は提供されない'
    ],
    keyPointsEn: [
      'Configure Multi-user authorization (MUA) with a Resource Guard in an isolated subscription or tenant',
      'Enforces separation of duties so a compromised Backup Administrator cannot unilaterally delete backups or disable soft delete',
      'Soft delete and vault immutability do not provide a dual-approver authorization workflow'
    ],
    referenceTopic: 'Azure Backup マルチユーザー承認 (MUA) と Resource Guard'
  },
  {
    id: 'sc500-q85',
    number: 85,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault ファイアウォールにおける「信頼された Microsoft サービス」バイパス許可',
    titleEn: 'Allowing Azure Resource Manager via Key Vault Trusted Microsoft Services Bypass',
    scenarioJa: `あなたの組織では、仮想マシンのデプロイ時に使用する TLS 証明書を格納するために CorpVault01 という名前の Azure Key Vault を使用しています。セキュリティ チームは、既定ですべてのパブリック ネットワーク アクセスを拒否し、特定の社内オフィス IP 範囲のみを許可するように Key Vault ファイアウォールを構成しました。

最近、運用チームから新しい仮想マシンのデプロイが失敗しているという報告がありました。デプロイ プロセスでは、プロビジョニング中に VM にインストールする証明書を CorpVault01 から取得する Azure Resource Manager (ARM) テンプレートを使用しています。Azure Resource Manager 自体は仮想ネットワークと統合されておらず、許可された社内 IP 範囲から発信されるわけでもありません。

その他すべてのパブリック ネットワーク トラフィックに対する既存の IP ベースの制限を維持しながら、デプロイ中に Azure Resource Manager が CorpVault01 から証明書を取得できるようにする必要があります。`,
    scenarioEn: `Your organization uses an Azure Key Vault named CorpVault01 to store TLS certificates used during virtual machine deployments. The security team has configured the Key Vault firewall to deny all public network access by default, allowing only specific corporate office IP ranges.

Recently, the operations team reports that new virtual machine deployments are failing. The deployment process uses an Azure Resource Manager template that retrieves a certificate from CorpVault01 to install on the VM during provisioning. Azure Resource Manager itself is not integrated with a virtual network and does not originate from the allowed corporate IP ranges.

You need to allow Azure Resource Manager to retrieve the certificate from CorpVault01 during deployments, while maintaining the existing IP-based restrictions for all other public network traffic.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'CorpVault01 用のプライベート エンドポイント接続 (Private Endpoint connection) を新しく追加し、Azure Resource Manager がデプロイ時に証明書取得で通信する仮想ネットワーク サブネットへ統合する',
        textEn: 'Add a private endpoint connection for CorpVault01 and configure the virtual network used by Azure Resource Manager',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントは Key Vault への安全な接続を提供しますが、Azure Resource Manager はグローバルなコントロール プレーン サービスとして動作し、顧客の仮想ネットワーク内にデプロイされるものではないため、プライベート エンドポイント経由で接続することはできません。',
        explanationEn: 'While private endpoints provide secure connectivity to Key Vault, Azure Resource Manager operates as a global control-plane service and is not deployed within a customer virtual network, so it cannot connect through a private endpoint. This solution would not resolve the described failure.'
      },
      {
        id: 'B',
        textJa: 'Key Vault のネットワーク設定で、「信頼された Microsoft サービスがこのファイアウォールをバイパスすることを許可する」(Allow trusted Microsoft services to bypass this firewall) オプションを有効にする',
        textEn: 'In the Key Vault networking settings, enable the "Allow trusted Microsoft services to bypass this firewall" option',
        isCorrect: true,
        explanationJa: '【正解】Azure Resource Manager は信頼された Microsoft サービスとして分類されており、「信頼された Microsoft サービスがこのファイアウォールをバイパスすることを許可する」設定を有効にすると、許可 IP 範囲外の他のパブリック トラフィックをファイアウォールでブロックしたまま、ARM が (VM への証明書デプロイなど承認済みシナリオで) Key Vault にアクセスできるようになります。',
        explanationEn: 'Azure Resource Manager is classified as a trusted Microsoft service, and enabling the "Allow trusted Microsoft services to bypass this firewall" setting permits it to access Key Vault (for approved scenarios like certificate deployment to VMs) even though the firewall blocks other public traffic outside the allowed IP ranges. This setting is specifically designed for this exact scenario without weakening the existing IP restrictions.'
      },
      {
        id: 'C',
        textJa: 'VM デプロイに関連付けられた仮想ネットワーク サブネット上に Microsoft.KeyVault 用のサービス エンドポイント (Virtual network service endpoint) を作成し、既存のネットワーク許可リストへ登録する',
        textEn: 'Create a virtual network service endpoint for Microsoft.KeyVault on the subnet used for VM deployments',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントは仮想ネットワークの ID をサービスに拡張しますが、Azure Resource Manager は顧客の仮想ネットワーク内からトラフィックを発信しないため、ARM が Key Vault に到達できるようにはなりません。',
        explanationEn: 'Service endpoints extend a virtual network\'s identity to a service, but Azure Resource Manager does not originate traffic from within a customer virtual network, so a service endpoint would not enable Azure Resource Manager to reach Key Vault.'
      },
      {
        id: 'D',
        textJa: 'Key Vault のパブリック ネットワーク アクセス構成を変更し、「すべてのネットワークから有効」(Enabled from all networks) オプションを有効にしてデプロイ中の証明書取得要求を受け入れるようにする',
        textEn: 'Change the Key Vault public network access firewall setting to "Enabled from all networks" for deployments',
        isCorrect: false,
        explanationJa: '【不正解】これを行うと技術的には ARM が通過できるようになりますが、同時にすべての IP ベースの制限が解除されて Key Vault がインターネット全体に公開されてしまい、他のトラフィックに対する既存制限を維持する要件に違反します。',
        explanationEn: 'While this would technically allow Azure Resource Manager through, it would also remove all IP-based restrictions and expose Key Vault to the entire internet, violating the requirement to maintain existing restrictions for other traffic.'
      }
    ],
    overallExplanationJa: `Key Vault のファイアウォール設定には、コンテナーをすべてのパブリック トラフィックに開放することなく、承認された特定操作のために**信頼された Microsoft サービス (Azure Resource Manager、Azure Backup など)** がファイアウォール規則をバイパスできるようにする専用オプションが含まれています。

Azure Resource Manager は顧客の VNet 内部には存在しないコントロール プレーン サービスであるため、IP 制限を維持したまま ARM テンプレートによる証明書取得 (デプロイ時) を成功させるには、このバイパス設定を有効にするのが正規の解決策です。`,
    overallExplanationEn: `Key Vault firewall settings include a specific option to allow trusted Microsoft services (such as Azure Resource Manager, Azure Backup, and others) to bypass firewall rules for specific approved operations, without requiring you to open the vault to all public traffic. This is the intended mechanism for scenarios where a first-party Azure service needs vault access despite IP-based restrictions being in place.`,
    keyPointsJa: [
      'IP ファイアウォール有効状態の Key Vault に Azure Resource Manager (ARM) デプロイメントからアクセス許可 ＝「信頼された Microsoft サービスがこのファイアウォールをバイパスすることを許可する」を有効化',
      'ARM は顧客 VNet 外部のグローバル コントロール プレーン サービスのため、Private Endpoint や VNet サービス エンドポイントでは救済できない',
      '「Enabled from all networks」への変更はインターネット全面開放となるため不可'
    ],
    keyPointsEn: [
      'Enable "Allow trusted Microsoft services to bypass this firewall" on Key Vault so Azure Resource Manager can fetch deployment certificates',
      'ARM is a control-plane service outside customer VNets, so Private Endpoints and Service Endpoints do not apply to ARM itself',
      'Preserves existing corporate IP allowlist restrictions for all other public traffic'
    ],
    referenceTopic: 'Key Vault ファイアウォールと信頼された Microsoft サービス'
  },
  {
    id: 'sc500-q86',
    number: 86,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Virtual Network Manager (AVNM) セキュリティ管理規則による全 VNet RDP 遮断',
    titleEn: 'Enforcing Non-Bypassable RDP Blocks with Azure Virtual Network Manager',
    scenarioJa: `あなたの組織では、単一の管理グループ内の複数のサブスクリプションに分散された 50 個の仮想ネットワーク全体のネットワーク セキュリティを管理するために Azure Virtual Network Manager (AVNM) を使用しています。個々のアプリケーション チームは、自身のサブネットや NIC 上でネットワーク セキュリティ グループ (NSG) を作成・変更する権限を持っています。

セキュリティ チームは、管理グループ内のすべての仮想ネットワークにおいて TCP ポート 3389 (RDP) のすべての受信トラフィックをブロックする必須ルールを強制する必要があります。このルールは、アプリケーション チームが独自のリソース上でどのような NSG ルールを構成したとしても、上書き、バイパス、または削除できてはなりません。`,
    scenarioEn: `Your organization uses Azure Virtual Network Manager (AVNM) to manage network security across 50 virtual networks distributed among multiple subscriptions in a single management group. Individual application teams have permissions to create and modify network security groups (NSGs) on their own subnets and NICs.

The security team needs to enforce a mandatory rule that blocks all inbound traffic on TCP port 3389 (RDP) across every virtual network in the management group. The rule must NOT be able to be overridden, bypassed, or removed by any application team, regardless of the NSG rules they configure on their own resources.`,
    questionJa: 'この要件を満たすために、セキュリティ チームはどの AVNM 構成を実装すべきですか？',
    questionEn: 'Which AVNM configuration should the security team implement to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: '管理グループ内の各仮想ネットワークに専用の Azure Firewall インスタンスを個別にデプロイし、各環境で TCP ポート 3389 の受信 RDP トラフィックを拒否するネットワーク ルール コレクションを構成してトラフィックをフィルタリングする',
        textEn: 'Deploy a dedicated Azure Firewall instance in each virtual network across the subscriptions and configure a network rule collection that denies all TCP port 3389 inbound RDP traffic in every environment.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Firewall はネットワーク ルールを強制できますが、Azure Virtual Network Manager の機能ではなく、VNet ごとにデプロイするのは一元的なネットワーク アクセス ポリシーの仕組みではありません。またチームが競合する NSG ルールを作成するのを防ぐ仕組みとも異なります。',
        explanationEn: 'While Azure Firewall can enforce network rules, it is not a feature of Azure Virtual Network Manager and deploying it per-VNet is not a centralized network access policy mechanism; it also does not inherently prevent teams from creating conflicting NSG rules that could still expose the port.'
      },
      {
        id: 'B',
        textJa: '各アプリケーション チームに自身のサブネットや NIC の NSG へ TCP ポート 3389 受信の拒否ルールを手動で追加するよう指示し、Azure Policy イニシアチブを使用して管理グループ内のすべてのサブスクリプションの準拠状態を定期的に監査する',
        textEn: 'Instruct each application team to manually add a deny rule for TCP port 3389 inbound traffic to their NSGs, and assign Azure Policy to regularly audit compliance across all subscriptions in the management group.',
        isCorrect: false,
        explanationJa: '【不正解】アプリケーション チームによる手動の NSG 構成に依存すると、チームがいつでもルールを変更または削除できてしまい、バイパス不可という要件に直接反します。また Azure Policy による監査は事後レポートのみで予防的強制にはなりません。',
        explanationEn: 'Relying on application teams to manually configure NSGs allows them to modify or remove the rule at any time, directly violating the requirement that the rule cannot be bypassed; Azure Policy would only provide auditing/reporting after the fact rather than preventive enforcement.'
      },
      {
        id: 'C',
        textJa: 'ハブ アンド スポーク トポロジを使用して AVNM の接続構成 (Connectivity configuration) を作成し、中央のハブ仮想ネットワーク上に配置した NSG で各スポークへの TCP ポート 3389 の受信トラフィックを拒否するように構成する',
        textEn: 'Create an AVNM connectivity configuration using a hub-and-spoke topology, apply it to the network group, and configure a network security group on the hub virtual network to deny TCP port 3389 inbound traffic.',
        isCorrect: false,
        explanationJa: '【不正解】AVNM の接続構成 (Connectivity configuration) はネットワーク トポロジ (メッシュやハブ アンド スポーク) と VNet 間の接続を定義するものであり、セキュリティ規則の強制ではありません。またハブ VNet の NSG は各スポーク VNet 内のトラフィックには自動適用されません。',
        explanationEn: 'Connectivity configurations in AVNM define network topology (mesh or hub-and-spoke) and control connectivity between virtual networks, not security enforcement; an NSG on the hub VNet would not automatically apply to or protect traffic within each spoke VNet, and application teams could still modify their own NSGs.'
      },
      {
        id: 'D',
        textJa: 'すべての仮想ネットワークを含むネットワーク グループに対して、TCP ポート 3389 の受信を拒否 (Deny) するセキュリティ管理規則 (Security admin rule) を持つセキュリティ管理構成 (Security admin configuration) を作成し、管理グループ スコープにデプロイする',
        textEn: 'Create a security admin configuration with a security admin rule that denies TCP port 3389 inbound, applied to a network group containing all virtual networks, and deploy it to the management group scope.',
        isCorrect: true,
        explanationJa: '【正解】Azure Virtual Network Manager のセキュリティ管理規則 (Security admin rules) は通常の NSG ルールよりも先に評価され、リソース所有者 (アプリケーション チーム) が上書きすることはできません。AVNM インスタンス自体の権限を持つ管理者のみが変更できるため、管理グループ内の全 VNet にわたってバイパス不可の必須ルールを一元的に強制できる唯一の選択肢です。',
        explanationEn: 'Security admin rules in Azure Virtual Network Manager are evaluated before NSG rules and cannot be overridden by resource owners; only users with permissions on the AVNM instance itself can modify them, making this the only option that guarantees centralized, non-bypassable enforcement across all VNets in the management group.'
      }
    ],
    overallExplanationJa: `**Azure Virtual Network Manager (AVNM)** の **セキュリティ管理規則 (Security admin rules)** は、標準の NSG ルールよりも優先 (先に評価) され、サブネットや NIC の所有者によって上書きされることのない、高優先度かつ一元的なセキュリティ ガードレールを強制するために特別に設計されています。

全 VNet をまとめた**ネットワーク グループ**に対して「TCP 3389 受信を拒否」するセキュリティ管理構成を定義し、管理グループ スコープへデプロイすることで、アプリケーション チームが各自の NSG で何を許可しようとも確実に RDP を遮断できます。`,
    overallExplanationEn: `Azure Virtual Network Manager's security admin rules are specifically designed for centralized, high-priority security enforcement that takes precedence over and cannot be overridden by standard NSG rules, making them the correct tool for organization-wide mandatory restrictions like blocking RDP across all VNets in a management group.`,
    keyPointsJa: [
      '個別チームが NSG で上書き・削除できない組織必須のポート遮断ルール ＝ AVNM の Security admin configuration ＋ Security admin rule',
      'Security admin rules は標準の NSG ルールより先に評価されるため、Deny ルールを設定すると NSG 側で Allow しても遮断される',
      'Connectivity configuration は VNet ピアリング／メッシュなどのトポロジ管理用'
    ],
    keyPointsEn: [
      'Create an AVNM Security admin configuration with a Deny security admin rule for TCP 3389 across the network group',
      'AVNM security admin rules are evaluated prior to NSGs and cannot be overridden by VNet/subnet owners',
      'Ideal for enforcing organization-wide network guardrails at management group scope'
    ],
    referenceTopic: 'Azure Virtual Network Manager (AVNM) のセキュリティ管理規則'
  },
  {
    id: 'sc500-q87',
    number: 87,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot 所有者 (Owner) ロールによる容量・プラグイン・ロール管理',
    titleEn: 'Managing Security Copilot Capacity, Plugins, and Roles with Owner Role',
    scenarioJa: `あなたの組織では Microsoft Security Copilot をプロビジョニングし、コンピューティング容量を割り当てています。Priya という名前のセキュリティ アナリストは Security Copilot 共同作成者 (Security Copilot Contributor) ロールを持っており、調査セッションの実行、プロンプトの使用、および自分用のエージェントのセットアップを行うことができます。

今回 Priya はさらに、組織の他のメンバーが利用できる事前インストール済みプラグインを制限し、ワークスペースのセキュリティ コンピューティング ユニット (SCU) 容量および超過 (Overage) 設定を変更し、他のアナリストに Security Copilot ロールを割り当てる必要が生じました。彼女はこれらの設定がいずれも表示されていないと報告しています。

必要以上の権限を付与することなく、これらのタスクを実行するために必要な最小限の追加権限を Priya に付与する必要があります。`,
    scenarioEn: `Your organization has provisioned Microsoft Security Copilot and assigned compute capacity. A security analyst named Priya has the Security Copilot Contributor role, which lets her run investigation sessions, use prompts and set up agents for herself.

Priya must now also restrict which preinstalled plugins are available to the rest of the organization, change the Security Compute Unit capacity and overage settings for the workspace, and assign Security Copilot roles to other analysts. She reports that none of these settings are visible to her.

You need to grant Priya the minimum additional permission required to perform these tasks, without granting permissions beyond what is necessary.`,
    questionJa: 'Priya にどのロールを割り当てるべきですか？',
    questionEn: 'Which role should you assign to Priya?',
    options: [
      {
        id: 'A',
        textJa: 'Security Copilot 共同作成者 (Security Copilot Contributor)',
        textEn: 'Security Copilot Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Contributor は Priya がすでに保持しているロールです。セッションの実行、個人用プロンプトブックの管理、自分用の事前インストール済みプラグインの設定、エージェントのインストールは可能ですが、容量・組織全体のプラグイン制限・ロール割り当てなどの所有者設定は表示されません。',
        explanationEn: 'Contributor is the role Priya already holds; it allows running sessions, managing her own promptbooks, setting up preinstalled plugins for herself and installing agents, but it does not expose owner settings such as capacity, plugin availability for the organisation, or role assignment.'
      },
      {
        id: 'B',
        textJa: 'Security Copilot 所有者 (Security Copilot Owner)',
        textEn: 'Security Copilot Owner',
        isCorrect: true,
        explanationJa: '【正解】Microsoft のドキュメントでは、容量の関連付けと超過ユニット、組織全体のプラグイン利用可否・制限、データ共有、および Security Copilot ロール割り当てを含む「所有者設定」を管理するには Security Copilot Owner ロールが必要であると明記されています。シナリオの 3 つのタスクすべてをカバーする最小権限ロールです。',
        explanationEn: 'Microsoft states that the Security Copilot Owner role is required to manage owner settings, which include capacity association and overage units, plugin availability and restriction for the organisation, data sharing, and Security Copilot role assignments. It is the least-privileged role that covers all three tasks in the scenario.'
      },
      {
        id: 'C',
        textJa: 'セキュリティ管理者 (Security Administrator)',
        textEn: 'Security Administrator',
        isCorrect: false,
        explanationJa: '【不正解】Security Administrator は Security Copilot ロールではなく Microsoft Entra ロールであり、はるかに広範な権限を伴うため単に Copilot アクセスを付与する目的で割り当てるべきではないと明記されています。Entra レベルの Copilot 設定で制御できるのは監査ログの有効化程度です。',
        explanationEn: 'Security Administrator is a Microsoft Entra role, not a Security Copilot role, and Microsoft explicitly advises against assigning it purely to grant Copilot access because it carries far broader permissions. The only Entra-level Copilot setting it controls is audit logging enablement.'
      },
      {
        id: 'D',
        textJa: 'グローバル閲覧者 (Global Reader)',
        textEn: 'Global Reader',
        isCorrect: false,
        explanationJa: '【不正解】Global Reader は Microsoft 365 管理センターやサービス全体に対する読み取り専用アクセス権を付与するものであり、Security Copilot の容量やプラグイン、ロール割り当てを変更することはできません。',
        explanationEn: 'Global Reader provides read-only access across Microsoft 365 admin centers and services, allowing users to view configurations but not make changes. It would not allow Priya to enable or configure agents in Security Copilot.'
      }
    ],
    overallExplanationJa: `Security Copilot には、Microsoft Entra ID ではなく Security Copilot プラットフォーム内部で定義された 2 つのロール (**Owner** と **Contributor**) があります：
- **Contributor**: プロンプトの実行、個人用プロンプトブックの管理、自分用のプラグイン構成、エージェントのインストールなどの日常業務をカバーします。
- **Owner**: 容量 (SCU) の関連付けと超過ユニット設定、組織全体での事前インストール済みプラグインの利用制限、データ共有、およびロール割り当てを管理する「所有者設定」へのアクセスに必要なロールです。

Security Administrator や Global Reader などの広範な Entra ロールを割り当てるのは最小権限の原則に反するため、**Security Copilot Owner** を割り当てるのが正解です。`,
    overallExplanationEn: `Security Copilot has two platform roles, Owner and Contributor, that are defined inside Security Copilot rather than in Microsoft Entra ID. Contributor covers day-to-day work such as running prompts, managing personal promptbooks, configuring preinstalled plugins for oneself and installing agents. Owner settings are where capacity association and overage units, preinstalled plugin availability for the organisation, data sharing and role assignment are managed, and Microsoft states that the Security Copilot Owner role is required to manage them. Broad Microsoft Entra roles such as Security Administrator or Global Reader are not the intended way to grant these Copilot-specific permissions and would violate least privilege.`,
    keyPointsJa: [
      'SCU 容量・超過設定 ＋ 組織全体のプラグイン利用制限 ＋ Security Copilot ロール割り当て ＝ Security Copilot Owner',
      'Security Copilot Contributor ではこれらの Owner 設定メニュー自体が表示されない',
      'Entra の Security Administrator を Copilot 権限目的に使わないのがベストプラクティス'
    ],
    keyPointsEn: [
      'Assign Security Copilot Owner to manage SCU capacity/overage, org-wide plugin restrictions, data sharing, and role assignments',
      'Security Copilot Contributor cannot view or modify Owner settings',
      'Avoid granting broad Microsoft Entra roles like Security Administrator solely for Copilot workspace administration'
    ],
    referenceTopic: 'Security Copilot Owner ロールの管理権限'
  },
  {
    id: 'sc500-q88',
    number: 88,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud 整合性監視のためのトラステッド起動 (Trusted launch) 有効化',
    titleEn: 'Enabling Trusted Launch, Secure Boot, and vTPM for Boot Integrity Monitoring',
    scenarioJa: `あなたの会社では、機密性の高い基幹業務アプリケーションをホストする VM1 という名前の第 2 世代 (Generation 2) Azure 仮想マシンを運用しています。VM1 のセキュリティの種類は現在「Standard」に設定されています。サブスクリプションでは Microsoft Defender for Servers Plan 2 が有効になっています。

セキュリティ チームは、Microsoft Defender for Cloud を使用してブート ローダー、カーネル、ドライバーなどのブート コンポーネントに対する不正な変更を監視し、ルートキットやブートキットがブート チェーンを改ざんした場合にアラートを受け取りたいと考えています。

この監視機能を有効にできるように VM1 を構成する必要があります。`,
    scenarioEn: `Your company runs a Generation 2 Azure virtual machine (VM) named VM1 that hosts a sensitive line-of-business application. VM1 currently has its security type set to Standard. Microsoft Defender for Servers Plan 2 is enabled on the subscription.

The security team wants to use Microsoft Defender for Cloud to monitor VM1 for unauthorized changes to boot components, such as the boot loader, kernel, and drivers, and to receive alerts if a rootkit or bootkit tampers with the boot chain.

You need to configure VM1 so that this monitoring capability can be enabled.`,
    questionJa: '最初に何を実行すべきですか？',
    questionEn: 'What should you do first?',
    options: [
      {
        id: 'A',
        textJa: 'VM1 のセキュリティの種類を「機密仮想マシン」(Confidential VM) に変更してハードウェア メモリ暗号化を構成する',
        textEn: 'Change the security type of VM1 to Confidential VM to enable hardware memory encryption.',
        isCorrect: false,
        explanationJa: '【不正解】Confidential VM はハードウェア ベースのメモリ暗号化によって「使用中のデータ (Data in use)」を保護するように設計されており、トラステッド起動とは別のセキュリティの種類です。このシナリオで Defender for Cloud がブート整合性監視に特別に使用する構成要件そのものとしては、まず Trusted launch のセキュア ブートおよび vTPM 構成が基礎となります。',
        explanationEn: 'Confidential VM is designed to protect data in use through hardware-based memory encryption and is a separate security type from Trusted launch; it does not provide the Secure Boot and vTPM combination that Defender for Cloud uses specifically for boot integrity monitoring in this scenario.'
      },
      {
        id: 'B',
        textJa: 'VM1 に Azure Monitor Agent をインストールし、変更履歴とインベントリ (Change Tracking and Inventory) を有効にする',
        textEn: 'Install the Azure Monitor Agent on VM1 and enable Change Tracking and Inventory.',
        isCorrect: false,
        explanationJa: '【不正解】変更履歴とインベントリは時間の経過に伴う OS レベルのファイルやレジストリ変更を監視しますが、vTPM とセキュア ブートを介したブート プロセスの暗号学的構成証明 (Attestation) は実行しません。',
        explanationEn: 'Change Tracking and Inventory monitors file and registry changes at the OS level over time, but it does not perform cryptographic attestation of the boot process, which is what integrity monitoring via vTPM and Secure Boot provides.'
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud の設定を通じて VM1 上で Microsoft Defender for Endpoint 統合を有効にする',
        textEn: 'Enable Microsoft Defender for Endpoint integration on VM1 through Defender for Cloud settings.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Endpoint 統合を有効にするとエンドポイント検出と対応 (EDR) シグナルは提供されますが、基盤となる VM のセキュリティの種類と vTPM/セキュア ブート設定に依存するブート整合性検証を有効にすることはできません。',
        explanationEn: 'Enabling Microsoft Defender for Endpoint integration provides endpoint detection and response signals but does not enable or require boot-integrity verification, which depends on the underlying VM security type and vTPM/Secure Boot settings, not this integration alone.'
      },
      {
        id: 'D',
        textJa: 'VM1 のセキュリティの種類を「トラステッド起動」(Trusted launch) に変更し、セキュア ブート (Secure Boot) と vTPM を有効にする',
        textEn: 'Change the security type of VM1 to Trusted launch, and then enable Secure Boot and vTPM.',
        isCorrect: true,
        explanationJa: '【正解】Defender for Cloud の整合性監視 (ゲスト構成証明 / Guest Attestation) では、VM が「Trusted launch」セキュリティの種類を使用している必要があります。これにより、未承認のブート ローダーやドライバーを防ぐ「セキュア ブート」と、ブート整合性を証明するための測定値を安全に保存する「vTPM」を有効にできます。Trusted launch なしではこの監視機能は有効化できません。',
        explanationEn: 'Integrity monitoring (Guest Attestation) in Defender for Cloud requires the VM to use the Trusted launch security type, which enables Secure Boot to prevent unauthorized boot loaders/drivers and vTPM to securely store measurements used to attest boot integrity; without Trusted launch, this monitoring feature cannot be enabled.'
      }
    ],
    overallExplanationJa: `Microsoft Defender for Cloud でブート チェーン (ブート ローダー、カーネル、ドライバー) の改ざんやブートキットを検知する**整合性監視 (Integrity monitoring / Guest Attestation)** を有効にするには、まず VM (第 2 世代) のセキュリティの種類を Standard から **トラステッド起動 (Trusted launch)** に変更し、**セキュア ブート (Secure Boot)** と **仮想 TPM (vTPM)** を有効にする必要があります。

これらの機能が連携してブート プロセスを暗号学的に測定・構成証明 (Attest) することで、Defender for Cloud が不正なブート コンポーネント変更を検出できるようになります。`,
    overallExplanationEn: `To enable integrity monitoring in Microsoft Defender for Cloud, a VM must first be configured with the Trusted launch security type, which allows Secure Boot and a virtual TPM (vTPM) to be enabled. These features work together to measure and attest the boot process, letting Defender for Cloud detect unauthorized changes to boot components—capabilities not provided by endpoint integration, Confidential VM alone, or traditional change tracking agents.`,
    keyPointsJa: [
      'Defender for Cloud でのブート チェーン／ルートキット監視 (整合性監視・ゲスト構成証明) の前提 ＝ セキュリティの種類を「Trusted launch」に変更し Secure Boot + vTPM を有効化',
      'Standard セキュリティ種類の第 2 世代 VM ではブート構成証明が利用できない',
      'Change Tracking and Inventory や MDE 単体では暗号学的ブート構成証明を行えない'
    ],
    keyPointsEn: [
      'Change VM security type from Standard to Trusted launch and enable Secure Boot + vTPM for Defender for Cloud boot integrity monitoring',
      'vTPM stores boot measurements for Guest Attestation against rootkits and bootkits',
      'Requires a Generation 2 Azure VM'
    ],
    referenceTopic: 'Trusted Launch / Secure Boot / vTPM による VM ブート整合性監視'
  }
];
