import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH3: Question[] = [
  {
    id: 'sc500-q52',
    number: 52,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'オンプレミスからプライベート エンドポイントへの名前解決 (Azure DNS Private Resolver)',
    titleEn: 'Resolving Private Endpoints from On-Premises via Azure DNS Private Resolver',
    scenarioJa: `あなたの組織には、内部基幹業務アプリケーションが使用する contosostorage という名前の Azure Storage アカウントがあります。VNet1 という名前の仮想ネットワーク内にストレージ アカウント用のプライベート エンドポイントを構成し、セキュリティ要件に準拠するためにストレージ アカウントのパブリック ネットワーク アクセスを無効にしました。

VNet1 内の仮想マシン上のユーザーはプライベート エンドポイントを使用して contosostorage に正常に接続できます。しかし、ExpressRoute 回線経由で VNet1 に接続されたオンプレミス ネットワークから作業しているユーザーから、contosostorage.blob.core.windows.net をエンドポイントのプライベート IP アドレスに名前解決できないという報告が上がっています。オンプレミス DNS サーバーは現在、すべての Azure 関連の DNS クエリを名前解決のために Azure DNS (168.63.129.16) へ転送しています。

プライベート エンドポイント構成を維持したまま、オンプレミス ユーザーがストレージ アカウントの完全修飾ドメイン名 (FQDN) をプライベート エンドポイントのプライベート IP アドレスに名前解決できるようにする必要があります。`,
    scenarioEn: `Your organization has an Azure Storage account named contosostorage that is used by an internal line-of-business application. You configure a private endpoint for the storage account in a virtual network named VNet1, and you disable public network access on the storage account to comply with security requirements.

Users on virtual machines within VNet1 can successfully connect to contosostorage using the private endpoint. However, users working from an on-premises network connected to VNet1 via an ExpressRoute circuit report that they cannot resolve contosostorage.blob.core.windows.net to the private IP address of the endpoint. On-premises DNS servers currently forward all Azure-related DNS queries to Azure DNS (168.63.129.16) for resolution.

You need to ensure that on-premises users can resolve the storage account's fully qualified domain name (FQDN) to the private endpoint's private IP address, while maintaining the private endpoint configuration.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージのパブリック アクセスを再有効化し、VNet1 サブネットのみを許可する NSG 規則を適用する',
        textEn: 'Re-enable public network access on contosostorage and apply an NSG rule allowing only VNet1 subnet traffic across ExpressRoute.',
        isCorrect: false,
        explanationJa: '【不正解】パブリック ネットワーク アクセスを再度有効にすることはプライベート エンドポイント経由のみに制限するというセキュリティ要件に真っ向から反し、また NSG は DNS 名前解決層ではなくネットワーク層で動作するため、名前解決の問題を解決できません。',
        explanationEn: 'Re-enabling public network access directly contradicts the security requirement to restrict access to the storage account via the private endpoint only, and NSGs operate at the network layer, not at the DNS resolution layer, so this does not solve the resolution problem.'
      },
      {
        id: 'B',
        textJa: 'VNet1 に Azure DNS Private Resolver を展開し、オンプレミス DNS から受信エンドポイントへ条件付き転送する',
        textEn: 'Deploy Azure DNS Private Resolver in VNet1 linked to privatelink DNS and forward blob queries from on-premises to its inbound endpoint.',
        isCorrect: true,
        explanationJa: '【正解】オンプレミスのリゾルバーは Azure プライベート DNS ゾーンを直接照会できないため、Azure DNS Private Resolver の受信エンドポイントが、仮想ネットワーク内で転送を受けられる到達可能なプライベート IP アドレスを提供します。VNet1 が privatelink.blob.core.windows.net ゾーンにリンクされているため、リゾルバーはプライベート エンドポイントのプライベート IP アドレスを返します。',
        explanationEn: 'On-premises resolvers cannot query Azure private DNS zones directly, so an inbound endpoint on an Azure DNS Private Resolver gives them a reachable IP address inside the virtual network to forward to. Because the virtual network is linked to the privatelink.blob.core.windows.net zone, the resolver returns the private endpoint\'s private IP address.'
      },
      {
        id: 'C',
        textJa: 'オンプレミス DNS サーバーに contosostorage FQDN をプライベート IP へ解決する静的 A レコードを追加する',
        textEn: 'Add a static A record on the on-premises DNS server mapping contosostorage.blob.core.windows.net to the endpoint private IP.',
        isCorrect: false,
        explanationJa: '【不正解】静的な DNS レコードを手動でハードコードする方法は、プライベート エンドポイントの IP が再作成などで変更されると動作しなくなり、信頼性に欠け長期的なサポート対象ソリューションになりません。また複数のストレージ アカウントにもスケールしません。',
        explanationEn: 'Manually hardcoding a static DNS record works only until the private endpoint\'s IP changes (e.g., due to recreation or scaling), making it unreliable and not a supported long-term solution. It also does not scale across multiple storage accounts or private endpoints.'
      },
      {
        id: 'D',
        textJa: 'オンプレミス DNS から contosostorage のパブリック IP アドレス宛てに条件付き転送ルールを構成する',
        textEn: 'Create an on-premises DNS conditional forwarder targeting the public IP address assigned to the contosostorage Azure account.',
        isCorrect: false,
        explanationJa: '【不正解】Azure DNS (168.63.129.16) はオンプレミスから直接プライベート IP へ解決することはできず、パブリック IP へ転送するとプライベート エンドポイントを完全にバイパスして接続失敗または非セキュアな経路となり、プライベート接続要件を満たせません。',
        explanationEn: 'Azure DNS (168.63.129.16) cannot resolve privatelink.blob.core.windows.net to a private IP address for on-premises resolvers, and forwarding to a public IP would bypass the private endpoint entirely, resulting in a connection failure or an insecure public path. This does not achieve the private connectivity requirement.'
      }
    ],
    overallExplanationJa: `プライベート エンドポイントを使用する場合、関連付けられた Azure プライベート DNS ゾーン (privatelink.blob.core.windows.net 等) が FQDN をプライベート IP アドレスに解決できるのは、そのゾーンにリンクされた仮想ネットワーク内の VM のみです。

オンプレミス クライアントから Azure プライベート DNS ゾーンの名前解決を行うには、**Azure DNS Private Resolver** を VNet 内にデプロイし、その**受信エンドポイント (Inbound endpoint)** 宛てにオンプレミス DNS サーバーから条件付きフォワーダーを設定するハイブリッド DNS 構成が必要です。`,
    overallExplanationEn: `When private endpoints are used, the associated Azure Private DNS zone (e.g., privatelink.blob.core.windows.net) resolves the FQDN to the private IP address only for clients that can query that zone, such as VMs within the linked virtual network. On-premises clients require a hybrid DNS resolution mechanism—Azure DNS Private Resolver—to bridge on-premises DNS forwarding with the Azure private DNS zone, ensuring secure and dynamic resolution of private endpoint IP addresses.`,
    keyPointsJa: [
      'オンプレミスから Azure Private Endpoint を名前解決 ＝ VNet 内に Azure DNS Private Resolver をデプロイし受信エンドポイントへ条件付き転送',
      'オンプレミス DNS サーバーから 168.63.129.16 (Azure ワイヤー サーバー IP) へ直接クエリしてもプライベート ゾーンは解決できない',
      'Private Resolver が配置された VNet に privatelink.* プライベート DNS ゾーンがリンクされている必要がある'
    ],
    keyPointsEn: [
      'Deploy Azure DNS Private Resolver in a VNet linked to the privatelink Private DNS zone',
      'Configure on-premises DNS conditional forwarders (e.g., for blob.core.windows.net) to the resolver\'s inbound endpoint IP',
      'On-premises DNS servers cannot query 168.63.129.16 directly across ExpressRoute/VPN'
    ],
    referenceTopic: 'Azure DNS Private Resolver によるハイブリッド名前解決'
  },
  {
    id: 'sc500-q53',
    number: 53,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'VPN Gateway S2S 接続のカスタム IPsec/IKE ポリシーによる暗号強制',
    titleEn: 'Enforcing AES256/SHA256 on S2S VPN via Custom IPsec/IKE Policy',
    scenarioJa: `Contoso 社は、オンプレミス データセンターとのサイト間 (S2S) 接続用に Azure VPN Gateway を構成しています。セキュリティ監査においてコンプライアンス チームは、VPN ゲートウェイの既定のアルゴリズム提案を拒否し、IPsec/IKE トンネルが暗号化に AES256、整合性に SHA256 のみを使用することを要求しています。オンプレミスの VPN デバイスは IKEv2 のみをサポートしており、これらの正確なアルゴリズムに一致しなければトンネルの確立に失敗します。

S2S VPN 接続の Azure 側でこれらの特定の暗号アルゴリズムを強制する必要があります。`,
    scenarioEn: `Contoso has an Azure VPN Gateway configured for a Site-to-Site (S2S) connection to their on-premises datacenter. During a security audit, the compliance team requires that the IPsec/IKE tunnel use only AES256 for encryption and SHA256 for integrity, rejecting the gateway's default algorithm proposals. The on-premises VPN device only supports IKEv2 and must match these exact algorithms or the tunnel will fail to establish.

You need to enforce these specific cryptographic algorithms on the Azure side of the S2S VPN connection.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'VPN ゲートウェイのパブリック IP アドレスに対して Azure DDoS Protection Standard を構成する',
        textEn: 'Configure Azure DDoS Protection Standard on the public IP assigned to the Azure VPN gateway',
        isCorrect: false,
        explanationJa: '【不正解】Azure DDoS Protection Standard はパブリック IP アドレスを標的としたサービス拒否攻撃に対する保護を提供するものであり、VPN 接続の IPsec/IKE ネゴシエーションで使用される暗号化や整合性アルゴリズムには影響しません。',
        explanationEn: 'Azure DDoS Protection Standard provides protection against denial-of-service attacks targeting the public IP address and does not influence or configure the encryption or integrity algorithms used in the IPsec/IKE negotiation of a VPN connection.'
      },
      {
        id: 'B',
        textJa: 'VPN 接続を確立する前に準拠デバイスを要求する Microsoft Entra ID の条件付きアクセス ポリシー',
        textEn: 'A Conditional Access policy in Microsoft Entra ID requiring a compliant device before establishing the VPN connection',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセス ポリシーは、ポイント対サイト (P2S) VPN やアプリ アクセス シナリオでユーザーやデバイスの認証・コンプライアンスを制御するものです。ゲートウェイ間のサイト間 (S2S) VPN トンネルで使用される IPsec/IKE 暗号アルゴリズムは構成できません。',
        explanationEn: 'Conditional Access policies control user and device authentication and compliance for accessing cloud resources, typically for point-to-site VPN or application access scenarios. They do not configure or enforce the IPsec/IKE cryptographic algorithms used in a Site-to-Site VPN tunnel between gateways.'
      },
      {
        id: 'C',
        textJa: 'VPN ゲートウェイをホストするサブネット上で TLS 検査を有効にした Azure Firewall Premium',
        textEn: 'Azure Firewall Premium with TLS inspection enabled on the subnet hosting the VPN gateway',
        isCorrect: false,
        explanationJa: '【不正解】Azure Firewall Premium の TLS 検査はアプリケーション層で HTTPS トラフィックを検査するためのものであり、S2S VPN トンネルの IPsec/IKE 暗号化アルゴリズムのネゴシエーションや強制には関与しません。また GatewaySubnet での動作設計とも異なります。',
        explanationEn: 'Azure Firewall Premium\'s TLS inspection is designed for inspecting HTTPS traffic at the application layer and has no role in negotiating or enforcing IPsec/IKE encryption algorithms for a Site-to-Site VPN tunnel. It does not control the cryptographic parameters of the VPN Gateway connection.'
      },
      {
        id: 'D',
        textJa: 'IKE と IPsec の双方に AES256 と SHA256 を指定したカスタム IPsec/IKE ポリシーを接続に適用する',
        textEn: 'Configure a custom IPsec/IKE policy on the VPN connection specifying AES256 and SHA256 for IKE and IPsec',
        isCorrect: true,
        explanationJa: '【正解】Azure VPN Gateway はカスタム IPsec/IKE ポリシーをサポートしており、IKE (フェーズ 1) と IPsec (フェーズ 2) の両方について正確な暗号化・整合性・Diffie-Hellman グループ アルゴリズムを指定でき、要求どおり AES256 と SHA256 のみを使用してネゴシエーションするよう強制できます。これは PowerShell、CLI、または Azure portal を使用して接続リソースに直接適用されます。',
        explanationEn: 'Azure VPN Gateway supports custom IPsec/IKE policies that let you specify exact encryption, integrity, and Diffie-Hellman group algorithms for both IKE (Phase 1) and IPsec (Phase 2), ensuring the tunnel only negotiates using AES256 and SHA256 as required. This is applied directly to the connection resource using PowerShell, CLI, or the Azure portal.'
      }
    ],
    overallExplanationJa: `Azure VPN Gateway のサイト間 (S2S) 接続で特定の暗号アルゴリズムを強制するには、VPN 接続オブジェクト (Connection resource) に直接**カスタム IPsec/IKE ポリシー**を構成し、IKE フェーズ 1 および IPsec フェーズ 2 の暗号化・整合性・PFS グループ・ライフタイムなどのパラメーターを定義します。

これにより、既定の弱い／広範な提案リストを使用せず、承認されたアルゴリズム (AES256・SHA256) のみでネゴシエーションされるようになります。`,
    overallExplanationEn: `To enforce specific cryptographic algorithms on an Azure VPN Gateway Site-to-Site connection, administrators must configure a custom IPsec/IKE policy directly on the connection object, defining parameters such as encryption, integrity, PFS group, and lifetime. This ensures the tunnel only negotiates using the approved algorithms, and mismatches with on-premises devices will need to be resolved by aligning both ends to the same custom policy.`,
    keyPointsJa: [
      'S2S VPN トンネルで AES256 / SHA256 等の厳密な暗号スイートを強制 ＝ VPN 接続リソースにカスタム IPsec/IKE ポリシーを構成',
      'IKE Phase 1 と IPsec Phase 2 の双方に対して暗号化・整合性アルゴリズムを指定し、既定提案を拒否する',
      'P2S 認証用の条件付きアクセスや HTTPS 用の TLS 検査では IPsec/IKE パラメーターを制御できない'
    ],
    keyPointsEn: [
      'Configure a custom IPsec/IKE policy on the Azure VPN connection resource to enforce exact IKE Phase 1 and IPsec Phase 2 algorithms',
      'Overrides default gateway proposals to enforce strict AES256 encryption and SHA256 integrity',
      'On-premises VPN device settings must match the configured custom policy'
    ],
    referenceTopic: 'Azure VPN Gateway のカスタム IPsec/IKE ポリシー'
  },
  {
    id: 'sc500-q54',
    number: 54,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure WAF の除外設定 (Exclusions) による誤検知のピンポイント解消',
    titleEn: 'Resolving WAF False Positives with Targeted Exclusions',
    scenarioJa: `Contoso Ltd. は、Azure Front Door の背後でパブリック向け E コマース Web サイトを運用しています。Front Door WAF ポリシーは、Microsoft マネージドの既定ルール セット (DRS) を使用して「防止」(Prevention) モードで有効化されています。顧客から、一重引用符や丸括弧を含む製品 (例: "O'Brien's (Deluxe)") を検索すると、WAF の SQL インジェクション ルールが検索クエリ文字列パラメーターを誤検知 (False Positive) として一致させ、HTTP 403 エラーでブロックされるとの報告がありました。

セキュリティ チームは、サイトの残りの部分に対して既定ルール セットによって提供される他のすべての SQL インジェクションおよびクロスサイト スクリプティング保護を引き続き強制しながら、これらの正当な検索要求のブロックを停止する必要があります。`,
    scenarioEn: `Contoso Ltd. runs a public-facing e-commerce website behind Azure Front Door. The Front Door WAF policy is enabled in Prevention mode with the Microsoft-managed Default Rule Set (DRS). Customers report that searching for products containing characters such as single quotes and parentheses (e.g., "O'Brien's (Deluxe)") is blocked with an HTTP 403 error because the WAF's SQL injection rule matches the search query string parameter as a false positive.

The security team must stop blocking these legitimate search requests while continuing to enforce all other SQL injection and cross-site scripting protections provided by the Default Rule Set for the rest of the site.`,
    questionJa: 'セキュリティ チームは Azure WAF ポリシーで何を構成すべきですか？',
    questionEn: 'What should the security team configure in the Azure WAF policy?',
    options: [
      {
        id: 'A',
        textJa: '一重引用符または丸括弧を含む正当なすべての検索要求を明示的に許可する、マネージド ルールより優先度番号が大きいカスタム ルール',
        textEn: 'A custom rule with a higher priority number than the managed rules to explicitly allow any request containing single quotes or parentheses',
        isCorrect: false,
        explanationJa: '【不正解】カスタム ルールは優先度に基づいて評価されますが、引用符や丸括弧を含む要求を無条件に「許可」するカスタム ルールは範囲が広すぎ、サイト内の別箇所での悪意あるペイロードまで許可してしまいます。また優先度番号が大きいルールはマネージド ルールより先に評価される優先度設定とも噛み合いません。',
        explanationEn: 'Custom rules are evaluated based on priority, but an "allow" custom rule matching characters like quotes or parentheses would be far too broad, potentially permitting malicious payloads containing those same characters elsewhere on the site, and custom rules do not scope evaluation to a single managed rule the way exclusions do.'
      },
      {
        id: 'B',
        textJa: '要求パスが検索エンドポイントと一致するたびに WAF ポリシーを検出 (Detection) モードに切り替えるカスタム ルール',
        textEn: 'A custom rule that switches the WAF policy to Detection mode whenever the request path matches the search endpoint',
        isCorrect: false,
        explanationJa: '【不正解】パス単位で検出モードへ切り替えるとブロックは止まりますが、検索エンドポイントに対する本物の攻撃の防御も止まってしまいます。また、検出／防止モードはパスごとに標準のカスタム ルールで切り替える設定ではなくポリシー全体の設定です。',
        explanationEn: 'Switching to Detection mode for a path would stop blocking but also stop actively preventing genuine attacks against that endpoint, and Detection mode is not something you can selectively apply per path via a standard custom rule targeting request matching; it is a policy-wide setting, making this an ineffective and overly broad fix.'
      },
      {
        id: 'C',
        textJa: '一致したルールによる評価から特定のクエリ文字列引数 (例: "search" パラメーター) を除外する WAF 除外 (WAF exclusion)',
        textEn: 'A WAF exclusion that excludes the specific query string argument (e.g., the "search" parameter) from evaluation by the matching rule',
        isCorrect: true,
        explanationJa: '【正解】Azure WAF の除外設定 (Exclusions) を使用すると、名前付きクエリ文字列引数、Cookie、またはヘッダーなどの特定の要求要素を、一致したマネージド ルールの評価対象からピンポイントで除外できます。これにより、他のすべてのトラフィックとルール保護を完全に維持したまま、誤検知を引き起こした search パラメーターのみが評価からスキップされます。',
        explanationEn: 'Azure WAF exclusions let you scope out a specific request element, such as a named query string argument, cookie, or header, from being evaluated by matching managed rules, so the search parameter is skipped by the false-positive rule while all other traffic and rule coverage remain fully intact.'
      },
      {
        id: 'D',
        textJa: 'Front Door WAF ポリシー全体で既定ルール セット内の SQL インジェクション保護ルール グループを無効に設定する',
        textEn: 'Disable the SQL injection protection rule group inside the Default Rule Set across the entire Azure Front Door WAF policy',
        isCorrect: false,
        explanationJa: '【不正解】SQL インジェクション ルール グループ全体を無効にすると、検索機能だけでなくサイト全体で本物の SQL インジェクション攻撃に対する保護が失われてしまい、誤検知のピンポイント対処ではなくセキュリティ態勢が著しく低下します。',
        explanationEn: 'Disabling the entire SQL injection rule group removes protection against real SQL injection attempts across the whole site, not just the search feature, significantly weakening security posture instead of surgically addressing the false positive.'
      }
    ],
    overallExplanationJa: `Azure WAF の**除外設定 (Exclusions)** は、他のすべてのトラフィックにおける既定ルール セット (DRS) の保護を維持したまま、1 つまたは複数のマネージド ルールの評価対象から特定の要求フィールド (特定のクエリ文字列パラメーター名、ヘッダー、Cookie など) のみを除外して誤検知を解消するための専用機能です。

ルール グループ全体の無効化やポリシー全体の検出モード変更、広範なカスタム許可ルールと比較して、最小権限で安全な推奨アプローチとなります。`,
    overallExplanationEn: `Azure WAF exclusions are purpose-built to resolve false positives by removing a specific request field from evaluation by one or more managed rules, preserving the security value of the Default Rule Set everywhere else. This is the recommended and least-privilege approach compared to disabling rule groups, changing modes, or writing broad allow rules.`,
    keyPointsJa: [
      '特定のクエリ引数やヘッダーによる WAF マネージド ルールの誤検知解消 ＝ WAF 除外 (Exclusions) を構成',
      'サイト全体や他のパラメーターに対する SQLi / XSS 保護をそのまま維持できる',
      'SQLi ルール グループ無効化や広範な許可カスタム ルールは防御力が大幅に低下するため NG'
    ],
    keyPointsEn: [
      'Use an Azure WAF exclusion to skip evaluation of a specific query string parameter (e.g., "search") for the matching rule',
      'Keeps DRS SQLi and XSS protection intact across all other endpoints and request parameters',
      'Avoid disabling entire rule groups or creating overly broad allow rules'
    ],
    referenceTopic: 'Azure Front Door WAF の除外設定 (Exclusions)'
  },
  {
    id: 'sc500-q55',
    number: 55,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL 論理サーバーでの Microsoft Entra ID 専用認証の強制',
    titleEn: 'Enforcing Microsoft Entra ID-Only Authentication on Azure SQL Server',
    scenarioJa: `ある企業は、sql-prod-eastus という名前の Azure SQL Database 論理サーバーに接続する基幹業務アプリケーションを運用しています。セキュリティ レビュー中に、組織が ID 管理に Microsoft Entra ID を全面的に採用しているにもかかわらず、複数のデータベース管理者が依然として SQL 認証 (ユーザー名とパスワード) を使用してサーバーに接続していることが判明しました。

最高情報セキュリティ責任者 (CISO) は、組み込みのサーバー管理者アカウントを含め、今後 SQL 認証ログインを完全に無効化し、Microsoft Entra ID の ID のみがこの論理サーバー上の任意のデータベースに認証できるようにすることを要求しています。

最小限の管理作業でこの要件を満たすプラットフォーム レベルの構成を Azure SQL 論理サーバーに実装する必要があります。`,
    scenarioEn: `A company runs a business-critical application that connects to an Azure SQL Database logical server named sql-prod-eastus. During a security review, you discover that several database administrators still use SQL authentication (username and password) to connect to the server, even though the organization has fully adopted Microsoft Entra ID for identity management. The Chief Information Security Officer requires that SQL authentication logins be completely disabled going forward, so that only Microsoft Entra ID identities can authenticate to any database on this logical server, including the built-in server administrator account.

You need to implement a platform-level configuration on the Azure SQL logical server that meets this requirement with the least administrative effort.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: '論理サーバー全体で Microsoft Defender for SQL を有効にする',
        textEn: 'Enable Microsoft Defender for SQL across the Azure SQL logical server',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for SQL は異常なアクティビティや構成ミスを特定する脅威検出・脆弱性評価機能を提供しますが、SQL 認証を無効にしたり Microsoft Entra ID 専用サインインを強制したりするものではありません。',
        explanationEn: 'Microsoft Defender for SQL provides threat detection and vulnerability assessment capabilities to identify anomalous activity and misconfigurations, but it does not disable SQL authentication or enforce Microsoft Entra ID-only sign-in.'
      },
      {
        id: 'B',
        textJa: 'Log Analytics 宛てに Azure SQL 監査ログ送信を構成する',
        textEn: 'Configure Azure SQL Auditing to send logs to a Log Analytics workspace',
        isCorrect: false,
        explanationJa: '【不正解】監査はレビューやコンプライアンスのためにデータベース イベントを記録して指定先に書き込みますが、サーバーへの接続に使用できる認証方法を制限・防止するものではありません。',
        explanationEn: 'Auditing captures database events and writes them to a chosen destination for review and compliance, but it does not prevent or restrict which authentication method can be used to connect to the server.'
      },
      {
        id: 'C',
        textJa: 'ホストされている各 DB で透過的データ暗号化 (TDE) を有効にする',
        textEn: 'Enable Transparent Data Encryption (TDE) on all hosted SQL databases',
        isCorrect: false,
        explanationJa: '【不正解】透過的データ暗号化 (TDE) はデータベース ファイルを暗号化して保存データを保護しますが、データベースへの接続時に使用される認証方法には影響しません。',
        explanationEn: 'Transparent Data Encryption protects data at rest by encrypting database files, but it has no effect on the authentication method used to connect to the database.'
      },
      {
        id: 'D',
        textJa: '論理サーバーで「Microsoft Entra ID のみの認証」を有効にする',
        textEn: 'Enable Microsoft Entra ID-only authentication on the logical server',
        isCorrect: true,
        explanationJa: '【正解】Azure SQL 論理サーバーで「Microsoft Entra ID のみの認証」を有効にすることはプラットフォーム レベルの設定であり、サーバー管理者アカウントを含むすべての SQL 認証ログインを無効化し、Microsoft Entra ID の ID のみがサーバー上のデータベースに接続できるようにします。',
        explanationEn: 'Enabling Microsoft Entra ID-only authentication on the Azure SQL logical server is a platform-level setting that disables all SQL authentication logins, including the server administrator account, ensuring only Microsoft Entra ID identities can connect to any database on that server.'
      }
    ],
    overallExplanationJa: `Azure SQL には論理サーバー レベルの専用設定として **Microsoft Entra ID のみの認証 (Microsoft Entra ID-only authentication)** が用意されています。

これを有効にすると、組み込みの SQL 管理者アカウント (sa 等) を含むすべての SQL 認証ログインがブロックされ、すべての接続に Microsoft Entra ID 認証が強制されるため、シナリオの要件を最小限の労力で直接満たすことができます。`,
    overallExplanationEn: `Azure SQL provides a dedicated logical server-level setting called Microsoft Entra ID-only authentication, which, when enabled, blocks all SQL authentication logins (including sa/admin accounts) and requires every connection to authenticate using Microsoft Entra ID, directly satisfying the requirement in the scenario. The other options address encryption, auditing, or threat detection, none of which control or restrict the authentication mechanism itself.`,
    keyPointsJa: [
      'SQL 認証 (ユーザー名/パスワード・組み込みサーバー管理者含む) を完全無効化 ＝ 論理サーバーの「Microsoft Entra ID のみの認証」を有効化',
      'Defender for SQL や監査設定は監視用であり、認証方式の遮断は行わない',
      'TDE は保存データ暗号化機能であり認証制御ではない'
    ],
    keyPointsEn: [
      'Enable Microsoft Entra ID-only authentication at the Azure SQL logical server level to block all SQL auth logins',
      'Applies to the built-in server admin account as well as database SQL logins',
      'Defender for SQL, SQL Auditing, and TDE do not control authentication methods'
    ],
    referenceTopic: 'Azure SQL 論理サーバーの Microsoft Entra ID 専用認証'
  },
  {
    id: 'sc500-q56',
    number: 56,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'NSG ルールにおける ASG の同一仮想ネットワーク制約',
    titleEn: 'Same-VNet Constraint for Application Security Groups (ASGs) in NSG Rules',
    scenarioJa: `Contoso Ltd. はピアリングされた 2 つの仮想ネットワーク、VNet-App (アプリケーション層の VM をホスト) と VNet-Data (SQL Server VM をホスト) を所有しています。セキュリティ エンジニアは次の 2 つのアプリケーション セキュリティ グループ (ASG) を作成しました：

- AppTierASG — VNet-App 内のアプリケーション層 VM の NIC を含む
- SqlTierASG — VNet-Data 内の SQL Server VM の NIC を含む

次にエンジニアは、VNet-Data サブネットに関連付けられた NSG に次の設定で受信セキュリティ規則を作成しようとしました：
- ソース: AppTierASG
- 宛先: SqlTierASG
- 宛先ポート: 1433
- アクション: 許可 (Allow)

ルールを保存しようとすると、Azure は検証エラーを返し、ルールを作成できません。`,
    scenarioEn: `Contoso Ltd. has two virtual networks that are peered: VNet-App (hosts application-tier VMs) and VNet-Data (hosts SQL Server VMs). A security engineer creates two application security groups (ASGs):

- AppTierASG - contains the NICs of the application-tier VMs in VNet-App
- SqlTierASG - contains the NICs of the SQL Server VMs in VNet-Data

The engineer then tries to create an inbound security rule on the NSG associated with the VNet-Data subnet with the following settings:
- Source: AppTierASG
- Destination: SqlTierASG
- Destination port: 1433
- Action: Allow

When the engineer attempts to save the rule, Azure returns a validation error and the rule cannot be created.`,
    questionJa: 'エラーの最も可能性の高い原因と、エンジニアがそれを解決する方法は何ですか？',
    questionEn: 'What is the most likely cause of the error, and how should the engineer resolve it?',
    options: [
      {
        id: 'A',
        textJa: '各アプリケーション セキュリティ グループはサブスクリプション全体で 1 つの NSG 規則でしか参照できない。AppTierASG は別の規則ですでに使用されている可能性が高いため、新しい ASG を作成する必要がある。',
        textEn: 'Each application security group can be referenced in only one NSG rule across the entire subscription. Since AppTierASG is likely already used in another rule, the engineer must create a new ASG.',
        isCorrect: false,
        explanationJa: '【不正解】ASG を 1 つの NSG 規則でしか参照できないという制限はありません。ASG は複数の規則や複数の NSG で再利用されるのが一般的です。',
        explanationEn: 'There is no limit restricting an ASG to being referenced in only one NSG rule. ASGs are commonly reused across multiple rules and multiple NSGs.'
      },
      {
        id: 'B',
        textJa: 'アプリケーション セキュリティ グループはすべてのポート (*) を許可する規則でのみ使用でき、ASG で 1433 のような単一ポートを指定することはサポートされていない。規則を正常に保存するには宛先ポートを "Any" に変更する必要がある。',
        textEn: 'Application security groups only support rules allowing all ports (*), not a single port like 1433. Change the destination port to "Any" so the NSG rule saves.',
        isCorrect: false,
        explanationJa: '【不正解】ASG はセキュリティ規則における個別ポートやポート範囲の指定を完全にサポートしており、層間でポート 1433 のみを許可するといった用途がまさに主なユースケースです。ポート制限が検証エラーの原因ではありません。',
        explanationEn: 'ASGs fully support specifying individual ports or port ranges in security rules; this is one of their primary use cases (for example, allowing only port 1433 between tiers). Port restrictions are not the cause of the validation failure.'
      },
      {
        id: 'C',
        textJa: 'ネットワーク セキュリティ グループでは、受信規則の宛先としてアプリケーション セキュリティ グループを使用できず、ソースとしてのみ使用できる。SqlTierASG をソース、AppTierASG を宛先に入れ替える必要がある。',
        textEn: 'NSGs cannot use application security groups as destinations in inbound rules; only as sources. Swap the fields so SqlTierASG is the source and AppTierASG is destination.',
        isCorrect: false,
        explanationJa: '【不正解】ASG は受信規則でも送信規則でもソース・宛先のいずれかまたは両方として使用でき、受信規則の宛先に ASG を使えないという制限はありません。ソースと宛先を入れ替えても、異なる VNet 間にまたがる問題は解決しません。',
        explanationEn: 'ASGs can be used as either the source or the destination (or both) in inbound or outbound rules; there is no restriction preventing an ASG from being used as a destination in an inbound rule. Swapping source and destination would not resolve the underlying cross-VNet issue.'
      },
      {
        id: 'D',
        textJa: '同一規則でソースと宛先に指定する ASG には同一 VNet 内の NIC のみを含める必要がある。ASG メンバーシップを単一 VNet 内に再設計するか、一方を IP 範囲またはサービス タグに置き換える必要がある。',
        textEn: 'ASGs referenced as source and destination in one rule must contain NICs from the same VNet. Redesign ASG membership to a single VNet, or replace one ASG with IP ranges or service tags.',
        isCorrect: true,
        explanationJa: '【正解】Azure では、同一セキュリティ規則内でソースと宛先の両方に ASG が使用される場合、両方の ASG に含まれるネットワーク インターフェイス (NIC) が同じ仮想ネットワークに属している必要があるという制約が適用されます。AppTierASG は VNet-App、SqlTierASG は VNet-Data の NIC を含んでいるためこの制約に違反し、検証に失敗します。',
        explanationEn: 'Azure enforces a constraint that when an ASG is used as both the source and destination in the same security rule, the network interfaces contained in both ASGs must belong to the same virtual network. Since AppTierASG contains NICs from VNet-App and SqlTierASG contains NICs from VNet-Data, this rule violates that constraint and fails validation.'
      }
    ],
    overallExplanationJa: `アプリケーション セキュリティ グループ (ASG) を使用すると、IP アドレスをハードコーディングする代わりに VM の NIC を論理的にグループ化して NSG 規則で参照できます。

ただし重要な制約として、**同じ NSG 規則内でソースと宛先の両方に ASG を指定する場合、両方の ASG に含まれるすべての NIC は同一の仮想ネットワーク (VNet) 内に存在している必要があります**。ピアリングされた別個の VNet 間をまたぐ通信を制御する場合は、IP アドレス プレフィックスまたはサービス タグを使用するか、単一 VNet 内のサブネット構成へ設計を見直す必要があります。`,
    overallExplanationEn: `Application security groups let administrators group VM NICs logically and reference them in NSG rules instead of hardcoding IP addresses. However, a key limitation is that when two ASGs are used together as source and destination in the same rule, all NICs in both ASGs must reside in the same virtual network. Because the scenario spans two peered but distinct virtual networks, the rule fails, and the engineer must redesign ASG scope or use an alternative addressing method such as IP prefixes or service tags for cross-VNet scenarios.`,
    keyPointsJa: [
      '1 つの NSG ルールでソース ASG と宛先 ASG を同時に使う場合、両 ASG の NIC は「同一 VNet 内」にあることが必須',
      'VNet ピアリングで接続されていても、異なる VNet にある ASG 同士を 1 つのルールでソース・宛先に指定すると検証エラーになる',
      'クロス VNet シナリオでは IP アドレス範囲やサービス タグ等を使用する'
    ],
    keyPointsEn: [
      'All NICs in ASGs referenced as source and destination in the same NSG rule must belong to the same VNet',
      'VNet peering does not bypass the same-VNet constraint for ASG-to-ASG NSG rules',
      'Use IP CIDR ranges or service tags across peered virtual networks'
    ],
    referenceTopic: 'NSG ルールにおける ASG の同一仮想ネットワーク制約'
  },
  {
    id: 'sc500-q57',
    number: 57,
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender EASM インベントリ状態 (Candidate / Requires Investigation) のトリアージ',
    titleEn: 'Triaging Discovered Assets in Microsoft Defender EASM',
    scenarioJa: `大企業のセキュリティ アナリストは、忘れられたサブドメインやシャドウ IT リソースなど、現在 IT 資産管理システムで追跡されていないインターネット公開資産を特定するために Microsoft Defender External Attack Surface Management (EASM) を展開しました。アナリストは会社の主要ドメインや IP アドレス ブロックなどの既知のシードを使用して初期検出を構成しました。検出の実行完了後、生成されたインベントリには「承認済み (Approved)」、「候補 (Candidate)」、および「調査が必要 (Requires Investigation)」の状態の資産が混在しています。

アナリストが修復の優先順位付けに EASM の脆弱性および CVE インサイトを活用する前に、攻撃対象領域インベントリに Contoso 社が実際に所有・運用している資産のみが正確に反映されるようにするには何をすべきですか？`,
    scenarioEn: `A security analyst at a large enterprise deploys Microsoft Defender External Attack Surface Management (EASM) to identify internet-facing assets that are not currently tracked by the IT asset management system, including forgotten subdomains and shadow IT resources. The analyst configures an initial discovery using known seeds such as the company's primary domains and IP address blocks. After the discovery run completes, the resulting inventory contains a mix of assets in "Approved," "Candidate," and "Requires Investigation" states.

Before the analyst can rely on the EASM vulnerability and CVE insights to prioritize remediation, what should the analyst do to ensure the attack surface inventory accurately reflects only assets that Contoso actually owns and operates?`,
    questionJa: 'アナリストはどのアクションを実行すべきですか？',
    questionEn: 'What should the analyst do?',
    options: [
      {
        id: 'A',
        textJa: '検出結果の Log Analytics ワークスペースへの継続的エクスポートを有効にする。これによりネットワーク テレメトリに基づいて検出されたすべての未知資産が自動的に「承認済み (Approved)」状態へ再分類される',
        textEn: 'Enable continuous export of the discovery results to Log Analytics, which automatically reclassifies all discovered assets as "Approved" based on network telemetry',
        isCorrect: false,
        explanationJa: '【不正解】継続的エクスポートはさらなる分析やアラートのために EASM データを Log Analytics や Microsoft Sentinel に送信しますが、資産インベントリの状態を自動的に再分類することはありません。状態変更 (Approved、Candidate、Rejected) は EASM ポータル内で手動または定義済みインベントリ ルールにより行います。',
        explanationEn: 'Continuous export sends EASM data to tools like Log Analytics or Microsoft Sentinel for further analysis and alerting, but it does not automatically reclassify asset inventory states. Asset state changes (Approved, Candidate, Rejected) must be performed manually or through defined inventory rules within the EASM portal, not through export configuration.'
      },
      {
        id: 'B',
        textJa: '「候補 (Candidate)」および「調査が必要 (Requires Investigation)」の資産を確認し、検証済みの資産のみが「承認済み (Approved)」インベントリに移行するよう各資産を手動で確定 (Confirm) または拒否 (Reject) する',
        textEn: 'Review the "Candidate" and "Requires Investigation" assets, and manually confirm or reject each one so that only validated assets move into the "Approved" inventory',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender EASM の検出エンジンは、WHOIS レコード、DNS、SSL 証明書などの関係性を推測するため、組織が実際に所有しているとは限らない資産も「Candidate」や「Requires Investigation」状態で出力します。アナリストがこれらをトリアージして手動で確認・拒否することで、Attack Surface Summary ダッシュボードや脆弱性インサイトの根拠となる「Approved」インベントリが検証済みの組織資産のみで構成されるようになります。',
        explanationEn: 'Microsoft Defender EASM discovery produces assets in states such as "Candidate" and "Requires Investigation" because the discovery engine infers relationships (WHOIS records, DNS, SSL certificates, etc.) that may or may not represent assets truly owned by the organization. Analysts must triage these assets and manually confirm or reject them so the "Approved" inventory—which drives the Attack Surface Summary dashboard and vulnerability insights—reflects only verified organizational assets.'
      },
      {
        id: 'C',
        textJa: '脆弱性評価と CVE インサイトは「承認済み (Approved)」資産に対してのみ実行される仕組みであるため、攻撃対象領域インベントリ内のノイズを減らす目的ですべての「候補 (Candidate)」資産を精査せず直ちに削除する',
        textEn: 'Delete all "Candidate" and unverified assets immediately to reduce inventory noise, since only "Approved" assets are scanned for vulnerabilities.',
        isCorrect: false,
        explanationJa: '【不正解】確認せずに Candidate 資産を削除すると、新しく買収した子会社の資産や忘れられたサブドメインなど、正当ではあるが未確認の資産を永久に破棄してしまい、シャドウ IT を発見する EASM の目的に反します。また EASM の脆弱性インサイトは承認済み資産のみに限定されて生成されるわけではありません。',
        explanationEn: 'Deleting Candidate assets without review risks permanently discarding legitimate but unconfirmed assets (such as newly acquired subsidiaries or forgotten subdomains), which defeats the purpose of using EASM to discover unmanaged infrastructure. Vulnerability insights in EASM are generated across the full discovered inventory, not solely on "Approved" assets, so deletion is not the correct triage step.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Cloud の規制コンプライアンス ダッシュボードを開き、既存の Azure サブスクリプションに属さない未追跡のインターネット公開資産を自動除外するカスタム インベントリ フィルターを適用する',
        textEn: 'Open the Microsoft Defender for Cloud regulatory compliance dashboard and apply a filter to exclude assets that are not part of an existing Azure subscription',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud の規制コンプライアンス ダッシュボードは既存の Azure サブスクリプションにオンボーディングされたリソースのコンプライアンス態勢を評価するものであり、EASM 検出結果をトリアージする機能はありません。EASM は Azure 外部のインターネット公開資産も対象とします。',
        explanationEn: 'The Defender for Cloud regulatory compliance dashboard evaluates compliance posture for resources already onboarded to Azure subscriptions; it has no functionality to filter or triage EASM discovery results. EASM specifically targets external, internet-facing assets that may exist entirely outside of Azure, so this dashboard is not the appropriate tool for this task.'
      }
    ],
    overallExplanationJa: `Microsoft Defender EASM は自動検出によって攻撃対象領域インベントリを構築しますが、検出された資産はアナリストが所有権を検証するまで最初は「Candidate」や「Requires Investigation」状態として登録されます。

この手動トリアージ (確定/Approved または拒否/Rejected への振り分け) を行うことで初めて、「Approved」インベントリが組織の実際の管理対象資産のみを正確に反映し、脆弱性・CVE・露出インサイトに基づく優先順位付けが信頼できるようになります。`,
    overallExplanationEn: `Microsoft Defender EASM builds its attack surface inventory through automated discovery, but discovered assets initially populate as "Candidate" or "Requires Investigation" until an analyst validates ownership. Only after this manual triage step do assets move to "Approved," ensuring that the vulnerability, compliance, and exposure insights used for remediation prioritization are based on assets the organization actually controls.`,
    keyPointsJa: [
      'Defender EASM の Candidate / Requires Investigation 資産 ＝ アナリストが所有権を確認し手動で Approved (承認) または Rejected (拒否) にトリアージする',
      '無確認での削除は正当なシャドウ IT や忘却サブドメインの見逃しにつながるため NG',
      'Log Analytics への継続的エクスポートは資産ステータスを自動承認にはしない'
    ],
    keyPointsEn: [
      'Triage "Candidate" and "Requires Investigation" assets in Defender EASM and confirm/reject them into the "Approved" inventory',
      'Discovery infers ownership from WHOIS, DNS, and SSL certificates, requiring human validation',
      'Deleting candidates blindly risks missing real shadow IT or forgotten organizational assets'
    ],
    referenceTopic: 'Microsoft Defender EASM 資産インベントリのトリアージ'
  },
  {
    id: 'sc500-q58',
    number: 58,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Functions の基本認証無効化と最小 TLS バージョン 1.2 の強制',
    titleEn: 'Disabling Basic Auth and Enforcing TLS 1.2 on Azure Functions',
    scenarioJa: `Contoso 社は、支払い通知を処理する Azure Functions アプリを実行しています。監査の結果、次の 2 つの指摘事項が見つかりました：

- アプリのデプロイ資格情報を使用して、Microsoft Entra ID をバイパスし、FTP および SCM (Kudu) エンドポイント経由でユーザー名とパスワードを使ってコードを発行できてしまう。
- クライアントが関数エンドポイントを呼び出す際、依然として TLS 1.0 および TLS 1.1 でネゴシエーションできてしまう。

関数コードを変更することなく、関数アプリのプラットフォーム構成を使用して両方の指摘事項を修復する必要があります。`,
    scenarioEn: `Contoso runs an Azure Functions app that processes payment notifications. An audit produces two findings:

- Deployment credentials for the app can be used to publish code over FTP and through the SCM (Kudu) endpoint using a username and password, bypassing Microsoft Entra ID.
- Clients are still able to negotiate TLS 1.0 and TLS 1.1 when calling the function endpoints.

You must remediate both findings using platform configuration on the function app, without changing the function code.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'SCM と FTP の基本認証を無効化し、最小受信 TLS バージョンを 1.2 に設定する',
        textEn: 'Disable basic auth for SCM and FTP, and set minimum inbound TLS to 1.2.',
        isCorrect: true,
        explanationJa: '【正解】基本認証を無効にすると、FTP と SCM の両方でユーザー名・パスワードによるデプロイ経路が削除され、Microsoft Entra ID 経由での認証が強制されます。さらに最小 TLS バージョンを 1.2 に設定すると、プラットフォームが古いプロトコル バージョン (TLS 1.0 / 1.1) でのハンドシェイクを拒否するようになります。',
        explanationEn: 'Turning off basic authentication removes the username and password path for both FTP and SCM, forcing deployments to authenticate through Microsoft Entra ID. Setting the minimum TLS version to 1.2 causes the platform to reject handshakes that negotiate the older protocol versions.'
      },
      {
        id: 'B',
        textJa: '関数アプリでシステム割り当てマネージド ID とネットワーク保護を有効化する',
        textEn: 'Enable a system-assigned managed identity on the Azure Functions app.',
        isCorrect: false,
        explanationJa: '【不正解】マネージド ID はアプリが他の Azure サービスを送信呼び出し (アウトバウンド) するための ID を与えるものです。発行資格情報を無効にすることはなく、エンドポイントが受け入れる TLS バージョンにも影響しません。',
        explanationEn: 'A managed identity gives the app an identity for calling other Azure services outbound. It does not disable publishing credentials and has no effect on the TLS versions the endpoint accepts.'
      },
      {
        id: 'C',
        textJa: 'ID プロバイダーに Entra ID を指定し Easy Auth（App Service 認証）を有効にする',
        textEn: 'Enable App Service Easy Auth using Microsoft Entra ID as provider.',
        isCorrect: false,
        explanationJa: '【不正解】Easy Auth はアプリケーションの HTTP エンドポイントへの呼び出し元を認証するものですが、FTP や SCM 上の発行資格情報は別個に有効なまま残ります。最小 TLS バージョンも変更されません。',
        explanationEn: 'Easy Auth authenticates callers of the application\'s HTTP endpoints, while the publishing credentials on FTP and SCM remain valid and separate. The minimum TLS version would also stay unchanged.'
      },
      {
        id: 'D',
        textJa: 'Contoso の企業 IP 範囲のみを許可する受信アクセス制限規則を追加構成する',
        textEn: 'Configure inbound access restrictions allowing only corporate IP ranges.',
        isCorrect: false,
        explanationJa: '【不正解】IP 制限はアプリに到達できる接続元を制限しますが、許可された範囲内の誰でも基本認証を引き続き利用できる状態のままになります。また TLS プロトコル ネゴシエーションも変更されません。',
        explanationEn: 'IP restrictions limit who can reach the app but leave basic authentication enabled for anyone inside the allowed ranges. They also do not change TLS protocol negotiation.'
      }
    ],
    overallExplanationJa: `Azure App Service および Azure Functions は、ユーザー名とパスワードを受け入れる 2 つのデプロイ パス (FTP/FTPS および SCM/Kudu サイト) を公開しています。

両方で**基本認証 (Basic authentication) を無効**にすることで、デプロイメントが Microsoft Entra ID 認証に切り替わり、条件付きアクセスと監査の制御下に置かれます。また、**最小受信 TLS バージョンを 1.2 に引き上げる**ことで、非推奨となった TLS 1.0/1.1 のハンドシェイクをプラットフォーム側で拒否させることができます。両設定は Azure Policy により大規模に強制することも可能です。`,
    overallExplanationEn: `Azure App Service and Azure Functions expose two deployment paths that accept a username and password: FTP or FTPS, and the SCM or Kudu site. Disabling basic authentication on both switches deployment to Microsoft Entra ID authentication, which brings publishing under Conditional Access and audit. The minimum inbound TLS version is a separate platform setting, and raising it to 1.2 makes the platform refuse handshakes for the deprecated protocol versions the audit flagged. Managed identities, access restrictions, and Easy Auth each solve real problems, but none of them turn off publishing credentials or govern TLS negotiation. Both settings can be enforced at scale with Azure Policy so that new function apps inherit the hardened configuration.`,
    keyPointsJa: [
      'FTP / SCM (Kudu) のパスワード デプロイ遮断 ＝ SCM と FTP 発行エンドポイントの基本認証を無効化',
      'TLS 1.0 / 1.1 の拒否 ＝ 最小受信 TLS バージョンを 1.2 に設定',
      'Easy Auth はアプリ HTTP エンドポイント認証用であり、FTP / SCM の発行資格情報を無効化しない'
    ],
    keyPointsEn: [
      'Disable basic authentication for both SCM and FTP publishing endpoints to enforce Microsoft Entra ID deployment auth',
      'Set Minimum Inbound TLS Version to 1.2 to block TLS 1.0 and 1.1 handshakes',
      'Managed identities, Easy Auth, and IP restrictions do not disable publishing credentials or enforce TLS 1.2'
    ],
    referenceTopic: 'Azure Functions / App Service の基本認証無効化と TLS 1.2 強制'
  },
  {
    id: 'sc500-q59',
    number: 59,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database 監査ログの Microsoft Sentinel への直接統合',
    titleEn: 'Integrating Azure SQL Database Auditing Logs with Microsoft Sentinel',
    scenarioJa: `Contoso Ltd. は Azure SQL Database 上で基幹業務アプリケーションを運用しています。セキュリティ チームは次のことを望んでいます：

- SQL Database のすべてのデータベース アクセス イベント (DML、DDL、およびログイン イベント) の監査を有効にする。
- 監査データを Microsoft Sentinel に直接フィードし、他のセキュリティ シグナルと相関させて異常なデータベース アクティビティを検出する分析ルールで使用できるようにする。
- Kusto 照会言語 (KQL) を使用して過去の監査レコードをクエリできる機能を維持する。

最小限の管理作業でこれらの要件を満たすように Azure SQL Database の監査を構成する必要があります。`,
    scenarioEn: `Contoso Ltd. runs a business-critical application on Azure SQL Database. The security team wants to:

- Enable auditing of all database access events (DML, DDL, and login events) for the SQL Database.
- Have the audit data feed directly into Microsoft Sentinel so it can be correlated with other security signals and used in analytics rules for detecting anomalous database activity.
- Retain the ability to query historical audit records using Kusto Query Language (KQL).

You need to configure auditing for the Azure SQL Database to meet these requirements with the least administrative effort.`,
    questionJa: '監査ログの送信先 (Destination) として何を構成すべきですか？',
    questionEn: 'What should you configure as the audit log destination?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel ワークスペースに接続されている Log Analytics ワークスペースに監査ログを送信するように SQL サーバー (またはデータベース) の監査を構成する',
        textEn: 'Configure auditing on the SQL server (or database) to send audit logs to a Log Analytics workspace that is connected to the Microsoft Sentinel workspace.',
        isCorrect: true,
        explanationJa: '【正解】Azure SQL Database 監査は Log Analytics ワークスペースへの監査ログの直接送信をサポートしており、そのワークスペースが Microsoft Sentinel に接続されていれば、最小限のセットアップで KQL クエリ、分析ルール、および他のセキュリティ シグナルとの相関分析に即座に利用できるようになります。',
        explanationEn: 'Azure SQL Database auditing supports sending audit logs directly to a Log Analytics workspace, and when that workspace is connected to Microsoft Sentinel, the data becomes immediately available for KQL queries, analytics rules, and correlation with other security signals with minimal setup.'
      },
      {
        id: 'B',
        textJa: 'Azure Storage アカウントに監査ログを書き込むように SQL サーバーの監査を構成し、スケジュールされた Azure Logic App を使用して手動でログを Microsoft Sentinel にインポートする',
        textEn: 'Configure auditing on the SQL server to write audit logs to an Azure Storage account, then manually import the logs into Microsoft Sentinel using a scheduled Azure Logic App.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Storage は有効な監査送信先ですが、KQL ベースの分析ルール向けに Microsoft Sentinel とネイティブには統合されず、ネイティブかつ直接的な選択肢が存在するにもかかわらずデータを移動するための Logic App を手動構築すると不要な管理オーバーヘッドが増加します。',
        explanationEn: 'While Azure Storage is a valid audit destination, it does not natively integrate with Microsoft Sentinel for KQL-based analytics rules, and manually building a Logic App to move data adds unnecessary administrative overhead when a direct, native option exists.'
      },
      {
        id: 'C',
        textJa: '追加の構成なしで自動的にすべての監査イベントを Microsoft Sentinel に転送するため、Microsoft Defender for SQL のみを有効にする',
        textEn: 'Enable Microsoft Defender for SQL only, since it automatically forwards all audit events to Microsoft Sentinel without additional configuration.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for SQL は脅威検出や脆弱性評価のアラートを提供するものであり、Microsoft Sentinel への一般的な監査ログ ストリーミングは行いません。DML/DDL/ログイン イベントをキャプチャしてルーティングするには、監査 (Auditing) を明示的に構成する必要があります。',
        explanationEn: 'Microsoft Defender for SQL provides threat detection and vulnerability assessment alerts, not general audit log streaming to Microsoft Sentinel. Auditing must still be explicitly configured to capture and route DML/DDL/login events.'
      },
      {
        id: 'D',
        textJa: 'Event Hub に監査ログを送信するように SQL サーバーの監査を構成し、Azure SQL Database トランザクション ログから直接読み取るように Microsoft Sentinel を構成する',
        textEn: 'Configure auditing on the SQL server to send audit logs to an Event Hub, and configure Microsoft Sentinel to read directly from the Azure SQL Database transaction log.',
        isCorrect: false,
        explanationJa: '【不正解】Event Hub はサードパーティ SIEM 等向けの有効な監査送信先ですが、Microsoft Sentinel は SQL トランザクション ログから直接読み取ることはできず、ネイティブな Log Analytics ワークスペース統合と比較して不要な複雑さを招きます。',
        explanationEn: 'While Event Hub is a valid audit destination for downstream SIEM tools, Microsoft Sentinel does not read directly from the SQL transaction log, and this option introduces unnecessary complexity compared to the native Log Analytics workspace integration.'
      }
    ],
    overallExplanationJa: `Azure SQL Database および Azure SQL Managed Instance の監査機能は、3 つの送信先 (Azure Storage、Log Analytics ワークスペース、Event Hub) をサポートしています。

最小限の構成で Microsoft Sentinel とシームレスに統合し、KQL ベースのクエリと分析ルールを有効にするには、**Sentinel が有効化された Log Analytics ワークスペースへ監査ログを送信する**ことがネイティブかつ推奨されるアプローチとなります。`,
    overallExplanationEn: `Azure SQL Database and Azure SQL Managed Instance auditing supports three destinations: Azure Storage, Log Analytics workspace, and Event Hub. To achieve seamless integration with Microsoft Sentinel and enable KQL-based querying and analytics rules with minimal configuration, audit logs should be sent to a Log Analytics workspace connected to the Sentinel workspace, which is the native and recommended approach for SIEM integration.`,
    keyPointsJa: [
      'Azure SQL 監査ログを最小負荷で Sentinel / KQL で活用 ＝ Sentinel 接続済みの Log Analytics ワークスペースを送信先に設定',
      'Azure Storage 送信や Event Hub＋カスタム連携よりネイティブで圧倒的に低運用負荷',
      'Defender for SQL は脅威アラート機能であり、DML / DDL / ログインの全監査ログ転送機能ではない'
    ],
    keyPointsEn: [
      'Send Azure SQL auditing logs directly to the Log Analytics workspace connected to Microsoft Sentinel',
      'Immediately enables KQL queries, analytics rules, and cross-signal correlation with minimal overhead',
      'Defender for SQL emits alerts, not full DML/DDL/login audit trails'
    ],
    referenceTopic: 'Azure SQL Database 監査ログの Sentinel 統合'
  },
  {
    id: 'sc500-q60',
    number: 60,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '保存済みアクセス ポリシー (Stored Access Policy) を使用した即時失効可能な SAS',
    titleEn: 'Revocable Service SAS via Stored Access Policy on Blob Container',
    scenarioJa: `Contoso Ltd. は、"contracts" という名前の Azure Storage アカウント コンテナーに機密契約書を保存しています。サードパーティの監査法人に対し、今後 30 日間、このコンテナー内の BLOB への読み取り専用アクセスを許可する必要があります。セキュリティ チームは、その期間中いつでも (同じキーを使用している他のアプリケーションに支障をきたすストレージ アカウント アクセス キーの再生成を行うことなく)、監査人のアクセス権を即座に取り消せるようにしたいと考えています。

最小限の管理オーバーヘッドでこれらの要件を満たすアクセスを構成する必要があります。`,
    scenarioEn: `Contoso Ltd. stores confidential contracts in an Azure Storage account container named "contracts". A third-party auditing firm needs read-only access to the blobs in this container for the next 30 days. The security team wants the ability to immediately revoke the auditor's access at any time during that period without regenerating the storage account access keys (which would disrupt other applications using the same keys).

You need to configure access that meets these requirements with minimal administrative overhead.`,
    questionJa: '何を実装すべきですか？',
    questionEn: 'What should you implement?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージ アカウントをスコープとしたアカウント レベルの Shared Access Signature (SAS) を生成し、有効期限を 30 日間に設定する',
        textEn: 'Generate an account-level shared access signature (SAS) scoped to the storage account and set the expiry to 30 days.',
        isCorrect: false,
        explanationJa: '【不正解】アカウント レベル SAS はストレージ アカウント内の複数サービスとリソースにわたる広範なアクセスを許可するため、1 つのコンテナーへの読み取りアクセスのみ必要なケースでは最小権限の原則に反します。さらに保存済みアクセス ポリシーを使用しないアドホック SAS は、アカウント キーを再生成しない限り個別に取り消すことができません。',
        explanationEn: 'An account-level SAS grants broad access across multiple services and resources in the storage account, which violates the principle of least privilege since the auditor only needs read access to one container. Additionally, an ad-hoc SAS without a stored access policy cannot be revoked individually without regenerating the account keys, which would disrupt other applications.'
      },
      {
        id: 'B',
        textJa: '30 日後にストレージ アカウント アクセス キーを手動で再生成することとし、初期の読み取り専用アクセス用に新しい接続文字列を生成して監査人と共有する',
        textEn: 'Regenerate the storage account key after 30 days and share a new connection string with the auditor for the initial access.',
        isCorrect: false,
        explanationJa: '【不正解】ストレージ アカウント キーを再生成すると、そのキーを使用しているすべての SAS トークンと既存アプリケーションに影響が及ぶため、回避すべきとされている広範な障害を引き起こします。また、期間中の監査人に限定した即時失効も実現できません。',
        explanationEn: 'Regenerating the storage account key affects all SAS tokens and applications using that key, causing broader disruption exactly as the scenario says should be avoided. This approach also does not provide fine-grained, immediate revocation specific to the auditor.'
      },
      {
        id: 'C',
        textJa: '"contracts" コンテナーに保存済みアクセス ポリシー (Stored access policy) を作成し、その保存済みアクセス ポリシーを参照するサービス SAS を生成する',
        textEn: 'Create a stored access policy on the "contracts" container, then generate a service SAS that references the stored access policy.',
        isCorrect: true,
        explanationJa: '【正解】コンテナー上に定義された保存済みアクセス ポリシーにより、アクセス許可・開始時刻・有効期限を一元的に設定でき、このポリシーを参照して発行されたすべての SAS トークンがその設定を継承します。ポリシーはサーバー側に保存されるため、ストレージ アカウント キーを再生成することなく、保存済みアクセス ポリシーを変更または削除するだけでいつでも即座にアクセスを取り消すことができます。',
        explanationEn: 'A stored access policy defined on the container lets you set permissions, start time, and expiry centrally, and any SAS tokens issued that reference this policy inherit those settings. Because the policy is stored server-side, you can revoke access instantly at any time by simply modifying or deleting the stored access policy, without needing to regenerate the storage account keys.'
      },
      {
        id: 'D',
        textJa: 'コンテナーをスコープとして Azure RBAC を使用し、監査人の Microsoft Entra ID アカウントに「ストレージ BLOB データ閲覧者」ロールを割り当てる',
        textEn: 'Assign the auditor\'s Microsoft Entra ID account the Storage Blob Data Reader role using Azure RBAC, scoped to the container.',
        isCorrect: false,
        explanationJa: '【不正解】Storage Blob Data Reader を用いた Azure RBAC は有効なアクセス制御手段ですが、テナントに認識された Microsoft Entra ID を監査人が持っている必要があり、ゲスト アカウントのプロビジョニングを伴わない外部の第三者監査人向けとしては管理オーバーヘッドが高くなります。期限付きの即時失効可能な外部アクセスには保存済みアクセス ポリシー付きサービス SAS がより直接的です。',
        explanationEn: 'While Azure RBAC with Storage Blob Data Reader is a valid access control method, it requires the auditor to have a Microsoft Entra identity known to the tenant, which is often impractical for external third-party auditors without guest account provisioning. The scenario emphasizes minimal administrative overhead and a simple time-bound revocable mechanism, which a stored access policy handles more directly for external parties.'
      }
    ],
    overallExplanationJa: `**保存済みアクセス ポリシー (Stored access policy)** は、コンテナー レベルで SAS トークンの制約 (アクセス許可、開始時刻、有効期限) を定義するためのサーバー側の仕組みです。

このポリシーを参照するサービス SAS を発行しておけば、他のコンシューマーに影響を与えるストレージ アカウント キーの再生成を行うことなく、ポリシー自体を更新または削除するだけで即座にアクセスを取り消すことが可能になります。外部監査人などの一時的かつ失効可能性が求められるアクセス付与に最適な設計です。`,
    overallExplanationEn: `Stored access policies provide a server-side mechanism to define constraints (permissions, start/expiry time) for SAS tokens at the container level, enabling administrators to revoke or modify access instantly by updating the policy—without regenerating storage account keys that would impact other consumers. This makes it the ideal solution for granting time-limited, revocable access to external parties like auditors.`,
    keyPointsJa: [
      'ストレージ キー再生成なしで特定の SAS のみを即時失効 ＝ コンテナーに保存済みアクセス ポリシーを作成し、それを参照するサービス SAS を発行',
      'アドホック SAS (ポリシーなし) は有効期限前に取り消すにはアカウント キー再生成が必要になる',
      'アカウント レベル SAS はコンテナー単位の最小権限要件に反する'
    ],
    keyPointsEn: [
      'Create a stored access policy on the container and issue a service SAS referencing that policy',
      'Deleting or modifying the server-side stored access policy revokes the SAS instantly without rotating account keys',
      'Ad-hoc SAS without a stored access policy cannot be revoked individually prior to expiration'
    ],
    referenceTopic: 'Azure Storage 保存済みアクセス ポリシーとサービス SAS'
  },
  {
    id: 'sc500-q61',
    number: 61,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Storage ファイアウォール規則 (IP 規則と仮想ネットワーク規則の併用)',
    titleEn: 'Configuring Azure Storage Firewall IP Rules and Virtual Network Rules',
    scenarioJa: `あなたは、機密性の高い財務データを含む stgfinance01 という名前の Azure Storage アカウントのセキュリティを実装しています。会社には次の要件があります：

- オンプレミスの企業ネットワーク (パブリック IP 範囲 203.0.113.0/24) から接続するユーザーがストレージ アカウントにアクセスできること。
- Azure 仮想ネットワークの特定のサブネット (サブネットではすでに Microsoft.Storage サービス エンドポイントが有効化されている) で実行されているアプリケーション サーバーがストレージ アカウントにアクセスできること。
- パブリック インターネットからのその他すべてのトラフィックが拒否されること。

管理作業を最小限に抑えながらこれらの要件を満たすように、ストレージ アカウントのネットワーク設定を構成する必要があります。`,
    scenarioEn: `You are implementing security for an Azure Storage account named stgfinance01 that contains sensitive financial data. The company has the following requirements:

- Users connecting from the on-premises corporate network (public IP range 203.0.113.0/24) must be able to access the storage account.
- Application servers running in a specific subnet of an Azure virtual network (the subnet already has the Microsoft.Storage service endpoint enabled) must be able to access the storage account.
- All other traffic from the public internet must be denied.

You need to configure the Networking settings on the storage account to meet these requirements while minimizing administrative effort.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '既定のネットワーク アクセス規則を [拒否] (Deny) に設定し、「信頼されたサービス リスト上の Azure サービスにアクセスを許可する」を有効にして、それ以上のアクションは行わない',
        textEn: 'Set the default network access rule to Deny, then enable "Allow Azure services on the trusted services list" and take no further action',
        isCorrect: false,
        explanationJa: '【不正解】「信頼された Microsoft サービスを許可」設定は、Azure Backup や Azure Site Recovery など特定のファーストパーティ Azure サービスにファイアウォールのバイパスを許可するのみであり、オンプレミス ネットワークや仮想ネットワーク サブネット内のアプリケーション サーバーへのアクセスは許可されません。',
        explanationEn: 'The "Allow trusted Microsoft services" setting only permits specific first-party Azure services (such as Azure Backup or Azure Site Recovery) to bypass the firewall—it does not grant access to on-premises networks or application servers in a virtual network subnet, so this alone would not meet the stated requirements.'
      },
      {
        id: 'B',
        textJa: '既定のネットワーク アクセス規則を [拒否] (Deny) に設定し、ストレージ アカウント用のプライベート エンドポイントを作成してすべてのファイアウォール規則を削除する',
        textEn: 'Set the default network access rule to Deny, then create a private endpoint for the storage account and remove all firewall rules',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントは仮想ネットワーク内からのストレージ アクセスを保護する有効な方法ですが、オンプレミスのパブリック IP 範囲 (203.0.113.0/24) からのアクセスを許可する要件に対処しておらず、すべてのファイアウォール規則を削除すると企業ネットワークからのアクセス制御ができなくなります。',
        explanationEn: 'While a private endpoint is a valid method to secure storage access from within a virtual network, it does not address the requirement to allow access from an on-premises public IP range, and removing all firewall rules would eliminate the ability to control access from the corporate network.'
      },
      {
        id: 'C',
        textJa: '既定のネットワーク アクセス規則を [許可] (Allow) に設定し、企業範囲外の拒否 IP 範囲リストに 203.0.113.0/24 以外の通信を追加する',
        textEn: 'Set the default network access rule to Allow, then add 203.0.113.0/24 and unauthorized external networks to the list of denied IP ranges',
        isCorrect: false,
        explanationJa: '【不正解】既定のアクションを Allow にするとすべてのパブリック インターネット トラフィックが既定で許可され、その他すべてのトラフィックを拒否する要件に違反します。またストレージ ファイアウォールは特定 IP 範囲の「拒否リスト」をサポートしておらず、既定のアクションと許可ルールの組み合わせのみをサポートします。',
        explanationEn: 'Setting the default action to Allow permits all public internet traffic by default, which violates the requirement to deny all other traffic; additionally, the storage firewall does not support a "deny list" for specific IP ranges—it only supports allow rules combined with a default action.'
      },
      {
        id: 'D',
        textJa: '既定のネットワーク アクセス規則を [拒否] (Deny) に設定し、203.0.113.0/24 の IP ネットワーク規則と、特定のサブネット用の仮想ネットワーク規則を追加する',
        textEn: 'Set the default network access rule to Deny, then add an IP network rule for 203.0.113.0/24 and a virtual network rule for the specific subnet',
        isCorrect: true,
        explanationJa: '【正解】既定のアクションを Deny に設定するとすべてのパブリック トラフィックが既定でブロックされ、Azure Storage ファイアウォールでは IP ネットワーク規則 (オンプレミス範囲用) と仮想ネットワーク規則 (Microsoft.Storage サービス エンドポイントが有効化されたサブネット用) を組み合わせて、必要な送信元のみを明示的に許可できます。',
        explanationEn: 'Setting the default action to Deny blocks all public traffic by default, and the Azure Storage firewall supports combining IP network rules (for the on-premises range) with virtual network rules (for the subnet with the Microsoft.Storage service endpoint) to explicitly allow only the required sources.'
      }
    ],
    overallExplanationJa: `Azure Storage アカウントのファイアウォール規則では、単一の「既定で拒否 (Default-deny)」ポリシーの下で **IP ネットワーク規則**と**仮想ネットワーク規則**を組み合わせることができ、オンプレミスのパブリック IP 範囲と特定の Azure 仮想ネットワーク サブネットの双方からのきめ細かなアクセス制御を実現できます。

すでにサブネット側で Microsoft.Storage サービス エンドポイントが有効化されているため、既定規則を Deny にした上で両方の許可規則を追加するこのアプローチにより、その他すべてのパブリック トラフィックをブロックしつつ最小限の労力で両方の接続要件を満たせます。`,
    overallExplanationEn: `Azure Storage account firewall rules allow administrators to combine IP network rules and virtual network rules under a single default-deny policy, enabling granular access control from both on-premises networks and specific Azure virtual network subnets. Combining these firewall rules correctly implements this layered approach, satisfying both connectivity requirements while blocking all other public traffic.`,
    keyPointsJa: [
      '既定アクセスを Deny にして特定パブリック IP とサービス エンドポイント サブネットのみ許可 ＝ IP ネットワーク規則 ＋ 仮想ネットワーク規則を追加',
      'Storage ファイアウォールには「拒否リスト (Deny list)」機能はなく、Default Deny ＋ Allow ルールで構成する',
      '「信頼されたサービス」のみではオンプレミス IP や通常の VM サブネットからのアクセスは許可されない'
    ],
    keyPointsEn: [
      'Set Storage firewall default action to Deny, then add an IP rule (203.0.113.0/24) and a VNet rule for the service-endpoint subnet',
      'Azure Storage firewalls only support allow-lists under a default-deny posture, not IP deny-lists',
      'Trusted Microsoft services exception applies only to specific first-party Azure services, not corporate IPs or VMs'
    ],
    referenceTopic: 'Azure Storage ファイアウォールと仮想ネットワーク規則'
  },
  {
    id: 'sc500-q62',
    number: 62,
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure RBAC モデルの Key Vault で鍵エクスポートなしに署名する最小権限ロール',
    titleEn: 'Least-Privilege RBAC Role for Signing in Azure Key Vault (Key Vault Crypto User)',
    scenarioJa: `Azure でホストされているドキュメント署名サービスは、送信ドキュメントへの署名およびデータ暗号化キーのアンラップ (Unwrap) を行うために Azure Key Vault に保存された RSA キーを使用する必要があります。コンテナーは Azure ロールベース アクセス制御 (RBAC) アクセス許可モデルを使用しており、サービスはユーザー割り当てマネージド ID で認証します。

セキュリティ ポリシーでは、キー マテリアルがアプリケーションにエクスポート可能であってはならず、またこの ID がコンテナー内でキーを作成、ローテーション、または削除できてはならないと定められています。`,
    scenarioEn: `An Azure-hosted document signing service must use an RSA key stored in an Azure key vault to sign outbound documents and to unwrap data encryption keys. The vault uses the Azure role-based access control permission model, and the service authenticates with a user-assigned managed identity.

Security policy states that the key material must never be exportable to the application, and the identity must not be able to create, rotate, or delete keys in the vault.`,
    questionJa: 'キー コンテナーをスコープとして、マネージド ID にどの組み込みロールを割り当てるべきですか？',
    questionEn: 'Which built-in role should you assign to the managed identity, scoped to the key vault?',
    options: [
      {
        id: 'A',
        textJa: 'Key Vault シークレット ユーザー (Key Vault Secrets User)',
        textEn: 'Key Vault Secrets User',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Secrets User はシークレット値に対する読み取りアクセス権のみを付与し、キーに対する暗号化操作のアクセス許可は一切付与しません。署名サービスは暗号操作を実行できません。',
        explanationEn: 'Key Vault Secrets User grants read access to secret values only and confers no permissions over keys. The signing service would be unable to perform any cryptographic operation.'
      },
      {
        id: 'B',
        textJa: 'Key Vault 暗号化責任者 (Key Vault Crypto Officer)',
        textEn: 'Key Vault Crypto Officer',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Crypto Officer にはキーの作成、インポート、ローテーション、削除などのライフサイクル管理操作が含まれます。これは署名ワークロードが必要とする権限を超えており、指定された制限に違反します。',
        explanationEn: 'Key Vault Crypto Officer includes management operations on keys such as create, import, rotate, and delete. That exceeds what a signing workload needs and violates the stated restriction.'
      },
      {
        id: 'C',
        textJa: 'Key Vault 閲覧者 (Key Vault Reader)',
        textEn: 'Key Vault Reader',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault Reader はキー名やプロパティなどのコンテナーおよびオブジェクトのメタデータの読み取りを許可しますが、暗号化操作は一切許可しないため、署名処理は失敗します。',
        explanationEn: 'Key Vault Reader allows reading vault and object metadata, such as key names and properties. It does not permit any cryptographic operation, so signing would fail.'
      },
      {
        id: 'D',
        textJa: 'Key Vault 暗号ユーザー (Key Vault Crypto User)',
        textEn: 'Key Vault Crypto User',
        isCorrect: true,
        explanationJa: '【正解】Key Vault Crypto User は、コンテナーにすでに存在するキーを使用した署名 (sign)、検証 (verify)、ラップ (wrap)、およびアンラップ (unwrap) などの暗号化操作を許可します。これらの操作はコンテナー境界内で実行され、秘密鍵マテリアルが呼び出し元に返されることはないため、エクスポート不可要件も満たします。',
        explanationEn: 'Key Vault Crypto User permits cryptographic operations such as sign, verify, wrap, and unwrap using keys that already exist in the vault. The operations execute inside the vault and the private key material is never returned to the caller, which satisfies the non-exportability requirement.'
      }
    ],
    overallExplanationJa: `Azure Key Vault の RBAC モデルでは「キー オブジェクトのライフサイクル管理」と「既存キーを使った暗号操作」が明確に分離されています：
- **Key Vault Crypto Officer**: キーの作成・インポート・ローテーション・削除などの管理操作を含む。
- **Key Vault Crypto User**: 既存キーを用いた署名・検証・ラップ・アンラップなどの暗号操作のみを実行可能。

暗号操作は Key Vault の境界内部で実行されるため、アプリケーションは署名結果やアンラップされたキーのみを受け取り、秘密鍵そのものにはアクセスできません。さらに割り当てスコープをリソース グループやサブスクリプションではなく個別のキー コンテナーに限定することで、最小権限を徹底できます。`,
    overallExplanationEn: `Azure Key Vault separates management of key objects from use of those keys, and the built-in roles follow that split. Key Vault Crypto Officer covers lifecycle operations such as creating, importing, rotating, and deleting keys, whereas Key Vault Crypto User covers only the cryptographic operations performed with existing keys. Because those operations run inside the vault boundary, the application receives the signature or the unwrapped key but never the private key itself, which is exactly what the non-exportability policy demands. Secrets and certificate roles apply to different object types and would not grant key operations at all, while the reader role is metadata-only. Scoping the assignment to the individual vault rather than the resource group or subscription keeps the grant as narrow as possible.`,
    keyPointsJa: [
      '既存キーでの署名 (sign)・アンラップ (unwrap) のみ許可し、作成・ローテーション・削除は禁止 ＝ Key Vault Crypto User',
      'Key Vault Crypto Officer はキーの作成・ローテーション・削除権限を持つため過剰',
      '暗号操作は Key Vault 境界内で完結するため、秘密鍵マテリアルがアプリ側へエクスポートされることはない'
    ],
    keyPointsEn: [
      'Assign Key Vault Crypto User for sign, verify, wrap, and unwrap operations without key lifecycle management',
      'Key Vault Crypto Officer allows creating, rotating, and deleting keys (violates policy)',
      'Cryptographic operations execute inside Key Vault so private key material is never exported'
    ],
    referenceTopic: 'Azure Key Vault RBAC の Key Vault Crypto User ロール'
  },
  {
    id: 'sc500-q63',
    number: 63,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '一時アクセス パス (TAP) による新規リモート社員の認証方法ブートストラップ',
    titleEn: 'Bootstrapping Passwordless Registration with Temporary Access Pass (TAP)',
    scenarioJa: `Contoso Ltd. は 200 人の新しいリモート従業員をオンボーディングしています。初日に各従業員は個人のスマートフォンを使用して、パスワードレス サインイン用の Microsoft Authenticator アプリをセットアップする必要があります。従業員はリモート勤務であり、これまで一度も Microsoft Entra ID にサインインしたことがないため、初回サインインと登録プロセスを完了するために使用できる他の登録済み認証方法 (パスワード、FIDO2 キー、または既存の Authenticator 登録など) を何も持っていません。

IT 部門は、各新規従業員に対し、24 時間後に期限切れになり、初回の認証方法登録を完了するためだけに使用できる短命な資格情報を発行したいと考えています。`,
    scenarioEn: `Contoso Ltd. is onboarding 200 new remote employees. On their first day, each employee must set up the Microsoft Authenticator app for passwordless sign-in using their personal smartphone. Since the employees are remote and have never signed in to Microsoft Entra ID before, they do not possess any other registered authentication method (such as a password, FIDO2 key, or existing Authenticator registration) that could be used to complete the initial sign-in and registration process. IT wants to issue each new employee a short-lived credential that expires after 24 hours and can be used only to complete initial authentication method registration.`,
    questionJa: 'この要件を満たすために、Microsoft Entra 管理者はどの認証方法を構成すべきですか？',
    questionEn: 'Which authentication method should the Microsoft Entra administrator configure to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: '証明書ベース認証 (Certificate-based authentication)',
        textEn: 'Certificate-based authentication',
        isCorrect: false,
        explanationJa: '【不正解】証明書ベース認証には公開キー基盤 (PKI) と発行済みデジタル証明書が必要であり、より複雑で独立した認証メカニズムです。Microsoft Authenticator アプリの登録をブートストラップするための短命なオンボーディング資格情報として設計されたものではありません。',
        explanationEn: 'Certificate-based authentication requires a Public Key Infrastructure (PKI) and issued digital certificates, which is a separate, more complex authentication mechanism. It is not designed as a short-lived onboarding credential for bootstrapping registration of the Microsoft Authenticator app.'
      },
      {
        id: 'B',
        textJa: 'Windows Hello for Business',
        textEn: 'Windows Hello for Business',
        isCorrect: false,
        explanationJa: '【不正解】Windows Hello for Business は特定の Windows デバイスに紐付けられた生体認証または PIN ベースの認証方法であり、デバイス登録とエンロールメントが必要です。既存の資格情報を持たないリモート従業員が個人のスマートフォンで Authenticator アプリを登録するシナリオには対応しません。',
        explanationEn: 'Windows Hello for Business is a device-bound biometric or PIN-based authentication method tied to a specific Windows device and requires device registration and enrollment. It does not address the scenario of remote employees using personal smartphones to register the Authenticator app without an existing credential.'
      },
      {
        id: 'C',
        textJa: 'FIDO2 セキュリティ キー (FIDO2 security key)',
        textEn: 'FIDO2 security key',
        isCorrect: false,
        explanationJa: '【不正解】FIDO2 セキュリティ キーはそれ自体がパスワードレス認証方法であり、ユーザーがすでに物理ハードウェア キーを所持して登録済みである必要があります。他方式の登録を有効化するためのブートストラップ資格情報ではなく、初日に 200 名のリモート社員へ物理キーをプロビジョニングするのも現実的ではありません。',
        explanationEn: 'A FIDO2 security key is itself a passwordless authentication method that requires the user to already possess and register the physical hardware key; it is not a bootstrap credential used to enable registration of other methods remotely. Provisioning physical keys to 200 remote employees on day one is also impractical compared to a temporary passcode.'
      },
      {
        id: 'D',
        textJa: '一時アクセス パス (Temporary Access Pass)',
        textEn: 'Temporary Access Pass (TAP)',
        isCorrect: true,
        explanationJa: '【正解】一時アクセス パス (TAP) は管理者によって発行される時間制限付きのパスコードであり、既存の資格情報を必要とせずにユーザーがサインインして Microsoft Authenticator などのパスワードレス方式を含む他の認証方法を登録できるようにします。TAP は 24 時間などの限られた有効期間で構成でき、まさにこのようなオンボーディング シナリオ向けに設計されています。',
        explanationEn: 'A Temporary Access Pass (TAP) is a time-limited passcode issued by an administrator that allows a user to sign in and register other authentication methods, including passwordless methods like Microsoft Authenticator, without needing an existing credential. TAP can be configured with a limited lifetime (such as 24 hours) and is specifically designed for onboarding scenarios like this one.'
      }
    ],
    overallExplanationJa: `**一時アクセス パス (Temporary Access Pass / TAP)** は、既存の認証方法を持たないユーザーに対してパスワードレス認証や MFA の初期登録を可能にする「鶏と卵」の問題を解決するために特別に設計された Microsoft Entra ID の機能です。

管理者は TAP の有効期間 (例: 24 時間)、使用制限、および 1 回限り／再利用可能の設定を構成できるため、リモートの新規従業員が初日に Microsoft Authenticator や FIDO2 キー等をセルフ登録するオンボーディング シナリオに最適です。`,
    overallExplanationEn: `The Temporary Access Pass is the Microsoft Entra ID feature purpose-built to solve the "chicken-and-egg" problem of enabling passwordless or MFA registration for users who have no existing authentication method. Administrators can configure TAP lifetime, usage limits, and one-time or reusable settings, making it ideal for time-bound onboarding scenarios like this one.`,
    keyPointsJa: [
      '既存認証手段を持たない新規ユーザーがパスワードレス方式 (Authenticator / FIDO2) を初期登録するブートストラップ ＝ 一時アクセス パス (TAP)',
      '有効期間 (例: 24 時間) や 1 回限り使用等の制限を管理者が設定可能',
      'FIDO2 キーや Windows Hello for Business はオンボーディング用の一時パスコードではない'
    ],
    keyPointsEn: [
      'Temporary Access Pass (TAP) is a time-limited admin-issued passcode for bootstrapping passwordless/MFA registration',
      'Configurable lifetime (e.g., 24 hours) and one-time/reusable policies fit remote day-one onboarding',
      'Solves the "chicken-and-egg" problem when users have no prior password or registered MFA method'
    ],
    referenceTopic: 'Microsoft Entra ID の一時アクセス パス (TAP)'
  }
];
