import {
  CONTOSO_CASE_STUDY_EN,
  CONTOSO_CASE_STUDY_JA,
  FABRIKAM_CASE_STUDY_EN,
  FABRIKAM_CASE_STUDY_JA,
  PdfQuestionSeed,
} from './pdfCaseStudies';

export const PDF_QUESTIONS_PART2: PdfQuestionSeed[] = [
  {
    id: 'pdf-q21',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ASG を用いた IP アドレス変更に耐える NSG 受信規則の構成',
    titleEn: 'Configuring NSG Rules Using Application Security Groups (ASGs)',
    scenarioJa: `Azure Virtual Network の VNet1 には、Subnet1、Subnet2、Subnet3 という3つのサブネットがあります。NSG1 という1つのネットワーク セキュリティ グループ (NSG) が、すべてのサブネットに関連付けられています。
次の仮想マシンがあります。
・VM1：Subnet1 上
・VM2：Subnet2 上
・VM3：Subnet3 上

ASG1 と ASG2 という2つのアプリケーション セキュリティ グループを作成します。VM2 は ASG1 のメンバーであり、VM3 は ASG2 のメンバーです。
VM2 だけが VM3 に接続できるようにする必要があります。VM2 のプライベート IP アドレスが変更されても、このソリューションは引き続き機能する必要があります。

設定候補：ASG1、ASG2、IP address of VM1、IP address of VM2、IP address of VM3、VirtualNetwork`,
    scenarioEn: `You have an Azure Virtual Network named VNet1 that contains three subnets: Subnet1, Subnet2, and Subnet3. A single NSG named NSG1 is associated with all three subnets.
Virtual machines:
- VM1 on Subnet1
- VM2 on Subnet2
- VM3 on Subnet3

You create two Application Security Groups named ASG1 (containing VM2) and ASG2 (containing VM3).
You need to ensure that only VM2 can connect to VM3, and the solution must continue to work even if VM2's private IP address changes.`,
    questionJa: 'NSG1 の受信規則の送信元と宛先に設定する組み合わせを1つ選んでください。',
    questionEn: 'Which Source and Destination combination should you configure for the NSG1 inbound security rule?',
    options: [
      {
        id: 'A',
        textJa: '送信元：ASG2、宛先：ASG1',
        textEn: 'Source: ASG2 / Destination: ASG1',
        isCorrect: false,
        explanationJa: '【不正解】接続方向が逆です。VM2 (ASG1) から VM3 (ASG2) への接続を許可する必要があります。',
        explanationEn: 'The direction is reversed; traffic flows from VM2 (ASG1) to VM3 (ASG2).',
      },
      {
        id: 'B',
        textJa: '送信元：ASG1、宛先：ASG2',
        textEn: 'Source: ASG1 / Destination: ASG2',
        isCorrect: true,
        explanationJa: '【正解】送信元に VM2 が属する ASG1、宛先に VM3 が属する ASG2 を指定することで、IP アドレスに依存せず VM2 から VM3 への通信のみを許可できます。',
        explanationEn: 'Setting Source to ASG1 (VM2) and Destination to ASG2 (VM3) allows VM2-to-VM3 traffic independently of private IP address changes.',
      },
      {
        id: 'C',
        textJa: '送信元：ASG2、宛先：IP address of VM3',
        textEn: 'Source: ASG2 / Destination: IP address of VM3',
        isCorrect: false,
        explanationJa: '【不正解】送信元 ASG2 は VM3 自身であり、VM2 からの通信を許可できません。',
        explanationEn: 'ASG2 represents VM3, not the source VM2.',
      },
      {
        id: 'D',
        textJa: '送信元：ASG1、宛先：ASG1',
        textEn: 'Source: ASG1 / Destination: ASG1',
        isCorrect: false,
        explanationJa: '【不正解】ASG1 同士の通信になり、VM3 (ASG2) への通信が許可されません。',
        explanationEn: 'This only covers ASG1-to-ASG1 traffic and does not reach VM3 in ASG2.',
      },
      {
        id: 'E',
        textJa: '送信元：IP address of VM2、宛先：ASG2',
        textEn: 'Source: IP address of VM2 / Destination: ASG2',
        isCorrect: false,
        explanationJa: '【不正解】VM2 の IP アドレスを直接指定すると、IP アドレス変更時にルールが機能しなくなります。',
        explanationEn: 'Hardcoding VM2’s IP address breaks the rule if the private IP address changes.',
      },
      {
        id: 'F',
        textJa: '送信元：IP address of VM2、宛先：IP address of VM3',
        textEn: 'Source: IP address of VM2 / Destination: IP address of VM3',
        isCorrect: false,
        explanationJa: '【不正解】IP アドレス固定指定のため、IP 変更に追従できません。',
        explanationEn: 'Hardcoded IP addresses fail when VM2’s IP address changes.',
      },
    ],
    overallExplanationJa: 'アプリケーション セキュリティ グループ (ASG) は、VM のネットワーク インターフェイスを役割でグループ化し、IP アドレスの変更に左右されない NSG 規則を定義するための機能です。VM2 (ASG1) から VM3 (ASG2) への受信規則では、送信元: ASG1、宛先: ASG2 を指定します。',
    overallExplanationEn: 'Application Security Groups decouple NSG rules from IP addresses. Specify Source: ASG1 (VM2) and Destination: ASG2 (VM3) so the rule persists across IP address changes.',
    keyPointsJa: [
      'IP アドレス変更への追従には IP ではなく ASG を送信元・宛先に指定する',
      '接続開始側が Source (ASG1: VM2)、接続先が Destination (ASG2: VM3)',
    ],
    keyPointsEn: [
      'Use ASGs instead of static IPs so rules adapt automatically to IP changes',
      'Source = ASG1 (VM2), Destination = ASG2 (VM3)',
    ],
    referenceTopic: 'Azure NSG とアプリケーション セキュリティ グループ (ASG)',
  },
  {
    id: 'pdf-q22',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Firewall による特定 URL (FQDN) への送信通信の限定',
    titleEn: 'Restricting Outbound FQDN Traffic Using Azure Firewall Rules',
    scenarioJa: `Azure 仮想ネットワークに、100 台の仮想マシンと、FW1 という名前の Azure Firewall インスタンスがあります。仮想マシンからのすべてのトラフィックは FW1 を経由してルーティングされます。
FW1 が updates.contoso.com という URL のみへのアクセスを許可し、その他のすべての送信トラフィックをブロックするようにする必要があります。`,
    scenarioEn: `You have an Azure virtual network containing 100 virtual machines and an Azure Firewall instance named FW1. All traffic from the virtual machines is routed through FW1.
You need to ensure that FW1 allows access only to updates.contoso.com and blocks all other outbound traffic.`,
    questionJa: '何を使用すべきか、1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: '受信 NAT 規則',
        textEn: 'DNAT rules',
        isCorrect: false,
        explanationJa: '【不正解】受信 NAT (DNAT) 規則は外部からの受信トラフィックを内部 IP へ変換・転送するための規則です。',
        explanationEn: 'DNAT rules translate inbound traffic from the internet to internal resources, not outbound filtering.',
      },
      {
        id: 'B',
        textJa: 'アプリケーション規則',
        textEn: 'Application rules',
        isCorrect: true,
        explanationJa: '【正解】Azure Firewall のアプリケーション規則は HTTP/HTTPS のホスト名 (ターゲット FQDN: updates.contoso.com) に基づいて送信トラフィックを許可・制御し、一致しないその他の通信を既定でブロックします。',
        explanationEn: 'Azure Firewall application rules filter outbound HTTP/HTTPS traffic by target FQDN (updates.contoso.com) while implicitly denying all other outbound traffic.',
      },
      {
        id: 'C',
        textJa: '送信 NAT 規則',
        textEn: 'SNAT rules',
        isCorrect: false,
        explanationJa: '【不正解】送信 NAT (SNAT) は送信元アドレスの変換設定であり、FQDN 単位のアクセス許可制御ではありません。',
        explanationEn: 'SNAT modifies source IP translation behavior, not FQDN allowlisting.',
      },
      {
        id: 'D',
        textJa: 'ネットワーク規則',
        textEn: 'Network rules',
        isCorrect: false,
        explanationJa: '【不正解】ネットワーク規則は IP アドレスとポート (L3/L4) に基づく制御であり、共有 IP 上の特定 HTTP/HTTPS URL ホスト名での厳密な制御にはアプリケーション規則を使います。',
        explanationEn: 'Network rules operate at L3/L4 (IP/port) and resolve FQDNs to IPs rather than inspecting HTTP Host/TLS SNI headers.',
      },
    ],
    overallExplanationJa: 'Azure Firewall で HTTP/HTTPS 通信の接続先をホスト名・FQDN (updates.contoso.com) 単位で制限するには「アプリケーション規則」を使用します。ネットワーク規則と異なり、HTTP Host ヘッダーや TLS SNI を見て判定できるため、同一 IP を共有する別ドメインとの区別も可能です。',
    overallExplanationEn: 'Use Azure Firewall application rules to allow outbound HTTP/HTTPS traffic to specific target FQDNs like updates.contoso.com.',
    keyPointsJa: [
      'HTTP/HTTPS の FQDN / URL 制御には Azure Firewall の「アプリケーション規則」を使用',
      'ネットワーク規則は IP・ポート単位、DNAT は外部からの受信公開用',
    ],
    keyPointsEn: [
      'Application rules inspect HTTP/HTTPS FQDNs (Host/SNI)',
      'Network rules filter L3/L4 IPs/ports; DNAT handles inbound publishing',
    ],
    referenceTopic: 'Azure Firewall アプリケーション規則とネットワーク規則の使い分け',
  },
  {
    id: 'pdf-q23',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Virtual Network Manager による複数 VNet の受信 RDP 一元ブロック',
    titleEn: 'Blocking Inbound RDP Across a Network Group Using Azure Virtual Network Manager',
    scenarioJa: `あなたは Azure Virtual Network Manager を使用して、Group1 という名前のネットワーク グループ内の複数の仮想ネットワークを管理しています。
Group1 内の仮想マシンが、TCP ポート 3389 を使用してインターネットからアクセス可能であることが分かりました。
Group1 内のすべての仮想ネットワークで、インターネットからの受信 TCP 3389 をブロックする必要があります。ソリューションでは、管理作業を最小限に抑える必要があります。`,
    scenarioEn: `You use Azure Virtual Network Manager to manage multiple virtual networks in a network group named Group1.
You discover that VMs in Group1 are accessible from the internet over TCP port 3389.
You need to block inbound TCP 3389 from the internet across all virtual networks in Group1 while minimizing administrative effort.`,
    questionJa: '使用すべきものを1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: '接続構成',
        textEn: 'Connectivity configuration',
        isCorrect: false,
        explanationJa: '【不正解】接続構成はメッシュやハブアンドスポークなどの VNet 間トポロジを作成する機能であり、ポート通信を拒否する規則は配布できません。',
        explanationEn: 'Connectivity configurations define mesh or hub-and-spoke topologies, not port blocking rules.',
      },
      {
        id: 'B',
        textJa: 'セキュリティ管理構成',
        textEn: 'Security admin configuration',
        isCorrect: true,
        explanationJa: '【正解】セキュリティ管理構成 (Security admin configuration) で Deny 規則を作成して Group1 へ展開すると、配下のすべての VNet の個別 NSG よりも先に評価されてインターネットからの TCP 3389 を一元的にブロックできます。',
        explanationEn: 'A security admin configuration deploys high-priority Deny rules to Group1 that are evaluated before individual NSGs across all virtual networks.',
      },
      {
        id: 'C',
        textJa: 'ユーザー定義ルート (UDR)',
        textEn: 'User-defined routes (UDRs)',
        isCorrect: false,
        explanationJa: '【不正解】UDR はネクスト ホップのルーティング先を制御するものであり、TCP ポート 3389 の受信を拒否する規則ではありません。',
        explanationEn: 'UDRs control routing next hops, not TCP port filtering.',
      },
      {
        id: 'D',
        textJa: 'ネットワーク セキュリティ グループ (NSG)',
        textEn: 'Network security groups (NSGs)',
        isCorrect: false,
        explanationJa: '【不正解】各サブネットの NSG を個別に変更するのは管理作業が増え、Virtual Network Manager による一元強制になりません。',
        explanationEn: 'Modifying individual NSGs across multiple VNets increases administrative effort and lacks centralized override.',
      },
    ],
    overallExplanationJa: 'Azure Virtual Network Manager (AVNM) の「セキュリティ管理構成 (Security admin configuration)」を使うと、ネットワーク グループ単位でセキュリティ管理者規則を適用できます。アクションが Deny の規則は各サブネット/NIC の NSG より先に評価・適用されるため、最小の管理作業で全体から危険なポート公開を遮断できます。',
    overallExplanationEn: 'Security admin configurations in AVNM enforce Deny rules across an entire network group prior to NSG evaluation, minimizing administrative overhead.',
    keyPointsJa: [
      'AVNM の「セキュリティ管理構成」は各 NSG より優先してルールを一元展開できる',
      '複数 VNet にまたがる緊急のポート遮断に最適',
    ],
    keyPointsEn: [
      'AVNM security admin configurations evaluate before individual NSGs',
      'Ideal for centrally blocking high-risk ports like RDP across network groups',
    ],
    referenceTopic: 'Azure Virtual Network Manager セキュリティ管理構成',
  },
  {
    id: 'pdf-q24',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Virtual WAN 複数リージョンの保護された仮想ハブ間での規則同期',
    titleEn: 'Synchronizing Security Policies Across Multi-Region Secured Virtual Hubs',
    scenarioJa: `Azure サブスクリプションがあります。次の要件を満たす Azure Virtual WAN をデプロイする必要があります。
・East US、West US、North Europe の Azure リージョンに、セキュリティで保護された仮想ハブを3つ作成する。
・セキュリティ規則がリージョン間で同期されるようにする。`,
    scenarioEn: `You have an Azure subscription. You need to deploy an Azure Virtual WAN that meets the following requirements:
- Create three secured virtual hubs in the East US, West US, and North Europe Azure regions.
- Ensure that security rules are synchronized across regions.`,
    questionJa: '何を使用すべきか、1つ選んでください。',
    questionEn: 'What should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Network Function Manager',
        textEn: 'Azure Network Function Manager',
        isCorrect: false,
        explanationJa: '【不正解】Azure Stack Edge 等でサードパーティ製ネットワーク機能を展開・管理するサービスであり、Virtual WAN ハブの Firewall ポリシー管理には使えません。',
        explanationEn: 'Network Function Manager deploys virtual network functions at the edge, not Virtual WAN Firewall policies.',
      },
      {
        id: 'B',
        textJa: 'Azure Firewall Manager',
        textEn: 'Azure Firewall Manager',
        isCorrect: true,
        explanationJa: '【正解】Azure Firewall Manager は、Virtual WAN のセキュリティで保護された仮想ハブ (Secured virtual hub) と共通の Azure Firewall Policy を一元管理し、複数リージョン間でセキュリティ規則を同期・適用します。',
        explanationEn: 'Azure Firewall Manager centrally manages secured virtual hubs and applies a shared Azure Firewall Policy synchronized across all regions.',
      },
      {
        id: 'C',
        textJa: 'Azure Virtual Network Manager',
        textEn: 'Azure Virtual Network Manager',
        isCorrect: false,
        explanationJa: '【不正解】AVNM は通常の VNet 接続やセキュリティ管理者規則を管理するサービスであり、Virtual WAN の保護された仮想ハブの Firewall Policy は対象外です。',
        explanationEn: 'AVNM manages VNet topologies and security admin rules, not Virtual WAN secured hub Firewall policies.',
      },
      {
        id: 'D',
        textJa: 'Azure Front Door',
        textEn: 'Azure Front Door',
        isCorrect: false,
        explanationJa: '【不正解】グローバル HTTP/HTTPS アプリケーション配信と WAF 用のサービスです。',
        explanationEn: 'Azure Front Door is a global Layer 7 load balancer and CDN/WAF service.',
      },
    ],
    overallExplanationJa: '複数のリージョンに展開された Azure Virtual WAN の保護された仮想ハブ (Secured virtual hub) に対して一貫したセキュリティ規則を適用・同期するには、Azure Firewall Manager を使用して共通の Azure Firewall Policy を割り当てます。',
    overallExplanationEn: 'Use Azure Firewall Manager to manage secured virtual hubs and centrally apply synchronized Azure Firewall Policies across multiple regions.',
    keyPointsJa: [
      'Secured virtual hub + リージョン間の Firewall 規則同期 = Azure Firewall Manager',
      '共通の Firewall Policy を親ポリシーとして各リージョンのハブに関連付け可能',
    ],
    keyPointsEn: [
      'Azure Firewall Manager orchestrates Virtual WAN secured virtual hubs',
      'Common Firewall Policies keep rules consistent across regions',
    ],
    referenceTopic: 'Azure Firewall Manager とセキュリティで保護された仮想ハブ',
  },
  {
    id: 'pdf-q25',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Functions マネージド ID へのコンテナー単位最小特権 BLOB ロール付与',
    titleEn: 'Assigning Least-Privilege Container-Scoped Blob Role to Function App',
    scenarioJa: `container1 という名前の BLOB コンテナーをホストする storage1 という名前の Azure Storage アカウントがあります。マネージド ID を使用する app1 という名前の Azure Functions アプリがあります。
container1 内の BLOB を app1 が読み取り、書き込み、削除できるように構成する必要があります。ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have an Azure Storage account named storage1 hosting a blob container named container1. You have an Azure Functions app named app1 that uses a managed identity.
You need to allow app1 to read, write, and delete blobs in container1 while following the principle of least privilege.`,
    questionJa: '何をすべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージ アカウント共同作成者ロールを、storage1 のスコープで app1 のマネージド ID に割り当てる。',
        textEn: 'Assign the Storage Account Contributor role to app1’s managed identity at the storage1 scope.',
        isCorrect: false,
        explanationJa: '【不正解】管理プレーン ロールであり、BLOB データ操作を直接許可しないうえアカウント キー取得権限まで与えるため過剰です。',
        explanationEn: 'Storage Account Contributor is a management-plane role that exposes account keys and does not grant direct RBAC data access.',
      },
      {
        id: 'B',
        textJa: 'ストレージ BLOB 委任者ロールを、container1 のスコープで app1 のマネージド ID に割り当てる。',
        textEn: 'Assign the Storage Blob Delegator role to app1’s managed identity at the container1 scope.',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー委任 SAS キー取得用のロールであり、BLOB の読み書き権限は含まれずコンテナー スコープでも使えません。',
        explanationEn: 'Storage Blob Delegator only allows obtaining user delegation keys for SAS generation and does not grant blob read/write/delete rights.',
      },
      {
        id: 'C',
        textJa: '所有者ロールを、container1 のスコープで app1 のマネージド ID に割り当てる。',
        textEn: 'Assign the Owner role to app1’s managed identity at the container1 scope.',
        isCorrect: false,
        explanationJa: '【不正解】所有者ロールはアクセス権の変更まで可能な強い管理権限であり、最小特権に反します。',
        explanationEn: 'Owner grants administrative RBAC management and is overly permissive.',
      },
      {
        id: 'D',
        textJa: 'ストレージ BLOB データ共同作成者ロールを、container1 のスコープで app1 のマネージド ID に割り当てる。',
        textEn: 'Assign the Storage Blob Data Contributor role to app1’s managed identity at the container1 scope.',
        isCorrect: true,
        explanationJa: '【正解】「ストレージ BLOB データ共同作成者 (Storage Blob Data Contributor)」は BLOB の読み取り・書き込み・削除を許可するデータ プレーン ロールです。container1 スコープに絞ることで最小特権を満たします。',
        explanationEn: 'Storage Blob Data Contributor grants read, write, and delete access to blobs; assigning it at the container1 scope satisfies least privilege.',
      },
    ],
    overallExplanationJa: 'BLOB の読み取り・書き込み・削除のみを許可する場合はデータ プレーン ロールの「Storage Blob Data Contributor」を選び、スコープもストレージ アカウント全体ではなく対象のコンテナー (container1) に限定します。',
    overallExplanationEn: 'Assign Storage Blob Data Contributor at the narrowest required scope (container1) for read, write, and delete blob operations.',
    keyPointsJa: [
      'BLOB の読み・書き・削除 = Storage Blob Data Contributor',
      'スコープは storage1 ではなく container1 に限定して最小特権を守る',
    ],
    keyPointsEn: [
      'Storage Blob Data Contributor grants blob read, write, and delete',
      'Scope the assignment to container1 rather than the entire storage account',
    ],
    referenceTopic: 'Azure Storage BLOB データ プレーン RBAC ロール',
  },
  {
    id: 'pdf-q26',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: '異なる Entra テナント間の特定 VM サービスへのプライベート限定公開',
    titleEn: 'Exposing Specific VMs Across Tenants via Private Link Service and Private Endpoint',
    scenarioJa: `Azure サブスクリプション Sub1 には、VNet1 という名前の仮想ネットワークがあります。VNet1 には、VM1 と VM2 という名前の2台を含む複数の仮想マシンがあります。Sub1 は、contoso.com という名前の Microsoft Entra テナントにリンクされています。
パートナー企業には、VNet2 という名前の仮想ネットワークを含む Azure サブスクリプション Sub2 があります。VNet2 には、VM3 という名前の仮想マシンがあります。Sub2 は、fabrikam.com という名前の Microsoft Entra テナントにリンクされています。
VM1 と VM2 には、VM3 上で実行されるアプリケーションが使用するデータが含まれています。
VM3 が VM1 と VM2 にアクセスできるようにする必要があります。このソリューションでは、VM3 が Sub1 内のその他のリソースにアクセスすることを拒否する必要があります。

構成要素候補：Azure Private Link サービス、Azure VPN Gateway、プライベート エンドポイント、サービス エンドポイント、VNet ピアリング`,
    scenarioEn: `Azure subscription Sub1 (tenant contoso.com) has VNet1 containing VM1, VM2, and other VMs.
A partner's subscription Sub2 (tenant fabrikam.com) has VNet2 containing VM3.
VM3 needs to access an application/data hosted on VM1 and VM2, while being denied access to all other resources in Sub1.

Components: Azure Private Link service, Azure VPN Gateway, Private endpoint, Service endpoint, VNet peering.`,
    questionJa: '各仮想ネットワークに構成するものの正しい組み合わせはどれですか。1つ選んでください。',
    questionEn: 'Which components should you configure in VNet1 and VNet2?',
    options: [
      {
        id: 'A',
        textJa: 'VNet1：Azure Private Link サービス／VNet2：プライベート エンドポイント',
        textEn: 'VNet1: Azure Private Link service / VNet2: Private endpoint',
        isCorrect: true,
        explanationJa: '【正解】提供側の VNet1 (Standard Load Balancer 配下の VM1/VM2) に Azure Private Link サービスを構成し、利用側の VNet2 にそのサービスを指すプライベート エンドポイントを作成することで、テナントをまたいで特定サービスのみを安全に公開でき、Sub1 の他リソースへの経路は遮断されます。',
        explanationEn: 'Configuring an Azure Private Link service in VNet1 (fronted by a Standard LB for VM1/VM2) and a Private Endpoint in VNet2 enables cross-tenant access strictly to that service without exposing other Sub1 resources.',
      },
      {
        id: 'B',
        textJa: 'VNet1：サービス エンドポイント／VNet2：Azure VPN Gateway',
        textEn: 'VNet1: Service endpoint / VNet2: Azure VPN Gateway',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントは PaaS 向け機能であり、VM 上のサービスを公開する機能ではありません。',
        explanationEn: 'Service endpoints connect subnets to Azure PaaS services and do not expose custom VM workloads.',
      },
      {
        id: 'C',
        textJa: 'VNet1：Azure VPN Gateway／VNet2：VNet ピアリング',
        textEn: 'VNet1: Azure VPN Gateway / VNet2: VNet peering',
        isCorrect: false,
        explanationJa: '【不正解】VPN Gateway とピアリングは対向接続として組み合わせられず、ネットワーク全体を結ぶ方式です。',
        explanationEn: 'VPN Gateway cannot peer directly with VNet peering, and peering exposes broader network routing.',
      },
      {
        id: 'D',
        textJa: 'VNet1：プライベート エンドポイント／VNet2：サービス エンドポイント',
        textEn: 'VNet1: Private endpoint / VNet2: Service endpoint',
        isCorrect: false,
        explanationJa: '【不正解】提供側と利用側のコンポーネントが逆であり、サービス エンドポイントは利用できません。',
        explanationEn: 'Private endpoints belong on the consumer side (VNet2), and service endpoints do not apply here.',
      },
      {
        id: 'E',
        textJa: 'VNet1：VNet ピアリング／VNet2：Azure Private Link サービス',
        textEn: 'VNet1: VNet peering / VNet2: Azure Private Link service',
        isCorrect: false,
        explanationJa: '【不正解】Private Link サービスはサービスを提供する VNet1 側に配置します。',
        explanationEn: 'Azure Private Link service must be deployed on the provider side (VNet1).',
      },
    ],
    overallExplanationJa: '異なるテナント・サブスクリプション間であっても、Standard Load Balancer 背後にある特定の VM 群だけを他のネットワークへ安全に公開し、VNet 全体へのアクセスを防ぎたい場合は、提供側 (VNet1) に「Azure Private Link サービス」、利用側 (VNet2) に「プライベート エンドポイント」を配置します。',
    overallExplanationEn: 'Deploy an Azure Private Link service behind a Standard Load Balancer in the provider VNet (VNet1) and a Private Endpoint in the consumer VNet (VNet2) for strict service-only cross-tenant isolation.',
    keyPointsJa: [
      'Private Link サービスは異なる Entra テナント間でも特定サービスだけを限定公開できる',
      '提供側 VNet = Azure Private Link サービス、利用側 VNet = プライベート エンドポイント',
    ],
    keyPointsEn: [
      'Private Link service works across different Entra tenants without exposing the full VNet',
      'Provider VNet uses Private Link service; Consumer VNet uses Private Endpoint',
    ],
    referenceTopic: 'Azure Private Link サービスによるテナント間限定公開',
  },
  {
    id: 'pdf-q27',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'アップロード時マルウェア スキャン結果によるサーバーレス自動隔離',
    titleEn: 'Triggering Serverless Quarantine via Azure Event Grid Subscription',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあり、storage1 という名前のストレージ アカウントが含まれています。Sub1 では Microsoft Defender for Storage が有効になっています。Defender for Storage ではアップロード時のマルウェア スキャンが有効になっています。
会社のセキュリティ チームは、すべての悪意のあるファイルが隔離と通知のためにサーバーレス ワークフローで自動的に処理されることを求めています。マルウェア スキャンの結果が自動応答をトリガーするようにする必要があります。ソリューションでは運用上の労力を最小限に抑える必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 containing a storage account named storage1 with Microsoft Defender for Storage and on-upload malware scanning enabled.
Your security team requires all malicious files to be automatically processed by a serverless workflow for quarantine and notification. The malware scan results must trigger the automated response with minimal operational effort.`,
    questionJa: '構成すべきものを1つ選んでください。',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Event Grid のサブスクリプション',
        textEn: 'An Azure Event Grid subscription',
        isCorrect: true,
        explanationJa: '【正解】Defender for Storage が発行するスキャン結果トピックに対して Azure Event Grid サブスクリプションを作成し、悪意あり (Malicious) イベントをサーバーレス ワークフロー (Logic Apps / Functions) に直接配信して自動隔離させます。',
        explanationEn: 'Create an Azure Event Grid subscription filtering for malicious MalwareScanningResult events to directly trigger the serverless quarantine workflow.',
      },
      {
        id: 'B',
        textJa: 'Log Analytics 診断設定',
        textEn: 'Log Analytics diagnostic settings',
        isCorrect: false,
        explanationJa: '【不正解】ログの保存だけではサーバーレス ワークフローは自動起動せず、定期検索や追加の仕組みが必要になります。',
        explanationEn: 'Log Analytics stores logs for querying and does not natively push scan events to trigger serverless remediation directly.',
      },
      {
        id: 'C',
        textJa: 'BLOB のライフサイクル管理ポリシー',
        textEn: 'A lifecycle management policy',
        isCorrect: false,
        explanationJa: '【不正解】経過日数に基づくアクセス層変更や削除を行う機能であり、マルウェア検出を契機とした即時隔離には使えません。',
        explanationEn: 'Lifecycle management policies move or expire blobs based on age, not malware detection events.',
      },
      {
        id: 'D',
        textJa: 'Azure Monitor のアラート ルール',
        textEn: 'An Azure Monitor alert rule',
        isCorrect: false,
        explanationJa: '【不正解】スキャン結果イベントを Event Grid で直接受信できるため、ログ検索アラートを組むよりも Event Grid サブスクリプションの方が即時性と運用負荷の面で優れています。',
        explanationEn: 'Event Grid subscriptions respond directly to scan events with less configuration and latency than Azure Monitor log alert rules.',
      },
    ],
    overallExplanationJa: 'Defender for Storage のアップロード時マルウェア スキャンは、スキャン完了ごとに Event Grid へイベントを発行します。Event Grid サブスクリプションを構成して `data.scanResultType == Malicious` を抽出し、Logic Apps や Functions へ接続するのが最小運用の自動化構成です。',
    overallExplanationEn: 'Configure an Azure Event Grid subscription on the malware scanning topic to route Malicious scan results directly to a serverless Logic App or Function App.',
    keyPointsJa: [
      'Event Grid サブスクリプションで MalwareScanningResult イベントの Malicious をフィルター',
      'ログのポーリングが不要で、運用負荷を最小限にして即時隔離が可能',
    ],
    keyPointsEn: [
      'Event Grid subscriptions filter Malicious scan results in real time',
      'Avoids polling Log Analytics and minimizes operational overhead',
    ],
    referenceTopic: 'Defender for Storage の Event Grid サブスクリプション連携',
  },
  {
    id: 'pdf-q28',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    requiredSelections: 2,
    titleJa: 'Azure SQL DB と SQL MI の監査範囲および KQL 一元検索先の構成',
    titleEn: 'Configuring SQL Database and Managed Instance Auditing for Central KQL Querying',
    scenarioJa: `次のリソースを含む Azure サブスクリプションがあります。
・DB1 というデータベースを含む、Server1 という名前の Azure SQL Database 論理サーバー
・DB2 というデータベースを含む、Instance1 という名前の Azure SQL Managed Instance

データベース監査を構成する必要があります。ソリューションは次の要件を満たす必要があります。
・監査データが、KQL クエリをサポートする場所で一元的に利用できるようにする。
・データベースが追加される際の継続的な管理作業を最小限に抑える。`,
    scenarioEn: `You have an Azure subscription containing:
- An Azure SQL Database logical server named Server1 with a database named DB1
- An Azure SQL Managed Instance named Instance1 with a database named DB2

You need to configure database auditing to meet the following requirements:
- Audit data must be centrally available in a location that supports KQL queries.
- Ongoing administrative effort when new databases are added must be minimized.`,
    questionJa: '監査の適用範囲と監査先について、それぞれ適切なものを1つずつ、計2つ選んでください。',
    questionEn: 'Which two options should you select for auditing scope and destination?',
    options: [
      {
        id: 'A',
        textJa: '監査の適用範囲：各データベースで有効にする。',
        textEn: 'Auditing scope: Enable on each database.',
        isCorrect: false,
        explanationJa: '【不正解】データベース単位では新規データベース追加のたびに監査を手動で設定する必要が生じます。',
        explanationEn: 'Database-level auditing requires manual configuration for every newly added database.',
      },
      {
        id: 'B',
        textJa: '監査の適用範囲：各サーバーまたはインスタンスで有効にする。',
        textEn: 'Auditing scope: Enable on each server or instance.',
        isCorrect: true,
        explanationJa: '【正解】Server1 および Instance1 のサーバー/インスタンス レベルで監査を有効化すると、既存のデータベースだけでなく今後追加されるすべてのデータベースに自動的に監査設定が継承されます。',
        explanationEn: 'Server-level and instance-level auditing automatically applies to existing and future databases with minimal ongoing management.',
      },
      {
        id: 'C',
        textJa: '監査の適用範囲：各データベースのテーブルごとに有効にする。',
        textEn: 'Auditing scope: Enable per table in each database.',
        isCorrect: false,
        explanationJa: '【不正解】運用負荷が極めて高く、新規データベースへの自動適用もできません。',
        explanationEn: 'Per-table configuration increases administrative effort and does not inherit to new databases.',
      },
      {
        id: 'D',
        textJa: '監査先：Azure Event Hubs 名前空間。',
        textEn: 'Destination: Azure Event Hubs namespace.',
        isCorrect: false,
        explanationJa: '【不正解】Event Hubs はストリーム中継基盤であり、直接 KQL クエリを実行できる保存先ではありません。',
        explanationEn: 'Event Hubs streams events to external consumers and does not natively support KQL querying.',
      },
      {
        id: 'E',
        textJa: '監査先：Azure Storage アカウント。',
        textEn: 'Destination: Azure Storage account.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Storage は長期保管には適していますが、そのまま KQL クエリを実行することはできません。',
        explanationEn: 'Azure Storage archives audit files but does not provide a KQL query engine.',
      },
      {
        id: 'F',
        textJa: '監査先：Log Analytics ワークスペース。',
        textEn: 'Destination: Log Analytics workspace.',
        isCorrect: true,
        explanationJa: '【正解】Log Analytics ワークスペースへ診断設定等で監査ログを送信すると、Server1 と Instance1 のログを一元管理し、KQL クエリで即座に検索・分析できます。',
        explanationEn: 'Sending audit logs to a central Log Analytics workspace enables unified KQL querying across both Server1 and Instance1.',
      },
    ],
    overallExplanationJa: '新規データベース追加時の作業を最小限にするにはサーバー/インスタンス単位で監査を有効化し、KQL クエリで一元分析するには監査先として「Log Analytics ワークスペース」を指定します。',
    overallExplanationEn: 'Enable auditing at the server/instance level to inherit automatically to new databases, and send logs to a Log Analytics workspace for centralized KQL querying.',
    keyPointsJa: [
      'サーバー / インスタンス単位の監査 = 将来の DB にも自動継承',
      'KQL クエリによる一元検索先 = Log Analytics ワークスペース',
    ],
    keyPointsEn: [
      'Server/instance auditing covers future databases automatically',
      'Log Analytics workspace provides centralized KQL querying',
    ],
    referenceTopic: 'Azure SQL 監査のサーバー レベル適用と Log Analytics 統合',
  },
  {
    id: 'pdf-q29',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'VM1・VM2 からの storage1 アクセス解決策 (1): ユーザー割り当てマネージド ID',
    titleEn: 'Storage Access Solution Evaluation (1): User-Assigned Managed Identity',
    scenarioJa: `注：同じシナリオと目標に対する解決策の成否を判定する問題セットです。

VM1 と VM2 という名前の2台の仮想マシンを含む Azure サブスクリプションがあります。各仮想マシンでは、システム割り当てマネージド ID が有効になっています。
storage1 という名前の Azure Storage アカウントがあります。storage1 では、すべてのネットワークからのパブリック アクセスが有効になっています。
VM1 と VM2 が storage1 にアクセスできるようにする必要があります。

解決策：ユーザー割り当てマネージド ID を作成し、その ID を各仮想マシンに割り当ててから、各マネージド ID を storage1 のロールに追加します。`,
    scenarioEn: `Note: This question is part of a series evaluating proposed solutions for the same scenario.

You have an Azure subscription containing two VMs named VM1 and VM2, both with system-assigned managed identities enabled.
You have an Azure Storage account named storage1 with public access enabled from all networks.
You need to ensure that VM1 and VM2 can access storage1.

Solution: You create a user-assigned managed identity, assign it to each virtual machine, and add the managed identity to a role on storage1.`,
    questionJa: 'この解決策は目標を達成しますか。次の中から1つ選んでください。',
    questionEn: 'Does this solution meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: true,
        explanationJa: '【正解】ユーザー割り当てマネージド ID を作成して VM1・VM2 に割り当て、その ID に storage1 上のデータ用 RBAC ロールを付与すれば、両 VM から storage1 へアクセスできるため目標を達成します（既存のシステム割り当て ID と併用可能）。',
        explanationEn: 'A user-assigned managed identity can be shared by VM1 and VM2 alongside existing system-assigned identities, and granting it an RBAC role on storage1 enables access.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: false,
        explanationJa: '【不正解】既存のシステム割り当て ID を使うより手順は増えますが、提案された方法でも目標（VM1 と VM2 が storage1 にアクセスすること）は技術的に達成可能です。',
        explanationEn: 'Even though existing system-assigned identities could be used, the proposed user-assigned identity approach still meets the goal.',
      },
    ],
    overallExplanationJa: 'ユーザー割り当てマネージド ID は複数の VM に同時に割り当てることができ、既存のシステム割り当てマネージド ID とも併用可能です。storage1 上の適切なロールが付与され、パブリック アクセスが全ネットワークから許可されているため、目標を達成します。',
    overallExplanationEn: 'User-assigned managed identities can be attached to multiple VMs concurrently and assigned RBAC roles on storage1, meeting the goal.',
    keyPointsJa: [
      'ユーザー割り当てマネージド ID は複数の VM で共有可能',
      'システム割り当て ID が有効でもユーザー割り当て ID を追加・利用できる',
    ],
    keyPointsEn: [
      'User-assigned managed identities can be shared across multiple VMs',
      'Can coexist with system-assigned managed identities',
    ],
    referenceTopic: 'VM マネージド ID によるストレージ アクセス構成評価',
  },
  {
    id: 'pdf-q30',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'VM1・VM2 からの storage1 アクセス解決策 (2): システム割り当て ID への直接割り当て',
    titleEn: 'Storage Access Solution Evaluation (2): Direct Role Assignment to VM Identities',
    scenarioJa: `注：同じシナリオと目標に対する解決策の成否を判定する問題セットです。

VM1 と VM2 という名前の2台の仮想マシンを含む Azure サブスクリプションがあります。各仮想マシンでは、システム割り当てマネージド ID が有効になっています。
storage1 という名前の Azure Storage アカウントがあります。storage1 では、すべてのネットワークからのパブリック アクセスが有効になっています。
VM1 と VM2 が storage1 にアクセスできるようにする必要があります。

解決策：各仮想マシンを storage1 のロールに追加します。`,
    scenarioEn: `Note: This question is part of a series evaluating proposed solutions for the same scenario.

You have an Azure subscription containing two VMs named VM1 and VM2, both with system-assigned managed identities enabled.
You have an Azure Storage account named storage1 with public access enabled from all networks.
You need to ensure that VM1 and VM2 can access storage1.

Solution: You add each virtual machine to a role on storage1.`,
    questionJa: 'この解決策は目標を満たしますか。正しい選択肢を1つ選んでください。',
    questionEn: 'Does this solution meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: true,
        explanationJa: '【正解】各 VM で既にシステム割り当てマネージド ID が有効になっているため、それぞれの VM（のマネージド ID）を storage1 のデータ用ロールに追加すれば、両 VM から storage1 にアクセスできます。',
        explanationEn: 'Because system-assigned managed identities are already enabled on VM1 and VM2, assigning each VM identity a role on storage1 grants them access.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: false,
        explanationJa: '【不正解】システム割り当てマネージド ID に直接 RBAC ロールを付与する方法は標準的な構成であり、目標を満たします。',
        explanationEn: 'Assigning storage RBAC roles directly to each VM’s system-assigned managed identity is a valid solution.',
      },
    ],
    overallExplanationJa: 'VM1 と VM2 にはシステム割り当てマネージド ID がすでに有効化されているため、各 VM のマネージド ID に対して storage1 スコープの適切なロールを割り当てれば、追加の ID やネットワーク変更なしで storage1 にアクセスできます。',
    overallExplanationEn: 'With system-assigned managed identities enabled and public network access open, assigning the appropriate storage1 RBAC role to each VM meets the goal.',
    keyPointsJa: [
      '既に有効なシステム割り当てマネージド ID に直接ロールを割り当てるだけで利用可能',
    ],
    keyPointsEn: [
      'Existing system-assigned managed identities can directly receive RBAC role assignments on storage1',
    ],
    referenceTopic: 'システム割り当てマネージド ID への直接 RBAC ロール割り当て',
  },
  {
    id: 'pdf-q31',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'VM1・VM2 からの storage1 アクセス解決策 (3): セキュリティ グループ経由の割り当て',
    titleEn: 'Storage Access Solution Evaluation (3): Role Assignment via Security Group',
    scenarioJa: `注：同じシナリオと目標に対する解決策の成否を判定する問題セットです。

VM1 と VM2 という名前の2台の仮想マシンを含む Azure サブスクリプションがあります。各仮想マシンでは、システム割り当てマネージド ID が有効になっています。
storage1 という名前の Azure Storage アカウントがあります。storage1 では、すべてのネットワークからのパブリック アクセスが有効になっています。
VM1 と VM2 が storage1 にアクセスできるようにする必要があります。

解決策：各仮想マシンをセキュリティ グループに追加し、そのセキュリティ グループを storage1 のロールに追加します。`,
    scenarioEn: `Note: This question is part of a series evaluating proposed solutions for the same scenario.

You have an Azure subscription containing two VMs named VM1 and VM2, both with system-assigned managed identities enabled.
You have an Azure Storage account named storage1 with public access enabled from all networks.
You need to ensure that VM1 and VM2 can access storage1.

Solution: You add each virtual machine to a security group and add the security group to a role on storage1.`,
    questionJa: 'この解決策は目標を満たしますか。該当するものを1つ選んでください。',
    questionEn: 'Does this solution meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: true,
        explanationJa: '【正解】各 VM のシステム割り当てマネージド ID（サービス プリンシパル）を Microsoft Entra セキュリティ グループに追加し、そのグループに storage1 のロールを割り当てれば、メンバーである両 VM に権限が付与されます。',
        explanationEn: 'Managed identity service principals can be members of a Microsoft Entra security group; assigning the storage1 role to that group grants access to both VMs.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: false,
        explanationJa: '【不正解】Azure RBAC はセキュリティ グループ経由のマネージド ID への権限付与をサポートしています。',
        explanationEn: 'Azure RBAC supports granting permissions to managed identities through security group membership.',
      },
    ],
    overallExplanationJa: 'マネージド ID の実体は Microsoft Entra のサービス プリンシパルであるため、セキュリティ グループのメンバーに追加できます。そのグループに storage1 のデータ用ロールを割り当てれば、VM1・VM2 の両方がアクセス権を得られます。',
    overallExplanationEn: 'Managed identities are service principals in Microsoft Entra ID and can be added to security groups to inherit RBAC role assignments on storage1.',
    keyPointsJa: [
      'マネージド ID は Entra セキュリティ グループのメンバーに追加して一括で RBAC ロールを付与できる',
    ],
    keyPointsEn: [
      'Managed identities can inherit Azure RBAC roles via Microsoft Entra security groups',
    ],
    referenceTopic: 'セキュリティ グループによるマネージド ID の権限管理',
  },
  {
    id: 'pdf-q32',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'VM1・VM2 からの storage1 アクセス解決策 (4): プライベート エンドポイント作成のみ',
    titleEn: 'Storage Access Solution Evaluation (4): Creating Only a Private Endpoint',
    scenarioJa: `注：同じシナリオと目標に対する解決策の成否を判定する問題セットです。

VM1 と VM2 という名前の2台の仮想マシンを含む Azure サブスクリプションがあります。各仮想マシンでは、システム割り当てマネージド ID が有効になっています。
storage1 という名前の Azure Storage アカウントがあります。storage1 では、すべてのネットワークからのパブリック アクセスが有効になっています。
VM1 と VM2 が storage1 にアクセスできるようにする必要があります。

解決策：storage1 にプライベート エンドポイントを作成します。`,
    scenarioEn: `Note: This question is part of a series evaluating proposed solutions for the same scenario.

You have an Azure subscription containing two VMs named VM1 and VM2, both with system-assigned managed identities enabled.
You have an Azure Storage account named storage1 with public access enabled from all networks.
You need to ensure that VM1 and VM2 can access storage1.

Solution: You create a private endpoint for storage1.`,
    questionJa: 'この解決策は目標を満たしますか。該当するものを1つ選んでください。',
    questionEn: 'Does this solution meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントを作成しても、VM1 と VM2 のマネージド ID に対するストレージ データへの認可（Azure RBAC ロール割り当て）は行われません。',
        explanationEn: 'A private endpoint only provides private network connectivity and does not grant RBAC permissions to access storage data.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: true,
        explanationJa: '【正解】パブリック アクセスは既に許可されており不足しているのは認証・認可（RBAC ロール割り当て）です。プライベート エンドポイントを作成するだけではデータ操作権限が付与されないため目標を満たしません。',
        explanationEn: 'Creating a private endpoint does not grant VM1 or VM2 authorization (Azure RBAC roles) to access storage1 data.',
      },
    ],
    overallExplanationJa: 'プライベート エンドポイントはネットワーク経路を提供するだけで、storage1 のデータにアクセスするための RBAC ロール割り当てを代替しません。各 VM のマネージド ID にロールを割り当てる必要があるため「いいえ」が正解です。',
    overallExplanationEn: 'Private endpoints provide private network routing, not data-plane authorization. Without assigning storage RBAC roles to VM1 and VM2, they still cannot access storage1.',
    keyPointsJa: [
      'プライベート エンドポイントの作成だけでは RBAC アクセス許可は付与されない',
      'ネットワーク接続性と ID によるデータ認可を区別する',
    ],
    keyPointsEn: [
      'Private endpoints do not grant data-plane RBAC authorization',
      'Distinguish network reachability from identity permissions',
    ],
    referenceTopic: 'プライベート エンドポイントと Azure RBAC の役割分離',
  },
  {
    id: 'pdf-q33',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Fabrikam: ExpressRoute 経由でオンプレミス通信する関数アプリ プランの選定',
    titleEn: 'Fabrikam: Selecting Function App Hosting Plans Supporting VNet Integration & ExpressRoute',
    scenarioJa: `${FABRIKAM_CASE_STUDY_JA}

技術要件（関数アプリからオンプレミス ネットワークへのすべての送信トラフィックは、ExpressRoute 回線を使用する必要がある）を満たすように関数アプリを実装する必要があります。`,
    scenarioEn: `${FABRIKAM_CASE_STUDY_EN}

You need to implement the Function Apps to meet the technical requirement that all outbound traffic from Function Apps to the on-premises network must use ExpressRoute circuits.`,
    questionJa: '実装に含めるべきアプリの組み合わせを1つ選んでください。',
    questionEn: 'Which combination of Function Apps should you include in the implementation?',
    options: [
      {
        id: 'A',
        textJa: 'Fa1 と Fa2 のみ',
        textEn: 'Fa1 and Fa2 only',
        isCorrect: false,
        explanationJa: '【不正解】Fa2 の従来の Consumption プランは仮想ネットワーク統合 (VNet Integration) をサポートしておらず、送信トラフィックを ExpressRoute 経由に流せません。',
        explanationEn: 'Fa2 (standard Consumption plan) does not support VNet integration required to route outbound traffic over ExpressRoute.',
      },
      {
        id: 'B',
        textJa: 'Fa2 と Fa3 のみ',
        textEn: 'Fa2 and Fa3 only',
        isCorrect: false,
        explanationJa: '【不正解】Fa2 は VNet 統合非対応であり、逆に対応する Fa1 (Flex Consumption) が漏れています。',
        explanationEn: 'Fa2 lacks VNet integration, while Fa1 (Flex Consumption) supports it and should be included.',
      },
      {
        id: 'C',
        textJa: 'Fa1 と Fa3 のみ',
        textEn: 'Fa1 and Fa3 only',
        isCorrect: true,
        explanationJa: '【正解】Azure Functions の仮想ネットワーク統合をサポートしているのは Flex Consumption (Fa1) と Dedicated / App Service プラン (Fa3) です。VNet に統合して ExpressRoute プライベート ピアリング経由でオンプレミスへ送信通信できます。',
        explanationEn: 'Flex Consumption (Fa1) and Dedicated (Fa3) support virtual network integration to route outbound traffic through ExpressRoute, whereas standard Consumption (Fa2) does not.',
      },
      {
        id: 'D',
        textJa: 'Fa1、Fa2、Fa3',
        textEn: 'Fa1, Fa2, and Fa3',
        isCorrect: false,
        explanationJa: '【不正解】Fa2 (Consumption) は VNet 統合非対応のため、すべての送信トラフィックを ExpressRoute に送る要件を満たせません。',
        explanationEn: 'Fa2 (Consumption) cannot integrate with a VNet to route traffic via ExpressRoute.',
      },
    ],
    overallExplanationJa: 'Azure Functions からオンプレミス ネットワークへ ExpressRoute 経由で送信通信させるには、仮想ネットワーク統合 (VNet Integration) に対応したホスティング プランが必要です。Flex Consumption (Fa1) と Dedicated (Fa3) は VNet 統合に対応していますが、従来の Consumption プラン (Fa2) は非対応です。',
    overallExplanationEn: 'Routing outbound Azure Functions traffic over ExpressRoute requires Virtual Network Integration, which is supported by Flex Consumption (Fa1) and Dedicated (Fa3), but not standard Consumption (Fa2).',
    keyPointsJa: [
      'Flex Consumption と Dedicated (および Premium) は VNet 統合に対応',
      '従来の Consumption プランは VNet 統合非対応',
    ],
    keyPointsEn: [
      'Flex Consumption and Dedicated plans support VNet integration',
      'Standard Consumption plan does not support VNet integration',
    ],
    referenceTopic: 'Azure Functions ホスティング プランの VNet 統合対応',
  },
  {
    id: 'pdf-q34',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Contoso: AKS1 上のアプリケーションを保護する Defender for Cloud プラン',
    titleEn: 'Contoso: Selecting Defender for Cloud Plan to Protect AKS1 Applications',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

AKS1 でホストされているアプリケーションを保護する必要があります。ソリューションは技術要件（Microsoft Defender for Cloud を使用して AKS1 を保護する）を満たす必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to protect the applications hosted on AKS1. The solution must meet the technical requirement to protect AKS1 using Microsoft Defender for Cloud.`,
    questionJa: '有効にすべき Microsoft Defender for Cloud のプランを1つ選んでください。',
    questionEn: 'Which Microsoft Defender for Cloud plan should you enable?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Servers',
        textEn: 'Microsoft Defender for Servers',
        isCorrect: false,
        explanationJa: '【不正解】VM/OS レベルの保護プランであり、Kubernetes クラスターやコンテナー ワークロード固有の脆弱性評価・ランタイム脅威検出を行いません。',
        explanationEn: 'Defender for Servers protects VMs/OSs rather than Kubernetes control planes and container workloads.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for App Service',
        textEn: 'Microsoft Defender for App Service',
        isCorrect: false,
        explanationJa: '【不正解】Azure App Service 向けのプランであり、AKS1 (Kubernetes) には対応していません。',
        explanationEn: 'Defender for App Service only protects Azure App Service web apps, not AKS clusters.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Defender for Containers',
        textEn: 'Microsoft Defender for Containers',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Containers は、AKS1 のような Kubernetes クラスターとコンテナー イメージ、実行時ワークロードの脅威を包括的に保護します。',
        explanationEn: 'Microsoft Defender for Containers protects AKS clusters, container images, and runtime container workloads.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Resource Manager',
        textEn: 'Microsoft Defender for Resource Manager',
        isCorrect: false,
        explanationJa: '【不正解】ARM 管理プレーン操作の監視用であり、AKS アプリケーションの保護プランではありません。',
        explanationEn: 'Defender for Resource Manager monitors ARM control plane operations, not AKS workloads.',
      },
      {
        id: 'E',
        textJa: 'Microsoft Defender for Storage',
        textEn: 'Microsoft Defender for Storage',
        isCorrect: false,
        explanationJa: '【不正解】ストレージ アカウント用の脅威検出プランです。',
        explanationEn: 'Defender for Storage protects Azure Storage accounts, not AKS clusters.',
      },
    ],
    overallExplanationJa: 'Azure Kubernetes Service (AKS1) とその上で稼働するコンテナー アプリケーションを Microsoft Defender for Cloud で保護するには、「Microsoft Defender for Containers」プランを有効にします。',
    overallExplanationEn: 'Enable Microsoft Defender for Containers to protect AKS1, evaluate Kubernetes posture/images, and detect container runtime threats.',
    keyPointsJa: [
      'AKS クラスターとコンテナー ワークロードの保護 = Microsoft Defender for Containers',
    ],
    keyPointsEn: [
      'Microsoft Defender for Containers secures AKS clusters and containerized workloads',
    ],
    referenceTopic: 'Microsoft Defender for Containers プラン',
  },
  {
    id: 'pdf-q35',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Contoso: オンプレミス Server1 に対するファイル整合性監視 (FIM) の構成',
    titleEn: 'Contoso: Configuring File Integrity Monitoring on On-Premises Server1',
    scenarioJa: `${CONTOSO_CASE_STUDY_JA}

Server1（オンプレミスの Windows Server）が技術要件（ファイル整合性監視を使用して Server1 を保護する）を満たすように構成する必要があります。`,
    scenarioEn: `${CONTOSO_CASE_STUDY_EN}

You need to configure on-premises Server1 to meet the technical requirement of protecting Server1 with File Integrity Monitoring (FIM).`,
    questionJa: 'Server1 にインストールするものと Sub1 にデプロイするものの組み合わせとして正しいものを1つ選んでください。',
    questionEn: 'Which combination identifies what to install on Server1 and what to deploy to Sub1?',
    options: [
      {
        id: 'A',
        textJa: 'Server1 にインストール：The Azure Monitor Agent／Sub1 にデプロイ：A Log Analytics workspace',
        textEn: 'Install on Server1: Azure Monitor Agent / Deploy to Sub1: Log Analytics workspace',
        isCorrect: false,
        explanationJa: '【不正解】オンプレミスの Server1 を Azure 管理対象として Defender for Servers で統合管理するには Azure Arc (Azure Connected Machine agent) が必要です。',
        explanationEn: 'On-premises Server1 must first be onboarded to Azure Arc using the Azure Connected Machine agent.',
      },
      {
        id: 'B',
        textJa: 'Server1 にインストール：The Azure Connected Machine agent／Sub1 にデプロイ：Defender for Cloud workflow automation',
        textEn: 'Install on Server1: Azure Connected Machine agent / Deploy to Sub1: Defender for Cloud workflow automation',
        isCorrect: false,
        explanationJa: '【不正解】ファイル整合性監視 (FIM) で収集した変更情報を保存するための保存先として Log Analytics ワークスペースが必要です。',
        explanationEn: 'Workflow automation triggers alerts/Logic Apps; FIM requires a Log Analytics workspace to store change tracking data.',
      },
      {
        id: 'C',
        textJa: 'Server1 にインストール：A Microsoft Defender for Endpoint onboarding package／Sub1 にデプロイ：A Log Analytics workspace',
        textEn: 'Install on Server1: Microsoft Defender for Endpoint onboarding package / Deploy to Sub1: Log Analytics workspace',
        isCorrect: false,
        explanationJa: '【不正解】直接のオンボードだけでは Server1 は Azure Arc に登録されず、Defender for Cloud の FIM 管理対象になりません。',
        explanationEn: 'Onboarding directly to MDE does not register Server1 as an Azure Arc-enabled server in Defender for Cloud.',
      },
      {
        id: 'D',
        textJa: 'Server1 にインストール：The Azure Connected Machine agent／Sub1 にデプロイ：A Log Analytics workspace',
        textEn: 'Install on Server1: Azure Connected Machine agent / Deploy to Sub1: Log Analytics workspace',
        isCorrect: true,
        explanationJa: '【正解】オンプレミスの Server1 に Azure Connected Machine agent を導入して Azure Arc 対応サーバーとして Sub1 に登録し、変更データを保存する Log Analytics ワークスペースを Sub1 にデプロイして Defender for Servers P2 の FIM を有効化します。',
        explanationEn: 'Install the Azure Connected Machine agent on Server1 to onboard it via Azure Arc, and deploy a Log Analytics workspace in Sub1 to store FIM change data.',
      },
      {
        id: 'E',
        textJa: 'Server1 にインストール：The Azure File Sync agent／Sub1 にデプロイ：Azure File Sync',
        textEn: 'Install on Server1: Azure File Sync agent / Deploy to Sub1: Azure File Sync',
        isCorrect: false,
        explanationJa: '【不正解】Azure File Sync はファイル共有の同期サービスであり、セキュリティ監視の FIM とは無関係です。',
        explanationEn: 'Azure File Sync synchronizes files and does not provide File Integrity Monitoring.',
      },
      {
        id: 'F',
        textJa: 'Server1 にインストール：A Microsoft Defender for Endpoint onboarding package／Sub1 にデプロイ：Defender for Cloud workflow automation',
        textEn: 'Install on Server1: MDE onboarding package / Deploy to Sub1: Defender for Cloud workflow automation',
        isCorrect: false,
        explanationJa: '【不正解】Azure Arc 接続と Log Analytics ワークスペースの両方が欠けています。',
        explanationEn: 'Both Azure Arc onboarding and the Log Analytics workspace are missing.',
      },
    ],
    overallExplanationJa: 'オンプレミスの Windows Server (Server1) を Defender for Servers のファイル整合性監視 (FIM) で保護するには、まず Azure Connected Machine agent をインストールして Azure Arc 対応サーバーとして登録し、変更データの格納先となる Log Analytics ワークスペースを Sub1 に用意します。',
    overallExplanationEn: 'Onboard on-premises Server1 to Azure Arc using the Azure Connected Machine agent and deploy a Log Analytics workspace in Sub1 for File Integrity Monitoring data.',
    keyPointsJa: [
      'オンプレミス サーバーを Defender for Cloud で管理 = Azure Connected Machine agent (Azure Arc)',
      'FIM の変更履歴の保存先 = Log Analytics ワークスペース',
    ],
    keyPointsEn: [
      'Use Azure Connected Machine agent to register on-prem Server1 with Azure Arc',
      'FIM requires a Log Analytics workspace to store change logs',
    ],
    referenceTopic: 'Azure Arc 対応サーバーと Defender for Servers ファイル整合性監視 (FIM)',
  },
  {
    id: 'pdf-q36',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Logic Apps 要求トリガーを OAuth のみに限定する低コスト構成',
    titleEn: 'Restricting Logic Apps Request Trigger to OAuth Only at Minimal Cost',
    scenarioJa: `Azure Logic Apps の従量課金 (Consumption) ワークフローがあり、要求 (Request) トリガーを使用しています。要求 (Request) トリガーでは、サポートされているすべての認証方式が有効になっています。
エンドポイントが OAuth ベースの要求のみを受け付けるようにする必要があります。ソリューションでは、コストを最小限に抑える必要があります。`,
    scenarioEn: `You have a Consumption-tier Azure Logic Apps workflow that uses a Request trigger. All supported authentication methods are currently enabled on the Request trigger.
You need to ensure that the endpoint accepts only OAuth-based requests while minimizing costs.`,
    questionJa: '何をすべきですか。1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '要求トリガーの認証設定で OAuth 2.0 認可ポリシーのみを追加して使用する。',
        textEn: 'Add an OAuth 2.0 authorization policy on the Logic App trigger settings.',
        isCorrect: false,
        explanationJa: '【不正解】既にサポートされているすべての認証方式 (OAuth を含む) が有効になっているため、単に OAuth を使うだけでは SAS URL からの呼び出しを拒否できません。',
        explanationEn: 'OAuth is already enabled; simply using OAuth does not stop callers from using SAS URLs.',
      },
      {
        id: 'B',
        textJa: '要求 (Request) トリガーで安全な入出力 (Secure Inputs/Outputs) を有効化する。',
        textEn: 'Enable Secure Inputs and Secure Outputs settings on the Request trigger.',
        isCorrect: false,
        explanationJa: '【不正解】実行履歴から機密データを隠す機能であり、呼び出し時の認証方式を制限するものではありません。',
        explanationEn: 'Secure Inputs/Outputs obfuscate run history logs and do not restrict trigger authentication methods.',
      },
      {
        id: 'C',
        textJa: '要求 (Request) トリガーの共有アクセス署名 (SAS) 認証を無効にする。',
        textEn: 'Disable Shared Access Signature (SAS) authentication on the Request trigger.',
        isCorrect: true,
        explanationJa: '【正解】すべての認証方式が有効な状態から OAuth のみに限定するには、追加サービスを導入せずにトリガー側の SAS 認証を無効化 (Disable) するのが最小コストで確実です。',
        explanationEn: 'Disabling SAS authentication directly on the Request trigger leaves only OAuth active with zero additional service cost.',
      },
      {
        id: 'D',
        textJa: 'API Management を前段に配置し、OAuth トークン検証を委任して構成する。',
        textEn: 'Deploy an Azure API Management gateway in front of the workflow trigger.',
        isCorrect: false,
        explanationJa: '【不正解】APIM の追加デプロイはコストが増大するため、「コストを最小限に抑える」要件に合いません。',
        explanationEn: 'Deploying Azure API Management adds unnecessary cost when trigger-level SAS disabling suffices.',
      },
    ],
    overallExplanationJa: 'Logic Apps の Request トリガーは既定で SAS クエリ パラメーター認証を受け付けます。既に OAuth ポリシーが有効な環境で OAuth 要求のみに制限するには、追加コストのかかる APIM 等を置かず、Request トリガーの SAS 認証を無効にします。',
    overallExplanationEn: 'Disable SAS authentication directly on the Logic Apps Request trigger to enforce OAuth-only requests without incurring extra infrastructure costs.',
    keyPointsJa: [
      'OAuth が既に有効な状態でも SAS 認証を明示的に無効化しないと SAS 呼び出しが残る',
      'APIM 追加よりトリガー設定での SAS 無効化が最小コスト',
    ],
    keyPointsEn: [
      'Explicitly disable SAS authentication on the Request trigger to enforce OAuth-only access',
      'Trigger configuration incurs no additional cost compared to deploying APIM',
    ],
    referenceTopic: 'Azure Logic Apps Request トリガーの SAS 認証無効化と OAuth 限定',
  },
  {
    id: 'pdf-q37',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '応用 (Hard)',
    titleJa: 'サービス プリンシパルの侵害に伴うラテラル ムーブメント影響範囲の評価',
    titleEn: 'Assessing Lateral Movement Impact of a Compromised Service Principal',
    scenarioJa: `Microsoft Entra のサービス プリンシパルを使用して認証する Microsoft Security Copilot エージェントがあります。エージェントの Microsoft Entra サービス プリンシパルによる異常な OAuth 認証をきっかけに、Microsoft Defender のアラートを受信しました。
エージェントの ID の影響を評価し、その ID がラテラル ムーブメントに悪用された場合に影響を受けるリソースを特定する必要があります。このソリューションでは、管理作業を最小限に抑える必要があります。`,
    scenarioEn: `You have a Microsoft Security Copilot agent that authenticates using a Microsoft Entra service principal. You receive a Microsoft Defender alert triggered by anomalous OAuth authentication from the agent's service principal.
You need to evaluate the blast radius of the agent's identity and identify which resources would be affected if it is exploited for lateral movement, while minimizing administrative effort.`,
    questionJa: '行うべきことを1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '高度なハンティングで IdentityLogonEvents からサインインを一覧表示する。',
        textEn: 'In Advanced hunting, query IdentityLogonEvents for the identity sign-ins.',
        isCorrect: false,
        explanationJa: '【不正解】過去のサインイン履歴は分かりますが、権限関係から今後ラテラル ムーブメントで到達し得る影響範囲は把握できません。',
        explanationEn: 'IdentityLogonEvents shows past sign-in activity, not potential lateral movement paths across resource permissions.',
      },
      {
        id: 'B',
        textJa: '攻撃パス (Attack paths) から、その ID を選択し、影響範囲を確認する。',
        textEn: 'In Attack paths, select the identity and review its blast radius / impact.',
        isCorrect: true,
        explanationJa: '【正解】Attack paths (攻撃パス) で対象のサービス プリンシパル ID を確認すると、その ID の権限やリソース間のつながりからラテラル ムーブメントで到達可能な影響範囲を最小限の作業で可視化できます。',
        explanationEn: 'Attack paths visualize the blast radius and downstream resources reachable via lateral movement from that identity with minimal effort.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Purview DSPM の AI の可観測性でアクティビティを確認する。',
        textEn: 'In Microsoft Purview DSPM AI Observability, review the agent activity.',
        isCorrect: false,
        explanationJa: '【不正解】DSPM for AI はデータの利用状況や機密データ リスクの把握用であり、ID のラテラル ムーブメント経路は分析しません。',
        explanationEn: 'Purview DSPM AI Observability focuses on data risk and usage, not identity lateral movement paths.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Purview Audit から対象 ID のロール割り当て履歴を照会する。',
        textEn: 'In Microsoft Purview Audit, query audit logs for the ID role assignments.',
        isCorrect: false,
        explanationJa: '【不正解】過去の監査ログから自力で接続関係や潜在的影響を組み立てるのは手間が大きく、管理作業最小化の要件に反します。',
        explanationEn: 'Manually reconstructing permissions from audit logs requires significant effort and misses graph-based blast radius.',
      },
      {
        id: 'E',
        textJa: 'インシデント (Incidents) から OAuth イベント関連のインシデントを確認する。',
        textEn: 'In Incidents, review OAuth incidents reported by Defender for Cloud Apps.',
        isCorrect: false,
        explanationJa: '【不正解】すでに検出されたイベントの確認にとどまり、潜在的なラテラル ムーブメント先の特定にはなりません。',
        explanationEn: 'Incidents show detected alerts rather than mapping all downstream resources exposed to lateral movement.',
      },
    ],
    overallExplanationJa: '侵害が疑われるサービス プリンシパル等の ID が「ラテラル ムーブメントでどこまで到達し得るか（影響範囲 / Blast radius）」を最小限の作業で評価するには、Defender の「攻撃パス (Attack paths)」機能を使用して権限グラフを確認します。',
    overallExplanationEn: 'Use Attack paths in Microsoft Defender to immediately visualize the blast radius and potential lateral movement targets of a compromised service principal.',
    keyPointsJa: [
      '「潜在的なラテラル ムーブメント先の特定・影響範囲評価」= 攻撃パス (Attack paths)',
      '過去の実行履歴 (Hunting/Audit) と、権限グラフに基づく到達可能性 (Attack paths) を区別する',
    ],
    keyPointsEn: [
      'Attack paths reveal potential lateral movement targets and blast radius',
      'Distinguish historical logs from permission-graph reachability',
    ],
    referenceTopic: 'Defender 攻撃パス (Attack paths) による ID 影響範囲評価',
  },
  {
    id: 'pdf-q38',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Arc 登録直後のオンプレミス サーバー自動 EDR 保護',
    titleEn: 'Auto-Onboarding Azure Arc Servers to Defender for Endpoint via Defender for Servers',
    scenarioJa: `複数の仮想マシンを含む Sub1 という名前の Azure サブスクリプションがあります。Microsoft Defender for Endpoint にオンボードされたデバイスを含む Microsoft 365 E5 サブスクリプションがあります。複数のサーバーを含むオンプレミスのデータセンターがあります。既存および将来のオンプレミス サーバーをすべて Azure Arc にオンボードする予定です。
サーバーのオンボード直後に、Azure Arc 対応サーバーが Microsoft 365 のデバイスと同じセキュリティ機能によって保護されるようにする必要があります。このソリューションでは管理作業を最小限に抑える必要があります。`,
    scenarioEn: `You have an Azure subscription named Sub1 containing multiple VMs, and a Microsoft 365 E5 subscription with devices onboarded to Microsoft Defender for Endpoint. You plan to onboard all existing and future on-premises servers to Azure Arc.
Immediately after onboarding, Azure Arc-enabled servers must be protected with the same Defender for Endpoint capabilities with minimal administrative effort.`,
    questionJa: '何を行うべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'オンプレミスのグループ ポリシー (GPO) を使用して、すべての既存および新規サーバーを Defender for Endpoint にオンボードする。',
        textEn: 'Use an on-premises Group Policy Object (GPO) to onboard existing and future servers to MDE.',
        isCorrect: false,
        explanationJa: '【不正解】GPO 配布は別途オンプレミス側の構成管理が必要となり、Azure Arc 登録と連動した自動保護より管理作業が増えます。',
        explanationEn: 'Group Policy requires separate on-premises GPO management instead of automatic provisioning upon Arc onboarding.',
      },
      {
        id: 'B',
        textJa: 'オンプレミス サーバーごとにローカル インストール スクリプトを手動で実行して Microsoft Defender for Endpoint にオンボードする。',
        textEn: 'Run the local onboarding installation script individually on each server for MDE protection.',
        isCorrect: false,
        explanationJa: '【不正解】サーバーごとの手動・個別スクリプト実行は将来の追加サーバーに対して管理負担が大きくなります。',
        explanationEn: 'Local scripts require manual or per-server deployment for future servers.',
      },
      {
        id: 'C',
        textJa: 'Sub1 について、Microsoft Defender for Cloud で Microsoft Defender for Servers プランを有効にする。',
        textEn: 'Enable the Microsoft Defender for Servers plan in Microsoft Defender for Cloud for Sub1.',
        isCorrect: true,
        explanationJa: '【正解】Sub1 で Defender for Servers プラン（と自動プロビジョニング / MDE 統合）を有効にすると、Sub1 に登録された既存・将来の Azure Arc 対応サーバーすべてに自動で Microsoft Defender for Endpoint が展開されます。',
        explanationEn: 'Enabling Microsoft Defender for Servers on Sub1 (with MDE integration) automatically onboards existing and future Azure Arc servers to Defender for Endpoint.',
      },
      {
        id: 'D',
        textJa: 'Sub1 スコープに対して Azure Arc の自動エージェント展開を強制する新規の Azure Policy 割り当てを構成する。',
        textEn: 'Configure a new Azure Policy assignment scoped to Sub1 to audit connected server agents.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Policy を割り当てるだけでは Defender for Servers プランの保護ライセンスと自動 EDR 統合は有効になりません。',
        explanationEn: 'Azure Policy alone does not enable the Defender for Servers plan or MDE integration.',
      },
    ],
    overallExplanationJa: 'Azure Arc にオンボードされたオンプレミス サーバーに対して最小の管理作業で Microsoft Defender for Endpoint を自動展開するには、登録先のサブスクリプション (Sub1) で「Microsoft Defender for Servers」プラン（および統合・自動プロビジョニング）を有効にします。',
    overallExplanationEn: 'Enable Microsoft Defender for Servers on Sub1 to automatically deploy Microsoft Defender for Endpoint to all existing and future Azure Arc-enabled servers.',
    keyPointsJa: [
      'Defender for Servers は Azure VM だけでなく同一サブスクリプション内の Azure Arc サーバーにも適用される',
      'Defender for Endpoint 統合により Arc 登録直後から自動オンボードが行われる',
    ],
    keyPointsEn: [
      'Defender for Servers automatically covers Azure Arc-enabled servers in the subscription',
      'Built-in MDE integration minimizes administrative onboarding effort',
    ],
    referenceTopic: 'Defender for Servers による Azure Arc サーバー自動 EDR 展開',
  },
  {
    id: 'pdf-q39',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    requiredSelections: 2,
    titleJa: 'Azure Container Registry で信頼された署名付きイメージを作成する最小特権ロール',
    titleEn: 'Least-Privilege Roles for Creating Trusted Images in Azure Container Registry',
    scenarioJa: `User1 というユーザーと ContReg1 という Azure Container Registry を含む Azure サブスクリプションがあります。
ContReg1 のコンテンツの信頼 (Content Trust) を有効にします。
User1 が ContReg1 で信頼されたイメージを作成できるようにする必要があります。ソリューションでは最小特権の原則を使用する必要があります。`,
    scenarioEn: `You have an Azure subscription containing a user named User1 and an Azure Container Registry named ContReg1.
You enable content trust on ContReg1.
You need to allow User1 to create trusted images in ContReg1 following the principle of least privilege.`,
    questionJa: 'User1 に割り当てる必要があるロールを2つ選んでください。',
    questionEn: 'Which two roles should you assign to User1?',
    options: [
      {
        id: 'A',
        textJa: 'AcrQuarantineWriter',
        textEn: 'AcrQuarantineWriter',
        isCorrect: false,
        explanationJa: '【不正解】イメージの検疫状態を操作するロールであり、信頼されたイメージのプッシュや署名には使いません。',
        explanationEn: 'AcrQuarantineWriter manages image quarantine status, not image signing or pushing.',
      },
      {
        id: 'B',
        textJa: 'Contributor',
        textEn: 'Contributor',
        isCorrect: false,
        explanationJa: '【不正解】レジストリ全体の構成変更・削除まで許可するため、最小特権の原則に反します。',
        explanationEn: 'Contributor grants broad resource management rights and violates least privilege.',
      },
      {
        id: 'C',
        textJa: 'AcrQuarantineReader',
        textEn: 'AcrQuarantineReader',
        isCorrect: false,
        explanationJa: '【不正解】検疫済みイメージの参照用ロールであり、作成・署名はできません。',
        explanationEn: 'AcrQuarantineReader only reads quarantined images.',
      },
      {
        id: 'D',
        textJa: 'AcrPush',
        textEn: 'AcrPush',
        isCorrect: true,
        explanationJa: '【正解】AcrPush はレジストリへイメージをプッシュ（およびプル）するために必要な最小特権ロールです。',
        explanationEn: 'AcrPush permits pushing (and pulling) container images to ContReg1.',
      },
      {
        id: 'E',
        textJa: 'AcrImageSigner',
        textEn: 'AcrImageSigner',
        isCorrect: true,
        explanationJa: '【正解】コンテンツの信頼 (Content Trust) が有効なレジストリで信頼されたイメージ署名を発行するには AcrImageSigner ロールが必須です。',
        explanationEn: 'AcrImageSigner grants permission to sign images for Content Trust in ContReg1.',
      },
    ],
    overallExplanationJa: 'コンテンツの信頼 (Docker Content Trust) が有効な Azure Container Registry に信頼されたイメージを作成・登録するには、イメージをプッシュする権限 (AcrPush) と署名を発行する権限 (AcrImageSigner) の両方が必要です。',
    overallExplanationEn: 'Creating trusted (signed) images in ACR with Content Trust enabled requires both AcrPush (to push images) and AcrImageSigner (to sign images) for least privilege.',
    keyPointsJa: [
      'AcrPush = イメージのプッシュ/プル',
      'AcrImageSigner = コンテンツの信頼におけるイメージ署名の発行',
    ],
    keyPointsEn: [
      'AcrPush allows pushing images to ACR',
      'AcrImageSigner allows signing images when Content Trust is enabled',
    ],
    referenceTopic: 'Azure Container Registry のコンテンツの信頼と RBAC ロール',
  },
  {
    id: 'pdf-q40',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '応用 (Hard)',
    titleJa: 'Windows Server 2019 で他社 AV と Defender for Endpoint EDR を競合なく併用',
    titleEn: 'Running MDE EDR in Passive Mode Alongside Third-Party AV on Windows Server 2019',
    scenarioJa: `次のサーバーを含むハイブリッド環境があります。
・Windows Server 2019 を実行する Azure 仮想マシン 50 台
・Windows Server 2019 を実行するオンプレミスの物理サーバー 20 台

すべてのサーバーでは、段階的なセキュリティの展開中も有効な状態を維持する必要があるサードパーティ製ウイルス対策ソリューションを使用しています。
一元化された展開方法を使用して、すべてのサーバーを Microsoft Defender for Endpoint にオンボードする必要があります。ソリューションは次の要件を満たす必要があります。
・エンドポイントでの検出と対応 (EDR) 機能を有効にする必要があります。
・オンボード中にウイルス対策ソフトウェアの競合を防ぐ必要があります。`,
    scenarioEn: `You have a hybrid environment containing:
- 50 Azure VMs running Windows Server 2019
- 20 on-premises physical servers running Windows Server 2019

All servers run a third-party antivirus solution that must remain active during a phased rollout. You need to onboard all servers to Microsoft Defender for Endpoint centrally while enabling EDR and preventing antivirus conflicts.`,
    questionJa: 'サーバーで何を行うべきか、1つ選んでください。',
    questionEn: 'What should you do on the servers?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Endpoint サービスを Disabled に変更する。',
        textEn: 'Set the Defender for Endpoint service status to Disabled.',
        isCorrect: false,
        explanationJa: '【不正解】サービスを無効化すると要件である EDR 機能自体が動作しなくなります。',
        explanationEn: 'Disabling the MDE service stops EDR telemetry and detection entirely.',
      },
      {
        id: 'B',
        textJa: 'Set-MpPreference で Defender リアルタイム保護を無効にする。',
        textEn: 'Disable Defender real-time protection with Set-MpPreference.',
        isCorrect: false,
        explanationJa: '【不正解】Windows Server 2019 で他社製 AV と共存させてパッシブ モードを強制するには、オンボード前にレジストリ値 ForceDefenderPassiveMode を設定する必要があります。',
        explanationEn: 'On Windows Server 2019, setting passive mode cleanly alongside third-party AV before onboarding requires configuring ForceDefenderPassiveMode.',
      },
      {
        id: 'C',
        textJa: 'ForceDefenderPassiveMode レジストリ値を構成する。',
        textEn: 'Configure the ForceDefenderPassiveMode registry value.',
        isCorrect: true,
        explanationJa: '【正解】Windows Server 2019 では他社製 AV があっても自動的にはパッシブ モードにならないため、HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Advanced Threat Protection の ForceDefenderPassiveMode を 1 に構成してからオンボードすることで、競合を防ぎつつ EDR を有効化できます。',
        explanationEn: 'On Windows Server 2019, Defender Antivirus does not automatically enter passive mode; setting ForceDefenderPassiveMode = 1 before onboarding prevents AV conflicts while enabling EDR.',
      },
      {
        id: 'D',
        textJa: 'すべてのサーバーに対してブロック モードの EDR 機能を有効にする。',
        textEn: 'Turn on EDR in block mode across the target servers.',
        isCorrect: false,
        explanationJa: '【不正解】EDR ブロック モードはパッシブ モード動作時に悪意ある項目を修復する追加機能であり、オンボード時の AV 競合防止設定ではありません。',
        explanationEn: 'EDR in block mode is a remediation enhancement for passive mode, not the setting that places Defender Antivirus into passive mode.',
      },
    ],
    overallExplanationJa: 'Windows Server 2019 にサードパーティ製ウイルス対策が導入されている環境で Defender for Endpoint の EDR を併用する場合、オンボード前に GPO 等でレジストリ `HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Advanced Threat Protection\\ForceDefenderPassiveMode` (DWORD = 1) を構成し、Microsoft Defender Antivirus をパッシブ モードに設定します。',
    overallExplanationEn: 'On Windows Server 2019 with third-party AV, set the ForceDefenderPassiveMode registry value to 1 before onboarding to force Defender Antivirus into passive mode and run MDE EDR without conflicts.',
    keyPointsJa: [
      'Windows Server 2019 では他社 AV 導入時でも自動でパッシブ モードにならない',
      'ForceDefenderPassiveMode = 1 をオンボード前に配布して AV 競合を防止し EDR を稼働させる',
    ],
    keyPointsEn: [
      'Windows Server 2019 requires explicit passive mode configuration via ForceDefenderPassiveMode',
      'Passive mode prevents AV conflicts while keeping MDE EDR fully active',
    ],
    referenceTopic: 'Windows Server 2019 での Defender パッシブ モード (ForceDefenderPassiveMode)',
  },
];
