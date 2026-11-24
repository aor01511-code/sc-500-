import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART3: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q41',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Storage ユーザー委任 SAS（User Delegation SAS）のセキュリティ優位性',
    titleEn: 'Security Benefits of User Delegation SAS in Azure Storage',
    scenarioJa:
      '外部パートナーやクライアントアプリに Azure Blob Storage 内ファイルへの期間限定アクセス用 SAS トークンを発行する必要があります。ストレージアカウントキーの共有や漏洩リスクを極小化する方式を選定しています。',
    scenarioEn:
      'You must issue time-limited SAS tokens for Azure Blob Storage access to client apps while minimizing risks from storage account key sharing or compromise.',
    questionJa:
      'Azure Storage の「SAS トークン（Shared Access Signature）」でユーザー委任 SAS を使用する利点はどれですか？',
    questionEn:
      'What is the advantage of using a User Delegation SAS over an Account SAS or Service SAS in Azure Storage?',
    options: [
      {
        id: 'A',
        textJa: 'Blob Storage では利用できず Azure Files の共有アクセス専用である',
        textEn: 'Supported only on Azure Files shares and unavailable for Blob Storage',
        isCorrect: false,
        explanationJa:
          '逆であり、ユーザー委任 SAS は Azure Blob Storage（および ADLS Gen2）向けです（Azure Files の通常の SAS とは対象が異なります）。',
        explanationEn:
          'User Delegation SAS applies to Blob Storage (and ADLS Gen2), not Azure Files.',
      },
      {
        id: 'B',
        textJa: 'トークン署名の最適化により大容量データ転送のネットワーク速度が上がる',
        textEn: 'Increases blob download and upload network transfer throughput',
        isCorrect: false,
        explanationJa:
          'SAS の署名方式によってネットワーク転送速度が変わることはありません。',
        explanationEn:
          'SAS signing methods do not affect data transfer speed.',
      },
      {
        id: 'C',
        textJa: '他方式には存在しない開始時刻と有効期限のタイムスタンプを指定できる',
        textEn: 'Uniquely supports configuring start times and token expiration limits',
        isCorrect: false,
        explanationJa:
          '有効期限設定は Account SAS や Service SAS を含むすべての SAS に共通する機能です。',
        explanationEn:
          'Expiration timestamps are supported across all SAS types.',
      },
      {
        id: 'D',
        textJa: 'アカウントキーではなく Entra ID 資格情報で署名されキー漏洩リスクがない',
        textEn: 'Signed with Entra ID credentials rather than account keys, avoiding key leaks',
        isCorrect: true,
        explanationJa:
          'ユーザー委任 SAS（User Delegation SAS）は、ストレージアカウントの共有アクセスキー（Shared Key）ではなく、Microsoft Entra ID 資格情報（ユーザーやサービスプリンシパル／マネージド ID）で取得したユーザー委任キーによって署名されます。そのためアカウントキーを無効化（`allowSharedKeyAccess=false`）した環境でも安全に発行・失効管理できます。',
        explanationEn:
          'A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account Shared Key, preventing account key compromise and working even when Shared Key access is disabled.',
      },
    ],
    overallExplanationJa:
      'Microsoft は Azure Storage の SAS として、共有キー（Account/Service SAS）ではなく **ユーザー委任 SAS（User Delegation SAS）** を第一推奨としています。Entra ID の RBAC で制御でき、共有キーを完全に無効化（`allowSharedKeyAccess = false`）できるうえ、ID 側の資格情報取り消しやキー失効も容易です。',
    overallExplanationEn:
      'Microsoft recommends **User Delegation SAS** for Blob/ADLS Gen2 workloads because it relies on Microsoft Entra ID credentials and RBAC instead of static storage account Shared Keys.',
    keyPointsJa: [
      'ユーザー委任 SAS ＝ Entra ID 資格情報で署名（Account/Service SAS ＝ アカウントキーで署名）',
      'Shared Key アクセスを無効化してもユーザー委任 SAS は利用可能',
    ],
    keyPointsEn: [
      'User Delegation SAS is signed using Microsoft Entra ID credentials, not account Shared Keys',
      'Continues working even when allowSharedKeyAccess is set to false',
    ],
    referenceTopic: 'Azure Storage - ユーザー委任 SAS（User Delegation SAS）',
  },
  {
    id: 'sakitoo-q42',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Managed Instance 展開時に必要なサブネット委任',
    titleEn: 'Required Subnet Delegation for Azure SQL Managed Instance',
    scenarioJa:
      '仮想ネットワーク（VNet）内の専用サブネットに Azure SQL Managed Instance（SQL MI）をデプロイして完全閉域でデータベース環境を構築するため、サブネット構成の前提要件を確認しています。',
    scenarioEn:
      'You plan to deploy an Azure SQL Managed Instance into a dedicated virtual network subnet for network isolation and are verifying subnet configuration prerequisites.',
    questionJa:
      'Azure SQL Managed Instance を VNet 内に展開する際、サブネットに必要な委任（Delegation）はどれですか？',
    questionEn:
      'Which subnet delegation is required when deploying Azure SQL Managed Instance into a VNet?',
    options: [
      {
        id: 'A',
        textJa: 'サブネット委任の設定は不要',
        textEn: 'No subnet delegation is required',
        isCorrect: false,
        explanationJa:
          'SQL Managed Instance は専用サブネットへのインジェクションが必要であり、対応するサービスへの委任設定が必須です。',
        explanationEn:
          'SQL Managed Instance requires a dedicated subnet delegated to its resource provider.',
      },
      {
        id: 'B',
        textJa: 'Microsoft.Sql/managedInstances',
        textEn: 'Microsoft.Sql/managedInstances',
        isCorrect: true,
        explanationJa:
          'Azure SQL Managed Instance を配置する専用サブネットには、サービス委任として `Microsoft.Sql/managedInstances` を設定する必要があります（他のリソースとサブネット共有はできません）。',
        explanationEn:
          'The dedicated subnet hosting an Azure SQL Managed Instance must be delegated to `Microsoft.Sql/managedInstances`.',
      },
      {
        id: 'C',
        textJa: 'Microsoft.Network/virtualNetworks',
        textEn: 'Microsoft.Network/virtualNetworks',
        isCorrect: false,
        explanationJa:
          '仮想ネットワーク自体のリソースプロバイダー名であり、SQL MI 用の委任サービスではありません。',
        explanationEn:
          '`Microsoft.Network/virtualNetworks` is not a valid subnet delegation target for SQL MI.',
      },
      {
        id: 'D',
        textJa: 'Microsoft.Storage/storageAccounts',
        textEn: 'Microsoft.Storage/storageAccounts',
        isCorrect: false,
        explanationJa:
          'ストレージアカウント用のリソースプロバイダーであり、SQL MI の展開とは無関係です。',
        explanationEn:
          '`Microsoft.Storage/storageAccounts` does not apply to SQL Managed Instance subnet delegation.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Managed Instance（SQL MI）は顧客の VNet サブネット内部に直接クラスターリソースを展開します。そのためサブネットには十分な IP アドレス空間（最小 /27 以上推奨）とサービス委任 **`Microsoft.Sql/managedInstances`**、さらに適切に構成された UDR（ルートテーブル）と NSG が必要です。',
    overallExplanationEn:
      'Azure SQL Managed Instance deploys directly into a dedicated VNet subnet requiring **`Microsoft.Sql/managedInstances`** subnet delegation, sufficient CIDR capacity, and a dedicated route table and NSG.',
    keyPointsJa: [
      'SQL MI 専用サブネットのサービス委任には「Microsoft.Sql/managedInstances」を指定する',
      '他の VM や PaaS リソースと同一サブネットを共有できない',
    ],
    keyPointsEn: [
      'Delegate the SQL MI subnet to `Microsoft.Sql/managedInstances`',
      'The subnet must be dedicated exclusively to SQL Managed Instance',
    ],
    referenceTopic: 'Azure SQL Managed Instance の仮想ネットワーク要件と委任',
  },
  {
    id: 'sakitoo-q43',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'NSG フローログ（NSG Flow Logs）によるトラフィック監査とフォレンジック',
    titleEn: 'Traffic Auditing and Forensics Using NSG Flow Logs',
    scenarioJa:
      '仮想ネットワーク内でどの IP アドレス同士がどのポートで通信したか、および NSG によって許可されたか拒否されたかの履歴を記録し、事後フォレンジック調査や Traffic Analytics による不審通信可視化を行いたいと考えています。',
    scenarioEn:
      'You want to record 5-tuple network flows (source/destination IP, port, protocol, allow/deny) in your VNets for security forensics and Traffic Analytics visualization.',
    questionJa:
      'NSG のフローログ（NSG Flow Logs）を Storage Account や Log Analytics に送信する主な目的はどれですか？',
    questionEn:
      'What is the primary purpose of sending NSG Flow Logs (or VNet Flow Logs) to Storage and Log Analytics?',
    options: [
      {
        id: 'A',
        textJa: 'トラフィック傾向を解析し既存 NSG ルール優先度を自動最適化する',
        textEn: 'Analyze flows to automatically modify and optimize NSG rule priorities',
        isCorrect: false,
        explanationJa:
          'フローログ自体が NSG ルールを自動で書き換えることはありません（厳格化推奨には Defender for Cloud の適応型ネットワーク強化等を使います）。',
        explanationEn:
          'Flow logs record telemetry; they do not automatically rewrite NSG rules.',
      },
      {
        id: 'B',
        textJa: 'ピアリングされた VNet 間の最大ネットワーク帯域幅を継続測定する',
        textEn: 'Benchmark peak network bandwidth capacity across peered virtual networks',
        isCorrect: false,
        explanationJa:
          '最大スループットのベンチマーク測定ではなく、5 タプルに基づく通信フローのセキュリティ記録が目的です。',
        explanationEn:
          'Flow logs audit traffic patterns rather than running bandwidth stress benchmarks.',
      },
      {
        id: 'C',
        textJa: 'アプリケーション通信を学習して新しい NSG 許可ルールを自動生成する',
        textEn: 'Automatically generate new inbound and outbound NSG allow rules from flows',
        isCorrect: false,
        explanationJa:
          'NSG ルールの自動生成ツールではありません。',
        explanationEn:
          'NSG Flow Logs do not auto-generate NSG rules.',
      },
      {
        id: 'D',
        textJa: '通信トラフィックの監査やフォレンジック分析・セキュリティ調査を行う',
        textEn: 'Perform network traffic auditing, forensics, and security investigations',
        isCorrect: true,
        explanationJa:
          'NSG フローログ（および後継の VNet フローログ）は、NSG を通過する送受信 IP・ポート・プロトコル・許可/拒否ステータス・バイト数を記録します。Traffic Analytics と連携することで、不審な外部接続・侵害後のラテラルムーブメント調査・通信監査に活用できます。',
        explanationEn:
          'NSG Flow Logs capture IP/port/protocol/allow-deny metadata for every flow, enabling security auditing, Traffic Analytics anomaly detection, and post-incident forensic investigation.',
      },
    ],
    overallExplanationJa:
      'Azure Network Watcher の NSG フローログ（現在は VNet フローログへの移行も推奨）は、仮想ネットワークの L3/L4 トラフィック詳細を Azure Storage に JSON 形式で保存し、Traffic Analytics（Log Analytics）へ送ることで地図可視化・悪意ある IP との通信検知・フォレンジック調査を可能にします。',
    overallExplanationEn:
      'Network Watcher NSG/VNet Flow Logs record 5-tuple network flows into Azure Storage and feed Traffic Analytics in Log Analytics for forensics, lateral-movement tracing, and malicious IP correlation.',
    keyPointsJa: [
      'NSG フローログは送受信 IP・ポート・プロトコル・許可/拒否（Allow/Deny）を記録する',
      'Traffic Analytics と併用して Log Analytics / Sentinel でセキュリティ調査・可視化に活用',
    ],
    keyPointsEn: [
      'Captures 5-tuple metadata plus Allow/Deny decisions',
      'Pairs with Traffic Analytics for visual and KQL-based threat hunting',
    ],
    referenceTopic: 'Azure Network Watcher - NSG フローログと Traffic Analytics',
  },
  {
    id: 'sakitoo-q44',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database 動的データマスキング（Dynamic Data Masking）の役割',
    titleEn: 'Purpose of Dynamic Data Masking in Azure SQL Database',
    scenarioJa:
      '開発者やカスタマーサポート担当者が参照する Azure SQL データベースのクエリ結果において、テーブル上の元データを暗号化や書き換えで壊すことなく、クレジットカード番号や電話番号・メールアドレスの一部を「XXXX」等で伏せて表示させる必要があります。',
    scenarioEn:
      'You need to obfuscate sensitive fields like credit card numbers and email addresses in SQL query results returned to support staff and developers, without altering the underlying stored data.',
    questionJa:
      'Azure SQL Database の「動的データマスキング（Dynamic Data Masking）」を設定する主な目的はどれですか？',
    questionEn:
      'What is the primary purpose of Dynamic Data Masking (DDM) in Azure SQL Database?',
    options: [
      {
        id: 'A',
        textJa: '非特権ユーザーのクエリ結果でカード番号等の機密列を伏せ字表示する',
        textEn: 'Obfuscate sensitive fields like card numbers in non-privileged query results',
        isCorrect: true,
        explanationJa:
          '動的データマスキング（DDM）は、データベース内の実データを変更せずに、UNMASK 権限を持たない非特権ユーザーからのクエリ結果セットに対してリアルタイムでマスキング関数を適用し、機密データの露出を抑えます。',
        explanationEn:
          'Dynamic Data Masking obfuscates sensitive column values on the fly in result sets returned to users lacking UNMASK permission, without modifying stored data.',
      },
      {
        id: 'B',
        textJa: '実行計画キャッシュの最適化により複雑な SQL クエリの応答速度を高める',
        textEn: 'Accelerate complex SQL query execution by optimizing plan caching',
        isCorrect: false,
        explanationJa:
          'クエリ最適化機能ではなく、表示層のデータ露出制限機能です。',
        explanationEn:
          'DDM is a data obfuscation control, not a query performance optimizer.',
      },
      {
        id: 'C',
        textJa: 'ポイントインタイムリストア用の日次データベースバックアップを自動化する',
        textEn: 'Automate encrypted daily database snapshots and point-in-time backups',
        isCorrect: false,
        explanationJa:
          '自動バックアップは Azure SQL のプラットフォーム標準機能であり DDM とは無関係です。',
        explanationEn:
          'Database backups are managed separately from Dynamic Data Masking.',
      },
      {
        id: 'D',
        textJa: '格納されているテーブル列のデータ自体をクライアント側で完全暗号化する',
        textEn: 'Cryptographically encrypt stored table columns so even DBAs see ciphertext',
        isCorrect: false,
        explanationJa:
          'DDM は暗号化ではなく結果セットの難読化（マスキング）であり、データ暗号化には TDE や Always Encrypted を使用します。',
        explanationEn:
          'DDM does not encrypt stored data; use TDE or Always Encrypted for cryptographic protection.',
      },
    ],
    overallExplanationJa:
      '動的データマスキング（DDM）は、サポート業務やテスト/分析クエリで一般ユーザーが機密列（個人番号・メール・クレジットカード）をそのまま閲覧するのを防ぎます。DBA や `UNMASK` 権限を持つ特権ユーザーは元の値を参照でき、暗号化（TDE / Always Encrypted）と補完関係にあります。',
    overallExplanationEn:
      'Dynamic Data Masking limits sensitive data exposure to non-privileged users without requiring application code changes, while users granted `UNMASK` continue seeing full values.',
    keyPointsJa: [
      'DDM は実データを変更・暗号化せず、非特権ユーザーのクエリ出力のみマスク表示する',
      'DBA や UNMASK 権限保有者からすら隠したい場合は Always Encrypted を使用する',
    ],
    keyPointsEn: [
      'DDM masks query output only for non-privileged users without altering stored data',
      'To hide plaintext even from DBAs, use Always Encrypted instead',
    ],
    referenceTopic: 'Azure SQL Database 動的データマスキング',
  },
  {
    id: 'sakitoo-q45',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Firewall Premium SKU 固有の TLS 検査（TLS Inspection）機能',
    titleEn: 'TLS Inspection Exclusively Available in Azure Firewall Premium SKU',
    scenarioJa:
      '外部インターネットへのアウトバウンド HTTPS 通信について、単なる宛先ドメイン名（FQDN）の一致チェックだけでなく、暗号化通信の中身（URL パス、マルウェアや不正ペイロードの有無）まで検査して遮断したいと考えています。',
    scenarioEn:
      'For outbound HTTPS traffic to the internet, you need deep packet and URL path inspection inside encrypted payloads—not just SNI hostname matching.',
    questionJa: 'Azure Firewall のプレミアム（Premium）SKU でのみ利用可能な機能はどれですか？',
    questionEn: 'Which capability is exclusive to the Azure Firewall Premium SKU (among the options)?',
    options: [
      {
        id: 'A',
        textJa: 'VNet 内の仮想ネットワーク向け DNS プロキシ転送機能',
        textEn: 'DNS proxy forwarding for virtual network name resolution',
        isCorrect: false,
        explanationJa:
          'DNS プロキシ機能は Azure Firewall Standard SKU でも利用可能です。',
        explanationEn:
          'DNS Proxy is supported in Azure Firewall Standard as well as Premium.',
      },
      {
        id: 'B',
        textJa: 'SSL/TLS 終端による暗号化 HTTPS トラフィックの内容検査',
        textEn: 'TLS inspection terminating and inspecting encrypted HTTPS traffic',
        isCorrect: true,
        explanationJa:
          'Azure Firewall Premium SKU では、TLS 検査（TLS Inspection）、IDPS（侵入検知・防御システム）、完全な URL フィルタリング、Web カテゴリ精密分類などが利用可能です。TLS 検査により HTTPS トラフィックを終端・復号して内部の URL パスや悪意あるペイロードを検証できます。',
        explanationEn:
          'Azure Firewall Premium adds TLS Inspection, IDPS, URL filtering, and enhanced Web Categories, terminating and inspecting encrypted HTTPS traffic before re-encrypting.',
      },
      {
        id: 'C',
        textJa: 'Microsoft 脅威インテリジェンスに基づく悪意 IP の拒否',
        textEn: 'Threat intelligence-based filtering of known malicious IP/FQDNs',
        isCorrect: false,
        explanationJa:
          'Microsoft 脅威インテリジェンスに基づく悪意ある IP/FQDN のアラート・拒否は Standard SKU でも利用可能です。',
        explanationEn:
          'Threat intelligence-based filtering is available in Standard SKU.',
      },
      {
        id: 'D',
        textJa: '送信元・宛先 IP とポートに基づくステートフルパケット検査',
        textEn: 'Stateful L3/L4 network rule filtering by IP address and port',
        isCorrect: false,
        explanationJa:
          'L3/L4 のステートフルフィルタリングは Basic / Standard / Premium の全 SKU で提供される基本機能です。',
        explanationEn:
          'Stateful L3/L4 filtering is a baseline feature across Basic, Standard, and Premium SKUs.',
      },
    ],
    overallExplanationJa:
      'Azure Firewall Standard と Premium の決定的な違いは「暗号化された HTTPS 通信の内部まで検査できるか」です。**Premium SKU** では顧客の中間 CA 証明書を Key Vault と連携させて **TLS 検査（TLS Inspection）** を行い、URL 単位制御やシグネチャベースの IDPS 検査を実行できます。',
    overallExplanationEn:
      'Azure Firewall **Premium** adds next-generation capabilities—most notably **TLS Inspection**, **IDPS**, and **URL Filtering**—using a Customer CA certificate stored in Key Vault.',
    keyPointsJa: [
      'TLS 検査、IDPS、URL フィルタリング ＝ Azure Firewall Premium SKU 限定機能',
      'Standard SKU でも DNS プロキシ、脅威インテリジェンス、SNI ベース FQDN ルールは利用可能',
    ],
    keyPointsEn: [
      'TLS Inspection, IDPS, and URL filtering require Azure Firewall Premium',
      'DNS proxy and threat intelligence filtering are already included in Standard',
    ],
    referenceTopic: 'Azure Firewall Premium SKU の機能（TLS 検査 / IDPS）',
  },
  {
    id: 'sakitoo-q46',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Always Encrypted によるクライアント側暗号化と DBA からのデータ秘匿',
    titleEn: 'Client-Side Encryption with Azure SQL Always Encrypted',
    scenarioJa:
      '社会保障番号・マイナンバーや金融口座情報などの超機密列について、データベースサーバーのメモリ上やストレージ上だけでなく、データベース管理者（DBA）やクラウド運用者に対しても平文を一切参照させない暗号化方式が必要です。',
    scenarioEn:
      'For ultra-sensitive database columns such as government IDs or bank numbers, compliance requires keeping plaintext inaccessible even to database administrators (DBAs) and Azure operators.',
    questionJa: 'Azure SQL Database の「Always Encrypted」機能の特徴はどれですか？',
    questionEn: 'Which statement accurately describes Azure SQL Always Encrypted?',
    options: [
      {
        id: 'A',
        textJa: 'オンプレミス SQL Server 専用であり Azure SQL クラウドでは非対応',
        textEn: 'Available only on on-premises SQL Server and unsupported in Azure SQL',
        isCorrect: false,
        explanationJa:
          'Always Encrypted は Azure SQL Database、Azure SQL Managed Instance、SQL Server で標準サポートされています。',
        explanationEn:
          'Always Encrypted is fully supported on Azure SQL Database and SQL Managed Instance.',
      },
      {
        id: 'B',
        textJa: 'クライアント側で暗号化・復号し DB サーバーは暗号化データのみ扱う',
        textEn: 'Client drivers encrypt/decrypt data so the DB server handles only ciphertext',
        isCorrect: true,
        explanationJa:
          'Always Encrypted ではクライアント側の対応ドライバ（ODBC/JDBC/.NET 等）が Key Vault や Windows 証明書ストアの列マスターキー（CMK）を参照して暗号化・復号を実行します。データベースエンジンには常に暗号文しか送られないため、DBA でも平文データを閲覧できません。',
        explanationEn:
          'With Always Encrypted, the client-side driver encrypts and decrypts sensitive columns using keys outside the database engine (e.g., Key Vault), ensuring DBAs and the SQL Server itself never see plaintext.',
      },
      {
        id: 'C',
        textJa: 'データベースエンジン側でページ単位の暗号化・復号を透過的に実行する',
        textEn: 'The SQL database engine transparently encrypts and decrypts pages server-side',
        isCorrect: false,
        explanationJa:
          'データベースサーバー側で保存データを自動暗号化・復号するのは TDE（透過的データ暗号化）です。',
        explanationEn:
          'Server-side transparent encryption and decryption describes TDE, not Always Encrypted.',
      },
      {
        id: 'D',
        textJa: '保存データのファイルを保護する TDE（透過的データ暗号化）と同一機能',
        textEn: 'Functionally identical to Transparent Data Encryption (TDE) for data at rest',
        isCorrect: false,
        explanationJa:
          'TDE はディスク/バックアップ上のファイルを保護しますがメモリやクエリ結果では DBA に平文が見えます。Always Encrypted はデータの所有者と管理者を分離します。',
        explanationEn:
          'TDE protects data at rest on disk/backups, whereas Always Encrypted isolates plaintext even from DBAs during queries.',
      },
    ],
    overallExplanationJa:
      'Azure SQL のセキュリティ機能「Always Encrypted」は、機密データの所有者とデータ管理者（DBA・クラウド管理者）の役割を暗号学的に分離します。列暗号化キー（CEK）を保護する列マスターキー（CMK）はクライアント環境またはアクセス制限された Key Vault に置かれ、SQL エンジン側には暗号文のみが保持されます。',
    overallExplanationEn:
      '**Always Encrypted** provides cryptographic separation between data owners and DBAs/cloud admins by performing encryption and decryption inside trusted client drivers.',
    keyPointsJa: [
      'Always Encrypted ＝ クライアント側（ドライバ）で暗号化・復号し、DB サーバー・DBA に平文を渡さない',
      'TDE ＝ サーバー側で物理ファイル・バックアップを保存時暗号化する',
    ],
    keyPointsEn: [
      'Always Encrypted keeps encryption keys on the client side so DBAs never see plaintext',
      'TDE encrypts storage files at rest inside the database engine',
    ],
    referenceTopic: 'Azure SQL Always Encrypted vs TDE',
  },
  {
    id: 'sakitoo-q47',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Network Watcher の IP フロー確認（IP Flow Verify）による NSG 診断',
    titleEn: 'Diagnosing NSG Allow/Deny Decisions with Network Watcher IP Flow Verify',
    scenarioJa:
      'Azure VM の通信トラブルシューティングにおいて、特定の送信元 IP・ポートから特定の宛先 IP・ポートへの通信が、現在適用されている NSG ルールによって許可されるか拒否されるか、そしてどのルールが原因かを即座に特定したいと考えています。',
    scenarioEn:
      'When troubleshooting VM connectivity, you want to immediately check whether traffic between a specific source/destination IP and port is allowed or denied by NSGs, and identify the exact matching rule.',
    questionJa:
      'Azure Network Watcher の IP フロー確認（IP Flow Verify）を使う目的はどれですか？',
    questionEn:
      'What is the purpose of IP Flow Verify in Azure Network Watcher?',
    options: [
      {
        id: 'A',
        textJa: '指定した 5 タプル通信が NSG ルールで許可か拒否かを診断する',
        textEn: 'Check if a specific 5-tuple packet flow is allowed or denied by NSGs',
        isCorrect: true,
        explanationJa:
          'IP フロー確認（IP Flow Verify）は、対象 VM/NIC、方向（Inbound/Outbound）、プロトコル、ローカル/リモート IP・ポートを指定することで、実通信を待たずに適用中の NSG ルール評価結果（許可/拒否）と一致したセキュリティルール名を返します。',
        explanationEn:
          'IP Flow Verify evaluates effective NSG rules for a specific VM NIC and 5-tuple (direction, protocol, local/remote IP & port), returning Allow or Deny along with the exact matching NSG rule name.',
      },
      {
        id: 'B',
        textJa: 'オンプレミスと結ぶ ExpressRoute BGP ピアリング経路を診断する',
        textEn: 'Verify ExpressRoute circuit BGP peering routes and gateway health',
        isCorrect: false,
        explanationJa:
          'ExpressRoute 回線や経路診断にはネクストホップや接続トラブルシューティング/VPN 診断を使用します。',
        explanationEn:
          'ExpressRoute routing is checked with Next Hop or Connection Troubleshoot rather than IP Flow Verify.',
      },
      {
        id: 'C',
        textJa: 'VNet 内のプライベート DNS ゾーンの名前解決応答を検証する',
        textEn: 'Test internal DNS name resolution against Azure Private DNS zones',
        isCorrect: false,
        explanationJa:
          'IP フロー確認は IP アドレスとポート番号を入力する NSG 検証機能であり、DNS 名前解決ツールではありません。',
        explanationEn:
          'IP Flow Verify uses raw IP addresses and ports for NSG checks rather than resolving DNS names.',
      },
      {
        id: 'D',
        textJa: 'サイト間 VPN トンネルの実効帯域幅とパケット遅延を測定する',
        textEn: 'Benchmark site-to-site VPN tunnel throughput and packet latency',
        isCorrect: false,
        explanationJa:
          'VPN のスループット測定機能ではありません。',
        explanationEn:
          'IP Flow Verify does not measure VPN bandwidth.',
      },
    ],
    overallExplanationJa:
      'Azure Network Watcher の診断ツール群の中で、**IP フロー確認（IP Flow Verify）** は「VM の通信が NSG でブロックされていないか、どのルールに一致したか」をピンポイントで検証する機能です。一方、ルーティングテーブル（UDR）の確認には「ネクストホップ（Next hop）」を使います。',
    overallExplanationEn:
      'In Network Watcher, **IP Flow Verify** checks NSG Allow/Deny decisions and identifies the matching rule, while **Next hop** verifies effective routing tables.',
    keyPointsJa: [
      'IP Flow Verify ＝ 5 タプル（送信元/宛先 IP・ポート・プロトコル）で NSG 許可/拒否と一致ルールを即座に診断',
      'ルーティングの次ホップ確認には「Next hop」を使用する',
    ],
    keyPointsEn: [
      'IP Flow Verify diagnoses effective NSG Allow/Deny status and rule name using 5-tuple inputs',
      'Use Next Hop when troubleshooting routing/UDR issues',
    ],
    referenceTopic: 'Azure Network Watcher - IP フロー確認',
  },
  {
    id: 'sakitoo-q48',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Storage マルウェアスキャンのトリガータイミング',
    titleEn: 'Trigger Timing of Defender for Storage Malware Scanning',
    scenarioJa:
      'Web アプリケーションを通じて外部ユーザーがアップロードするファイルを Azure Blob Storage に保存しています。感染ファイルが業務処理やダウンロードに使われる前に検出できるよう、Defender for Storage のマルウェアスキャンを有効化しました。',
    scenarioEn:
      'External users upload files to Azure Blob Storage through a web portal. You enabled Defender for Storage Malware Scanning to inspect files before downstream apps consume them.',
    questionJa:
      'Defender for Storage で Blob Storage へのマルウェアスキャンを有効化した場合、スキャンされるのはどのタイミングですか？',
    questionEn:
      'When Malware Scanning is enabled in Defender for Storage, when are blobs scanned automatically?',
    options: [
      {
        id: 'A',
        textJa: 'クライアントから Blob がダウンロードされる直前にのみスキャンされる',
        textEn: 'Only when a user or app downloads the blob for reading',
        isCorrect: false,
        explanationJa:
          'ダウンロード時まで待ってからスキャンするのではなく、アップロード（書き込み）時に自動スキャンされます。',
        explanationEn:
          'Scanning triggers on upload/write rather than waiting until download time.',
      },
      {
        id: 'B',
        textJa: '管理者がポータルから手動実行を指示した対象ファイルのみスキャンされる',
        textEn: 'Only when an administrator triggers a manual portal scan',
        isCorrect: false,
        explanationJa:
          'オンデマンドスキャンも別途利用可能ですが、基本設定であるアップロード時スキャン（On-upload malware scanning）は自動実行されます。',
        explanationEn:
          'While on-demand scanning is available, On-upload malware scanning runs automatically upon upload.',
      },
      {
        id: 'C',
        textJa: 'Blob がアップロードまたは更新された直後にリアルタイムでスキャンされる',
        textEn: 'Scanned automatically in near real-time upon blob upload',
        isCorrect: true,
        explanationJa:
          'Defender for Storage のアップロード時マルウェアスキャン（On-upload malware scanning）は、Blob がアップロード・上書き・作成されたタイミングで自動的に Microsoft Defender ウイルス対策エンジンによるリアルタイムスキャンを実行し、BLOB インデックスタグや Event Grid・Log Analytics へ結果を出力します。',
        explanationEn:
          'On-upload malware scanning automatically scans newly uploaded or modified blobs in near real-time using the Microsoft Defender Antivirus engine and publishes results via Blob index tags, Event Grid, and alerts.',
      },
      {
        id: 'D',
        textJa: 'あらかじめ設定した日次または週次の定期スケジュール時刻にスキャンされる',
        textEn: 'Scanned exclusively during scheduled nightly or weekly batch runs',
        isCorrect: false,
        explanationJa:
          'スケジュールバッチではなく、Blob のアップロードイベントを契機としてリアルタイムで実行されます。',
        explanationEn:
          'On-upload scanning is event-driven upon upload rather than waiting for a batch schedule.',
      },
    ],
    overallExplanationJa:
      'Defender for Storage のマルウェアスキャンはイベント駆動の**アップロード時リアルタイムスキャン（On-upload malware scanning）**により、悪意あるファイルが保存された直後に検出します（既存 Blob 向けの「オンデマンドスキャン」も併用可能）。Event Grid や Logic Apps と連携すれば、悪意あり判定時の自動削除・隔離も容易に自動化できます。',
    overallExplanationEn:
      'Defender for Storage Malware Scanning runs automatically when blobs are uploaded or overwritten (and also supports on-demand scanning for existing blobs), enabling automated quarantine via Event Grid or Blob index tags.',
    keyPointsJa: [
      'On-upload malware scanning は Blob のアップロード/更新を契機に自動・リアルタイム実行される',
      '既存データ検査用のオンデマンドスキャンや Event Grid 連携での自動隔離も可能',
    ],
    keyPointsEn: [
      'Automatically triggered on blob upload or overwrite in near real-time',
      'Integrate with Event Grid or Blob index tags for automated quarantine workflows',
    ],
    referenceTopic: 'Defender for Storage - アップロード時マルウェアスキャン',
  },
  {
    id: 'sakitoo-q49',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database 脆弱性評価（Vulnerability Assessment）の目的',
    titleEn: 'Purpose of Azure SQL Database Vulnerability Assessment',
    scenarioJa:
      '監査対応およびセキュリティベースライン維持のため、Azure SQL Database 内の過剰な権限設定やファイアウォール・暗号化・ロール構成の不備を継続的にチェックし、是正レポートを出力したいと考えています。',
    scenarioEn:
      'To maintain compliance and security baselines, you want to continuously scan Azure SQL databases for misconfigurations, excessive permissions, and firewall/encryption gaps.',
    questionJa:
      'Azure SQL Database の「脆弱性評価（Vulnerability Assessment）」を使用する目的はどれですか？',
    questionEn:
      'What is the primary purpose of Azure SQL Database Vulnerability Assessment?',
    options: [
      {
        id: 'A',
        textJa: 'データベースバックアップからの自動復旧テストと整合性検証を行う',
        textEn: 'Run automated database backup restore drills and integrity checks',
        isCorrect: false,
        explanationJa:
          'バックアップ復旧テストの機能ではありません。',
        explanationEn:
          'Vulnerability Assessment does not perform backup restore tests.',
      },
      {
        id: 'B',
        textJa: '長時間実行中の SQL クエリを抽出しパフォーマンス改善案を提示する',
        textEn: 'Profile slow-running SQL queries and score query plan performance',
        isCorrect: false,
        explanationJa:
          'クエリパフォーマンスの分析機能ではありません。',
        explanationEn:
          'It evaluates security posture rather than query execution performance.',
      },
      {
        id: 'C',
        textJa: 'セキュリティ設定の誤りや構成不備を定期スキャンしてレポートする',
        textEn: 'Periodically scan for database misconfigurations and report deviations',
        isCorrect: true,
        explanationJa:
          'Azure SQL 脆弱性評価（Express 構成またはクラシック構成）は、認証設定、過剰な権限付与、ファイアウォール、機密データ分類、構成ミスなどを知識ベースと照合して定期スキャンし、ベースラインからの逸脱と修復クエリをレポートします。',
        explanationEn:
          'SQL Vulnerability Assessment periodically scans databases against security best-practice rules (permissions, authentication, firewall, configuration) and reports findings with remediation guidance.',
      },
      {
        id: 'D',
        textJa: 'テーブル負荷を分析して欠落しているインデックスの作成を推奨する',
        textEn: 'Analyze table workload patterns to recommend missing SQL indexes',
        isCorrect: false,
        explanationJa:
          'インデックス最適化はパフォーマンスチューニング機能です。',
        explanationEn:
          'Index recommendations are a performance tuning capability, not Vulnerability Assessment.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Azure SQL に含まれる「脆弱性評価（Vulnerability Assessment）」は、DB 内部のセキュリティ状態を可視化するポスチャ評価ツールです。特に新規導入が簡単な Express 構成ではストレージアカウント不要で自動定期スキャンが有効になり、各推奨事項が Defender for Cloud の推奨事項に表示されます。',
    overallExplanationEn:
      'SQL Vulnerability Assessment (with Express configuration supported directly in Defender for Cloud without a separate storage account) identifies database misconfigurations, excessive privileges, and baseline deviations.',
    keyPointsJa: [
      'SQL 脆弱性評価 ＝ データベース構成ミス・過剰権限・ベースライン逸脱の定期スキャンと修復提案',
      '攻撃のリアルタイム検知（ATP）とは補完関係にあるポスチャチェック機能',
    ],
    keyPointsEn: [
      'Identifies SQL misconfigurations, excessive permissions, and baseline drift',
      'Complements real-time Advanced Threat Protection (ATP) alerts',
    ],
    referenceTopic: 'Azure SQL Database 脆弱性評価（Vulnerability Assessment）',
  },
  {
    id: 'sakitoo-q50',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ハブ＆スポークと UDR による VNet ピアリング間トラフィックの Azure Firewall 強制経由',
    titleEn: 'Forcing Peered VNet Traffic Through Azure Firewall Using Hub-and-Spoke and UDRs',
    scenarioJa:
      'スポーク VNet1 とスポーク VNet2 が通信する際、直接通信させるのではなく、必ずハブ VNet に配置した Azure Firewall を経由させてすべての通信を検査・フィルタリングできるようにネットワーク設計を見直しています。',
    scenarioEn:
      'When resources in Spoke VNet1 communicate with Spoke VNet2, you must inspect and filter all inter-VNet traffic through a centralized Azure Firewall instead of allowing direct routing.',
    questionJa:
      'VNet ピアリング（Peering）を設定した後でも 2 つの VNet 間の通信に Azure Firewall を経由させるためのアーキテクチャはどれですか？',
    questionEn:
      'Which architecture forces traffic between peered spoke VNets to route through Azure Firewall?',
    options: [
      {
        id: 'A',
        textJa: 'スポーク VNet 同士のピアリングリンク自体に NSG を直接アタッチする',
        textEn: 'Attach a shared Network Security Group directly onto VNet peering links',
        isCorrect: false,
        explanationJa:
          'NSG はサブネットまたは NIC に割り当てるステートフルフィルタであり、トラフィック経路を中央の Azure Firewall へリダイレクトするルーティング機能はありません。',
        explanationEn:
          'NSGs attach to subnets/NICs and do not steer packet routing paths across VNets.',
      },
      {
        id: 'B',
        textJa: 'ハブ＆スポーク構成にして UDR で次ホップを Firewall IP に向ける',
        textEn: 'Deploy a hub-and-spoke topology with UDRs pointing next-hop to the Firewall',
        isCorrect: true,
        explanationJa:
          'ハブ VNet に Azure Firewall を配置して各スポーク VNet とピアリングし、スポーク側の各サブネットにルートテーブル（UDR）を関連付けて、他スポーク宛て（または `0.0.0.0/0`）の次ホップを `VirtualAppliance`（Azure Firewall のプライベート IP）に指定することで、すべてのトラフィックを強制的に Azure Firewall 経由で検査できます。',
        explanationEn:
          'In a hub-and-spoke topology, peering spokes to the hub VNet and associating UDRs on spoke subnets with next hop set to Virtual Appliance (Azure Firewall internal IP) forces all spoke-to-spoke and internet traffic through the firewall.',
      },
      {
        id: 'C',
        textJa: 'Azure Firewall は VNet ピアリング環境の経路制御には対応しない',
        textEn: 'Azure Firewall cannot inspect traffic traversing peered virtual networks',
        isCorrect: false,
        explanationJa:
          'ハブ VNet に置いた Azure Firewall をピアリング経由で全スポークで共有するのが最も標準的なエンタープライズ設計です。',
        explanationEn:
          'Centralized Azure Firewall in a hub VNet shared across peered spokes is the standard Azure reference architecture.',
      },
      {
        id: 'D',
        textJa: 'VNet ピアリング設定にあるファイアウォール自動転送オプションを有効にする',
        textEn: 'Enable the built-in "Route via Firewall" toggle inside VNet peering',
        isCorrect: false,
        explanationJa:
          'VNet ピアリング設定にそのような自動トグルは存在せず、UDR（ユーザー定義ルート）の明示的な構成が必要です。',
        explanationEn:
          'VNet peering has no built-in firewall toggle; explicit UDR route tables are required.',
      },
    ],
    overallExplanationJa:
      'VNet ピアリングでスポーク同士を直接接続するとシステムルートで最短通信してしまいますが、ハブ＆スポーク構成（スポークはハブのみとピアリング）にしてスポークのサブネットに UDR（`Next hop type: Virtual appliance`、`Next hop address: Azure Firewall プライベート IP`）を設定することで、ハブの Azure Firewall に確実にトラフィックを集約できます。',
    overallExplanationEn:
      'In a hub-and-spoke network, associate a Route Table (UDR) with spoke subnets pointing traffic (`0.0.0.0/0` and/or other spoke CIDRs) to the Azure Firewall private IP as a `Virtual appliance` next hop.',
    keyPointsJa: [
      'ハブ VNet に Azure Firewall を配置し、各スポークサブネットの UDR で次ホップ（Virtual Appliance）を Firewall IP に指定する',
      'VNet ピアリングだけでは自動的に Firewall を経由しないため UDR が必須',
    ],
    keyPointsEn: [
      'Deploy Azure Firewall in the hub VNet and route spoke traffic via UDRs (Next hop: Virtual appliance)',
      'Without UDRs, peered traffic bypasses the firewall',
    ],
    referenceTopic: 'ハブ＆スポークと UDR による Azure Firewall トラフィック検査',
  },
  {
    id: 'sakitoo-q51',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Storage ライフサイクル管理による不要データの自動削除と攻撃面縮小',
    titleEn: 'Reducing Data Exposure Risk via Azure Storage Lifecycle Management',
    scenarioJa:
      '一時ファイルや古いログ・アップロードデータが無期限に Azure Blob Storage に蓄積し続けており、万が一ストレージへの不正アクセスが発生した際の漏洩対象データを最小限に抑えたいと考えています。',
    scenarioEn:
      'Temporary files and aging logs accumulate indefinitely in Azure Blob Storage. You want to automatically purge stale data to minimize potential exposure if unauthorized access ever occurs.',
    questionJa:
      'Azure Storage の Lifecycle Management（ライフサイクル管理）でセキュリティ観点から重要な設定はどれですか？',
    questionEn:
      'Which Azure Storage Lifecycle Management action is especially important from a security and data-minimization perspective?',
    options: [
      {
        id: 'A',
        textJa: '書き込まれた新規 Blob に対して自動暗号化を適用して保存時保護する',
        textEn: 'Enable automatic server-side encryption when new blobs are written',
        isCorrect: false,
        explanationJa:
          'すべての Blob は作成時点で SSE により既に暗号化されており、ライフサイクル管理の機能ではありません。',
        explanationEn:
          'Blobs are always encrypted at rest by SSE regardless of lifecycle policies.',
      },
      {
        id: 'B',
        textJa: 'アクセス頻度に応じてストレージのネットワークファイアウォールを自動更新する',
        textEn: 'Dynamically update storage firewall IP rules based on access patterns',
        isCorrect: false,
        explanationJa:
          'ライフサイクル管理はデータ保持・ティア移行・削除ルールを扱う機能であり、ネットワーク設定は変更しません。',
        explanationEn:
          'Lifecycle Management governs blob tiering and deletion rather than firewall rules.',
      },
      {
        id: 'C',
        textJa: '保持期限を過ぎた不要 Blob を自動削除し情報漏洩時の攻撃面を減らす',
        textEn: 'Automatically delete obsolete blobs after retention to reduce breach exposure',
        isCorrect: true,
        explanationJa:
          'ライフサイクル管理ポリシーで最終変更日や作成日からの経過日数に基づき不要な Blob やスナップショットを自動削除（Delete）することで、コスト削減と同時に長期放置データによる情報漏洩リスク・保持義務違反を防げます。',
        explanationEn:
          'Configuring lifecycle rules to automatically delete obsolete blobs and snapshots reduces both storage costs and the blast radius of potential data breaches.',
      },
      {
        id: 'D',
        textJa: 'ストレージアカウントのアクセスキーを一定期間ごとに自動ローテーションする',
        textEn: 'Automatically rotate storage account access keys on a recurring schedule',
        isCorrect: false,
        explanationJa:
          'アカウントキーの自動ローテーションは Azure Key Vault の Managed Storage Account 機能などで行います。',
        explanationEn:
          'Storage account key rotation is not handled by Blob Lifecycle Management.',
      },
    ],
    overallExplanationJa:
      'セキュリティの基本原則である「データ最小化（不要な機密情報を保持し続けない）」を実現する上で、Azure Blob Storage のライフサイクル管理による自動削除ルールは非常に有効です。機密データやログの保持期限が過ぎたら確実に削除することで万が一の侵害時の被害を最小化できます。',
    overallExplanationEn:
      'Data minimization is a core security and privacy principle. Azure Storage Lifecycle Management enforces automated deletion of aged blobs, snapshots, and versions once their retention window passes.',
    keyPointsJa: [
      'ライフサイクル管理ルールでアクセス層移行（Cool/Archive）だけでなく不要データの自動削除（Delete）を設定可能',
      '放置された古いデータの自動削除は情報漏洩リスクと過剰共有リスクの低減に直結する',
    ],
    keyPointsEn: [
      'Use Lifecycle Management delete actions to enforce retention limits automatically',
      'Reduces unnecessary data exposure alongside storage costs',
    ],
    referenceTopic: 'Azure Blob Storage ライフサイクル管理とデータ最小化',
  },
  {
    id: 'sakitoo-q52',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL ファイアウォール「Azure サービスおよびリソースにこのサーバーへのアクセスを許可する」のリスク',
    titleEn: 'Security Risk of Allowing All Azure Services on Azure SQL Server Firewall',
    scenarioJa:
      'Azure SQL Database のネットワーク設定において、「Azure サービスおよびリソースにこのサーバーへのアクセスを許可する（Allow Azure services and resources to access this server）」オプションを有効化すべきかセキュリティレビューを行っています。',
    scenarioEn:
      'During a security review of Azure SQL Database networking, you are evaluating the risks of enabling "Allow Azure services and resources to access this server".',
    questionJa:
      'Azure SQL Database の「ファイアウォールルール」で Azure サービスからのアクセスを許可する「Azure サービスへのアクセスを許可する」設定の注意点はどれですか？',
    questionEn:
      'What is the critical security caveat when enabling "Allow Azure services and resources to access this server" on an Azure SQL Server firewall?',
    options: [
      {
        id: 'A',
        textJa: 'グローバル管理者ロールを持つユーザー以外は設定変更がロックされる',
        textEn: 'Only users holding the Global Administrator role can modify this rule',
        isCorrect: false,
        explanationJa:
          '通常の Azure RBAC（SQL Server Contributor 等）でも変更可能であり、最大のセキュリティ上の注意点ではありません。',
        explanationEn:
          'This is not the primary network exposure caveat of the setting.',
      },
      {
        id: 'B',
        textJa: 'サービス経由トラフィックの検査負荷によりクエリ処理性能が大幅に低下する',
        textEn: 'Firewall inspection overhead significantly degrades SQL query throughput',
        isCorrect: false,
        explanationJa:
          'クエリ処理性能ではなく、他テナントを含む全 Azure 基盤 IP からの到達可能性が問題になります。',
        explanationEn:
          'The concern is network exposure from external Azure tenants, not performance degradation.',
      },
      {
        id: 'C',
        textJa: '他テナントを含む全 Azure からの接続が通るため Private Endpoint が推奨',
        textEn: 'Allows connections from any Azure tenant, so Private Endpoints are preferred',
        isCorrect: true,
        explanationJa:
          'この設定を有効にすると、実質的に「0.0.0.0〜0.0.0.0」ルールと同様に Azure データセンター内のすべての IP アドレス（自テナント以外の他社テナントが作成した Azure VM やアプリを含む）からサーバーのログイン画面へ到達できるようになるため、本番環境では無効化し Private Endpoint や VNet 規則を使用することが強く推奨されます。',
        explanationEn:
          'Enabling this setting allows network connections from any Azure datacenter IP—including VMs and apps owned by other Azure tenants—so production environments should disable it and use Private Endpoints.',
      },
      {
        id: 'D',
        textJa: 'この設定は最上位の Premium サービス層を契約したサーバーでのみ動作する',
        textEn: 'This firewall toggle is restricted exclusively to the Premium SQL tier',
        isCorrect: false,
        explanationJa:
          '論理サーバーレベルの設定でありすべてのサービス層に共通です。',
        explanationEn:
          'It is a logical server firewall setting available across all tiers.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Server の「Azure サービスおよびリソースにこのサーバーへのアクセスを許可する」は、自サブスクリプション内だけでなく **全 Azure 顧客のワークロード** からの TCP 1433 接続をファイアウォール上で通過させてしまいます。セキュリティを厳格化するにはこれを **いいえ（OFF）** にし、パブリックアクセス無効化＋**Private Endpoint** を利用します。',
    overallExplanationEn:
      'Turning ON "Allow Azure services and resources to access this server" permits traffic from any Azure tenant’s resources. Disable it and use **Private Endpoints** (or specific VNet/service-endpoint rules) in production.',
    keyPointsJa: [
      '「Azure サービスへのアクセスを許可」は他社テナントの Azure リソースからの接続もファイアウォール上は許可してしまう',
      '本番環境では OFF にし、Private Endpoint（または VNet ルール）で接続元を厳密に限定する',
    ],
    keyPointsEn: [
      'This toggle opens the firewall to all Azure tenants, not just your own subscription',
      'Disable it in production and connect via Private Endpoints',
    ],
    referenceTopic: 'Azure SQL Server ネットワークファイアウォールと Private Endpoint',
  },
  {
    id: 'sakitoo-q53',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '保存済みアクセスポリシー（Stored Access Policy）による Service SAS の即時失効',
    titleEn: 'Server-Side Revocation of Service SAS Using Stored Access Policies',
    scenarioJa:
      '外部パートナーへ配布済みの Blob 用 Service SAS トークンについて、提携終了や漏洩疑いが発生した際に、ストレージアカウントキー全体をローテーションして他アプリを停止させることなく、該当 SAS のみサーバー側で即座に無効化したいと考えています。',
    scenarioEn:
      'If a partner engagement ends or a Service SAS token is leaked, you must revoke that SAS immediately on the server side without rotating the storage account key or breaking other applications.',
    questionJa:
      'Azure Storage の SAS トークンの「ストアドアクセスポリシー（Stored Access Policy）」を使うメリットはどれですか？',
    questionEn:
      'What is the key benefit of linking a Service SAS token to a Stored Access Policy in Azure Storage?',
    options: [
      {
        id: 'A',
        textJa: 'クライアント向けの SAS トークンを一度に数百万件規模で一括生成できる',
        textEn: 'Supports generating millions of SAS tokens simultaneously in batch',
        isCorrect: false,
        explanationJa:
          'トークン生成数の問題ではなく、発行済み SAS のライフサイクル管理（変更・失効）が主目的です。',
        explanationEn:
          'Stored Access Policies focus on post-issuance lifecycle management rather than bulk generation.',
      },
      {
        id: 'B',
        textJa: 'アカウントキーを変更せずにサーバー側から SAS の期限変更や即時失効ができる',
        textEn: 'Modifies or revokes linked SAS tokens server-side without rotating keys',
        isCorrect: true,
        explanationJa:
          'コンテナー等にストアドアクセスポリシーを作成してそれに紐づけた Service SAS を発行すれば、ポリシー側の終了時刻を過去に変更したりポリシー自体を削除したりするだけで、紐づくすべての SAS トークンを即時に失効させられます。',
        explanationEn:
          'By linking a Service SAS to a Stored Access Policy, you can extend/shorten expiry, adjust permissions, or delete the policy to immediately revoke all linked SAS tokens without rotating account keys.',
      },
      {
        id: 'C',
        textJa: '署名ハッシュアルゴリズムが強化され SAS トークン自体の暗号強度が向上する',
        textEn: 'Upgrades the HMAC signature strength of issued SAS query parameters',
        isCorrect: false,
        explanationJa:
          '署名アルゴリズム（HMAC-SHA256 等）の強度は同じであり、違いは管理参照方法です。',
        explanationEn:
          'Cryptographic signing strength remains identical; the difference is centralized policy reference.',
      },
      {
        id: 'D',
        textJa: '認証不要なパブリックコンテナーへの匿名読み取りアクセスを一時開放できる',
        textEn: 'Enables anonymous public read access across designated blob containers',
        isCorrect: false,
        explanationJa:
          '匿名パブリックアクセスとは無関係です。',
        explanationEn:
          'Stored Access Policies do not enable anonymous public access.',
      },
    ],
    overallExplanationJa:
      'アドホックな SAS（ポリシーに紐づかない SAS）は URL 自体に権限と期限が埋め込まれるため、途中で無効化するにはアカウントキー自体を再生成するしかありません。**ストアドアクセスポリシー**を参照した Service SAS を発行しておけば、ポリシー削除だけで即座に失効できます（※なお User Delegation SAS や Account SAS には非対応で、Blob/File/Queue/Table ごとに上限 5 ポリシーまで定義可能）。',
    overallExplanationEn:
      'Ad-hoc Service SAS tokens cannot be revoked individually without rotating storage account keys. Linking Service SAS tokens to a **Stored Access Policy** allows instant server-side revocation or expiry updates.',
    keyPointsJa: [
      'ストアドアクセスポリシーに紐づけた Service SAS はキーローテーションなしでサーバー側から即時失効・期間変更が可能',
      'User Delegation SAS を使う場合は Entra ID 資格情報の失効・アクセス権剥奪でも制御できる',
    ],
    keyPointsEn: [
      'Enables instant revocation or expiry changes without rotating storage account keys',
      'Applies only to Service SAS (up to 5 policies per container/share/queue/table)',
    ],
    referenceTopic: 'Azure Storage - 保存済みアクセスポリシー（Stored Access Policy）',
  },
  {
    id: 'sakitoo-q54',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure DDoS Protection Standard を関連付ける対象スコープ（VNet）',
    titleEn: 'Target Resource Scope for Enabling Azure DDoS Protection Standard',
    scenarioJa:
      'パブリック Load Balancer や Application Gateway などのパブリック IP リソースを含む本番仮想ネットワークを大規模な L3/L4 ボリューム型 DDoS 攻撃から保護するため、DDoS Protection プランの導入を進めています。',
    scenarioEn:
      'You are deploying Azure DDoS Protection to defend production public Load Balancers and Application Gateways from volumetric L3/L4 DDoS attacks with adaptive tuning and telemetry.',
    questionJa:
      'DDoS 攻撃から Azure リソースを保護するために Azure DDoS Protection Standard（Network Protection）を有効化すべき対象リソースはどれですか？',
    questionEn:
      'On which Azure resource should you enable Azure DDoS Protection Standard (Network Protection)?',
    options: [
      {
        id: 'A',
        textJa: 'サブネットや NIC に紐づくすべてのネットワークセキュリティグループ（NSG）',
        textEn: 'Every Network Security Group (NSG) attached to subnets and VM NICs',
        isCorrect: false,
        explanationJa:
          'NSG に DDoS Protection プランを関連付ける機能はありません。',
        explanationEn:
          'DDoS Protection plans are not attached to NSGs.',
      },
      {
        id: 'B',
        textJa: '仮想マシンに接続されている暗号化済みのマネージドディスク（OS/データ）',
        textEn: 'Managed OS and data disks attached to production Azure virtual machines',
        isCorrect: false,
        explanationJa:
          'マネージドディスクはパブリック IP を持たず対象ではありません。',
        explanationEn:
          'Managed Disks do not have public IP endpoints.',
      },
      {
        id: 'C',
        textJa: 'プライベートアクセス構成のみを利用している Azure Cosmos DB アカウント',
        textEn: 'Azure Cosmos DB accounts configured exclusively for private endpoints',
        isCorrect: false,
        explanationJa:
          'Azure DDoS Protection は VNet に配置されたパブリック IP リソースを保護するサービスです。',
        explanationEn:
          'Azure DDoS Protection protects public IP addresses associated with resources inside a VNet.',
      },
      {
        id: 'D',
        textJa: 'パブリック IP を持つ LB や App Gateway を配置した仮想ネットワーク（VNet）',
        textEn: 'Virtual Networks (VNets) hosting public IP resources like LB or AppGW',
        isCorrect: true,
        explanationJa:
          'Azure DDoS Network Protection（Standard プラン）は **仮想ネットワーク（VNet）** レベルで有効化します。関連付けた VNet 内のすべてのパブリック IP リソース（Application Gateway、Azure Firewall、Load Balancer、VM のパブリック IP 等）に対し、アプリ規模に応じたアダプティブチューニング、メトリクス・フローログテレメトリ、コスト保証が自動適用されます。',
        explanationEn:
          'Azure DDoS Protection Standard is enabled at the VNet level, automatically protecting all public IP addresses within that VNet with adaptive tuning, rich telemetry/alerts, and cost protection.',
      },
    ],
    overallExplanationJa:
      'Azure DDoS Protection Standard（DDoS Network Protection）は VNet に対して DDoS 保護プランを関連付けることで、その VNet 内のパブリック IP アドレスを自動保護します（また個別パブリック IP 単位の「DDoS IP Protection」プランも存在します）。L7 の HTTP フラッド等には Application Gateway 上の WAF と併用するのがベストプラクティスです。',
    overallExplanationEn:
      'Enable **Azure DDoS Protection Standard** on the **VNet** hosting your public-facing resources (Load Balancer, Application Gateway, Azure Firewall) for adaptive mitigation and Sentinel/Monitor telemetry; pair with Azure WAF for Layer 7 protection.',
    keyPointsJa: [
      'DDoS Protection Standard（Network Protection）は仮想ネットワーク（VNet）単位で有効化する',
      'L3/L4 保護は DDoS Protection、L7 HTTP 攻撃保護は Azure WAF と組み合わせて多層防御する',
    ],
    keyPointsEn: [
      'Attach the DDoS Protection plan to the VNet containing public IP resources',
      'Combine with Azure WAF for Layer 7 HTTP flood mitigation',
    ],
    referenceTopic: 'Azure DDoS Protection の適用スコープ（VNet）',
  },
  {
    id: 'sakitoo-q55',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Storage Blob データプレーン向けの最小権限 RBAC ロール',
    titleEn: 'Least-Privilege Data-Plane RBAC Roles for Azure Blob Storage',
    scenarioJa:
      'Shared Key（アクセスキー）を廃止して Microsoft Entra ID 認証でアプリケーションやユーザーに Azure Blob Storage 内のオブジェクトへアクセスさせるため、管理プレーンではなく Blob データのみの最小権限 RBAC ロールを割り当てます。',
    scenarioEn:
      'You are migrating from Shared Keys to Microsoft Entra ID authentication for Azure Blob Storage and need to assign least-privilege data-plane RBAC roles rather than control-plane roles.',
    questionJa:
      'Azure Storage アカウントで Microsoft Entra ID 認証を使用した Blob アクセスで最小権限を付与する RBAC ロールはどれですか？',
    questionEn:
      'Which Azure RBAC roles grant least-privilege data-plane access to blobs using Microsoft Entra ID authentication?',
    options: [
      {
        id: 'A',
        textJa: 'Storage Account Key Operator Service Role',
        textEn: 'Storage Account Key Operator Service Role',
        isCorrect: false,
        explanationJa:
          'ストレージアカウントのアクセスキー一覧取得・再生成を行う管理用ロールであり、Entra 認証による Blob データ読み書き権限は付与されません。',
        explanationEn:
          'This role manages account keys and does not grant Entra data-plane blob read/write access.',
      },
      {
        id: 'B',
        textJa: 'Storage Account Contributor（管理プレーン構成用）',
        textEn: 'Storage Account Contributor (control plane)',
        isCorrect: false,
        explanationJa:
          'Storage Account Contributor はストレージアカウントという「Azure リソース（管理プレーン）」を作成・設定変更するロールであり、Entra 認証での Blob データプレーン読み書き権限は含まれません（アカウントキーは取得できてしまうため最小権限違反にもなります）。',
        explanationEn:
          'Storage Account Contributor is a control-plane role for managing the account resource itself and does not grant Entra ID data-plane blob access.',
      },
      {
        id: 'C',
        textJa: 'Storage Blob Data Reader / Contributor',
        textEn: 'Storage Blob Data Reader or Contributor',
        isCorrect: true,
        explanationJa:
          'Azure Storage で Entra ID 認証による Blob データアクセスを許可するには、データプレーン専用ロールである「Storage Blob Data Reader（読み取り専用）」または「Storage Blob Data Contributor（読み取り・書き込み・削除）」をストレージアカウントまたはコンテナー単位で割り当てます。',
        explanationEn:
          'Data-plane roles "Storage Blob Data Reader" (read) and "Storage Blob Data Contributor" (read/write/delete) grant Entra ID access to blob contents without granting control-plane modification rights.',
      },
      {
        id: 'D',
        textJa: 'Owner（サブスクリプションやリソース全体の完全管理権限）',
        textEn: 'Owner (full control-plane & IAM access)',
        isCorrect: false,
        explanationJa:
          'Owner ロールはサブスクリプションやアカウントの全権限（IAM 操作含む）を持ち、最小権限の原則に反するだけでなく Entra 認証での直接 Blob データアクセス権限も標準では含みません。',
        explanationEn:
          'Owner violates least privilege and is a control-plane role without built-in blob data actions.',
      },
    ],
    overallExplanationJa:
      'Azure RBAC では「コントロールプレーン（リソース構成管理: `Contributor`/`Owner`/`Storage Account Contributor`）」と「データプレーン（実際の Blob データ操作: `Storage Blob Data Reader`/`Contributor`/`Owner`）」が厳密に分離されています。Entra 認証でアプリや分析担当者に Blob を読ませる場合は必ず **Storage Blob Data Reader / Contributor** を使います。',
    overallExplanationEn:
      'Azure separates control-plane management roles (`Storage Account Contributor`) from data-plane access roles (**Storage Blob Data Reader / Contributor**). Always assign the data-plane roles for Entra ID blob access.',
    keyPointsJa: [
      'Entra 認証による Blob 操作にはデータプレーンロール（Storage Blob Data Reader / Contributor）が必須',
      'Storage Account Contributor や Owner だけでは Entra 認証によるデータプレーンアクセスはできない',
    ],
    keyPointsEn: [
      'Assign Storage Blob Data Reader or Storage Blob Data Contributor for Entra ID blob access',
      'Control-plane roles like Contributor/Owner do not grant data-plane blob actions',
    ],
    referenceTopic: 'Azure Storage のデータプレーン RBAC ロール',
  },
  {
    id: 'sakitoo-q56',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Database における Microsoft Entra 専用認証（Azure AD-only）の効果',
    titleEn: 'Impact of Enabling Microsoft Entra-Only Authentication on Azure SQL Database',
    scenarioJa:
      'データベースに対するパスワードスプレー攻撃や静的 `sa`/SQL アカウント資格情報の漏洩リスクを排除するため、Azure SQL Server の認証ポリシーで Microsoft Entra 専用認証（旧 Azure AD-only authentication）を有効化しようとしています。',
    scenarioEn:
      'To eliminate SQL password-spray attacks and static SQL login risks, you plan to enable Microsoft Entra-only authentication (formerly Azure AD-only authentication) on an Azure SQL Server.',
    questionJa:
      'Azure SQL Database で Entra ID（Azure AD）認証専用に設定する「Azure AD-only 認証」を有効化した場合の影響はどれですか？',
    questionEn:
      'What happens when you enable Microsoft Entra-only (Azure AD-only) authentication on an Azure SQL Server?',
    options: [
      {
        id: 'A',
        textJa: '既存の SQL サーバー認証（ユーザー名とパスワード）も継続して利用できる',
        textEn: 'Legacy SQL Server username/password logins continue working alongside',
        isCorrect: false,
        explanationJa:
          'Entra 専用認証を有効化すると、SQL 認証はすべて拒否されます。',
        explanationEn:
          'SQL authentication logins are blocked once Entra-only authentication is enabled.',
      },
      {
        id: 'B',
        textJa: '認証トークンの軽量化によりデータベースのクエリ応答性能が大幅に向上する',
        textEn: 'Database query throughput improves due to streamlined token parsing',
        isCorrect: false,
        explanationJa:
          '認証モードの制限であり、クエリの処理性能向上機能ではありません。',
        explanationEn:
          'This is an authentication enforcement control rather than a performance feature.',
      },
      {
        id: 'C',
        textJa: 'SQL サーバー認証が無効化されすべての接続に Entra ID 認証が必須になる',
        textEn: 'SQL Server auth is disabled and all connections require Entra ID auth',
        isCorrect: true,
        explanationJa:
          'Microsoft Entra 専用認証（`azureADOnlyAuthentication`）を有効にすると、サーバー管理者アカウントを含むすべての SQL 認証（ユーザー名＋パスワード）ログインが無効化・拒否され、マネージド ID や Entra ユーザー/グループなど Entra ID ベースの認証のみが許可されます。',
        explanationEn:
          'Enabling Microsoft Entra-only authentication disables all SQL authentication logins (including the SQL server admin) and enforces Entra ID tokens (users, groups, service principals, managed identities) for every connection.',
      },
      {
        id: 'D',
        textJa: '条件付きアクセスポリシーを設定しなくても全接続へ自動的に MFA が強制される',
        textEn: 'MFA is automatically enforced on all logins without Conditional Access',
        isCorrect: false,
        explanationJa:
          'MFA の要求は Entra ID の条件付きアクセスポリシー側で Azure SQL Database（または全クラウドアプリ）に対して構成します。',
        explanationEn:
          'MFA enforcement for SQL connections is configured via Conditional Access policies rather than automatically enabled by this toggle.',
      },
    ],
    overallExplanationJa:
      'Azure SQL Server や Azure SQL Managed Instance で「Microsoft Entra 専用認証のみ（Microsoft Entra-only authentication）」を有効にする前提として、まず **Microsoft Entra 管理者** が設定されている必要があります。これによりレガシーな SQL 認証や共有パスワードを廃止し、条件付きアクセス・PIM・マネージド ID に一元統合できます。',
    overallExplanationEn:
      'Enabling Microsoft Entra-only authentication (after configuring a Microsoft Entra admin) eliminates legacy SQL username/password logins and unifies authentication under Entra ID, Managed Identities, and Conditional Access.',
    keyPointsJa: [
      'Microsoft Entra 専用認証を有効にすると SQL 認証（SQL サーバーログイン）が完全に無効化される',
      '事前に Microsoft Entra 管理者を設定し、既存アプリのマネージド ID / Entra 移行を済ませておく必要がある',
    ],
    keyPointsEn: [
      'Disables all SQL Server authentication logins completely',
      'Requires configuring a Microsoft Entra admin beforehand and migrating apps to Entra/Managed Identities',
    ],
    referenceTopic: 'Azure SQL の Microsoft Entra 専用認証',
  },
  {
    id: 'sakitoo-q57',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'プライベートエンドポイントと Azure Private DNS ゾーンの関連付け目的',
    titleEn: 'Purpose of Linking Azure Private DNS Zones to Private Endpoints',
    scenarioJa:
      'ストレージアカウント `storage1` 用に VNet 内のプライベートエンドポイントを作成しました。アプリケーションコードの接続先 FQDN（`storage1.blob.core.windows.net`）を変更せずに、VNet 内の VM からプライベート IP 経由で接続させたいと考えています。',
    scenarioEn:
      'You created a Private Endpoint for `storage1` inside your VNet. Applications must keep connecting to `storage1.blob.core.windows.net` without code changes, resolving it to the Private Endpoint’s private IP.',
    questionJa:
      'Azure Private DNS ゾーンをプライベートエンドポイント（および VNet）に関連付ける目的はどれですか？',
    questionEn:
      'What is the purpose of associating an Azure Private DNS zone with a Private Endpoint and VNet?',
    options: [
      {
        id: 'A',
        textJa: 'パブリックインターネット上の外部 DNS 名前解決の応答速度を高める',
        textEn: 'Accelerate public internet DNS lookups across Azure edge servers',
        isCorrect: false,
        explanationJa:
          'パブリック DNS 解決の高速化ではなく、プライベート空間での名前解決オーバーライドが目的です。',
        explanationEn:
          'Private DNS zones resolve private endpoints internally rather than speeding up public internet DNS.',
      },
      {
        id: 'B',
        textJa: 'VNet 内のプライベート IP アドレスを外部のパブリック DNS へ公開する',
        textEn: 'Publish internal private IP mappings into public internet DNS zones',
        isCorrect: false,
        explanationJa:
          'プライベート IP アドレスをパブリックインターネットに公開することはありません。',
        explanationEn:
          'Private DNS records are never published to public internet DNS servers.',
      },
      {
        id: 'C',
        textJa: 'ピアリングされたすべての VNet 間の一般トラフィック経路を自動で統合する',
        textEn: 'Automatically replace VNet peering links across regional deployments',
        isCorrect: false,
        explanationJa:
          'Private DNS ゾーンは特定の `privatelink.*` ドメインの名前解決をプライベート IP に向けるためのものです。',
        explanationEn:
          'Private DNS zones override FQDN resolution for private link resources rather than replacing VNet networking.',
      },
      {
        id: 'D',
        textJa: 'サービス FQDN が VNet 内でプライベート IP に正しく解決されるようにする',
        textEn: 'Resolve the service FQDN to its Private Endpoint private IP inside VNets',
        isCorrect: true,
        explanationJa:
          'Azure PaaS サービスのパブリック FQDN は CNAME で `*.privatelink.*` を指すようになります。`privatelink.blob.core.windows.net` 等のプライベート DNS ゾーンを VNet にリンクして A レコードを登録することで、アプリは既存の FQDN と TLS 証明書検証のままプライベート IP へ自動接続できます。',
        explanationEn:
          'Linking the matching Private DNS zone (e.g., `privatelink.blob.core.windows.net`) to your VNet resolves the resource’s standard FQDN to its Private Endpoint private IP transparently, preserving TLS certificate validation without code changes.',
      },
    ],
    overallExplanationJa:
      'プライベートエンドポイントを作成しただけでは、クライアントが `storage1.blob.core.windows.net` を名前解決するとパブリック IP が返り通信が失敗します。対応する `privatelink.*` プライベート DNS ゾーンを作成して A レコードを登録し、クライアントが存在する VNet（ピアリング先 VNet 含む）にリンクすることで、シームレスにプライベート IP へ解決されます。',
    overallExplanationEn:
      'Private Endpoints rely on `privatelink.*` Private DNS zones linked to client VNets so standard service FQDNs resolve to internal private IPs without modifying connection strings or breaking TLS validation.',
    keyPointsJa: [
      'プライベート DNS ゾーン（privatelink.*）を VNet にリンクすることで標準 FQDN がプライベート IP に解決される',
      '接続文字列や TLS 証明書ホスト名を変更せずに閉域化を実現できる',
    ],
    keyPointsEn: [
      'Link `privatelink.*` Private DNS zones to client VNets so standard FQDNs resolve to private IPs',
      'Preserves connection strings and TLS certificate hostname matching',
    ],
    referenceTopic: 'Azure Private Endpoint の DNS 構成（Private DNS Zone）',
  },
  {
    id: 'sakitoo-q58',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Firewall Standard SKU における HTTPS アプリケーションルールの SNI 制限',
    titleEn: 'SNI-Only Inspection Limit of HTTPS Application Rules in Azure Firewall Standard',
    scenarioJa:
      'Azure Firewall Standard SKU を導入した環境で、アプリケーションルールコレクションを使用して送信先の HTTPS ドメイン（FQDN）ごとに許可・拒否を設定しようとしています。Standard SKU で実際に何が検査され、何が検査できないかを把握する必要があります。',
    scenarioEn:
      'You use Azure Firewall Standard SKU Application Rule Collections to filter outbound HTTPS traffic by destination FQDN and need to understand what Standard SKU inspects versus what it cannot inspect.',
    questionJa:
      'Azure Firewall のアプリケーションルールコレクションで HTTPS 通信を宛先 FQDN で制御する際の制限はどれですか？（Premium SKU を除く）',
    questionEn:
      'What limitation applies when filtering HTTPS traffic by FQDN in Azure Firewall Application Rules (excluding Premium SKU)?',
    options: [
      {
        id: 'A',
        textJa: '送信元や宛先の TCP/UDP ポート番号と IP アドレスのみでしか制御できない',
        textEn: 'Rules can filter solely by TCP/UDP ports and raw IP prefixes',
        isCorrect: false,
        explanationJa:
          'Standard SKU でもアプリケーションルールを使えばポートだけでなく FQDN（SNI ヘッダー）による制御が可能です。',
        explanationEn:
          'Standard SKU Application Rules can filter by FQDN via SNI rather than just port numbers.',
      },
      {
        id: 'B',
        textJa: 'SNI の FQDN 一致のみ検査でき、暗号化された URL パスや中身は確認できない',
        textEn: 'Only SNI hostnames are checked; encrypted URL paths remain opaque',
        isCorrect: true,
        explanationJa:
          'Azure Firewall Standard SKU には TLS 終端・検査機能がないため、HTTPS ハンドシェイク時の平文 SNI フィールドを読んで FQDN マッチングを行うことしかできません。暗号化された URL パス単位の制御や IDPS/マルウェア検査には Premium SKU の TLS 検査が必要です。',
        explanationEn:
          'Because Azure Firewall Standard lacks TLS termination/inspection, HTTPS Application Rules can only inspect the cleartext SNI header for FQDN matching and cannot see URL paths or encrypted payloads.',
      },
      {
        id: 'C',
        textJa: '暗号化通信の検査に対応していないためすべての HTTPS トラフィックが遮断される',
        textEn: 'All outbound HTTPS sessions are blocked unless TLS inspection is on',
        isCorrect: false,
        explanationJa:
          '許可された FQDN に一致する HTTPS トラフィックは問題なく通過します。',
        explanationEn:
          'Allowed HTTPS FQDNs pass normally through Application Rules.',
      },
      {
        id: 'D',
        textJa: 'FQDN によるドメイン名フィルタリングはネットワークルールでのみ構成できる',
        textEn: 'FQDN-based domain filtering can be configured only in Network Rules',
        isCorrect: false,
        explanationJa:
          'HTTP/HTTPS の SNI/Host ヘッダーを用いた FQDN 制御および Web カテゴリはアプリケーションルールコレクションの主要機能です（ネットワークルールでの FQDN は DNS 解決ベースです）。',
        explanationEn:
          'HTTP/HTTPS SNI and Host-header FQDN filtering is a core Application Rule feature.',
      },
    ],
    overallExplanationJa:
      'Azure Firewall Standard のアプリケーションルールで `https` を指定した場合、TLS ハンドシェイク内の平文の **SNI（Server Name Indication）** から宛先ホスト名を読み取って許可・拒否を判定します。したがって、たとえば `example.com/safe` だけ許可して `example.com/malicious` を拒否するような **パス単位の制御** や **暗号化通信の内容検査** を行うには **Premium SKU（TLS Inspection）** が必要です。',
    overallExplanationEn:
      'In Standard SKU, HTTPS Application Rules match the unencrypted **SNI** field in the TLS ClientHello. Full URL path filtering and payload inspection require upgrading to **Azure Firewall Premium** with TLS Inspection.',
    keyPointsJa: [
      'Standard SKU の HTTPS アプリケーションルールは SNI（FQDN）のみ確認でき、パスや中身は見られない',
      'URL パス単位のフィルタや HTTPS 内容検査には Premium SKU の TLS Inspection が必要',
    ],
    keyPointsEn: [
      'Standard SKU inspects only the SNI hostname for HTTPS traffic',
      'Full URL path and payload inspection require Azure Firewall Premium with TLS Inspection',
    ],
    referenceTopic: 'Azure Firewall アプリケーションルール（SNI と TLS 検査）',
  },
  {
    id: 'sakitoo-q59',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure SQL Advanced Threat Protection によるブルートフォース攻撃検知',
    titleEn: 'Brute-Force Attack Detection in Azure SQL Advanced Threat Protection',
    scenarioJa:
      'インターネットまたは侵害された端末から Azure SQL Server への認証試行が急増しており、Defender for Databases（Advanced Threat Protection）が発報するブルートフォース関連アラートの判定条件を確認しています。',
    scenarioEn:
      'You are reviewing alert detection criteria in Defender for Azure SQL Advanced Threat Protection (ATP) to understand how credential brute-force attacks are identified.',
    questionJa:
      'Azure SQL Database の Advanced Threat Protection（ATP）で「ブルートフォース攻撃」として検出されるアラートはどれですか？',
    questionEn:
      'Which activity triggers a brute-force attack alert in Azure SQL Advanced Threat Protection (ATP)?',
    options: [
      {
        id: 'A',
        textJa: '短時間での連続した多数のログイン認証失敗',
        textEn: 'A burst of failed SQL login attempts in short time',
        isCorrect: true,
        explanationJa:
          'Azure SQL の Advanced Threat Protection（Defender for Databases）は、特定の IP や発信元から短時間に多数の SQL 認証失敗（正しい資格情報へのブルートフォースやパスワードスプレー等）が発生したことを検知すると、「Potential brute force attempt」アラートを生成します。',
        explanationEn:
          'Azure SQL ATP flags a potential brute-force attack alert when it observes an unusually high number of failed login attempts within a short timeframe.',
      },
      {
        id: 'B',
        textJa: '承認済み管理者による大量テーブルデータ抽出',
        textEn: 'Large bulk table export run by an authorized admin',
        isCorrect: false,
        explanationJa:
          '大量データ読み出しは「異常なデータ抽出（Anomalous data extraction）」などの別アラートカテゴリであり、ブルートフォース攻撃ではありません。',
        explanationEn:
          'Large exports relate to data exfiltration anomaly alerts rather than login brute-force detection.',
      },
      {
        id: 'C',
        textJa: 'メンテナンス作業中の不要インデックス削除',
        textEn: 'Dropping an unused index during schema maintenance',
        isCorrect: false,
        explanationJa:
          '通常の DDL スキーマ変更であり、ログインに対するブルートフォース攻撃アラートにはなりません。',
        explanationEn:
          'Dropping an index is a schema change operation rather than an authentication brute-force signal.',
      },
      {
        id: 'D',
        textJa: '一時的な負荷上昇に伴うスロークエリの急増',
        textEn: 'A sudden spike in slow-running database queries',
        isCorrect: false,
        explanationJa:
          'スロークエリの増加はパフォーマンス監視事象であり、ブルートフォース検知とは関係ありません。',
        explanationEn:
          'Slow query spikes indicate performance bottlenecks rather than brute-force logins.',
      },
    ],
    overallExplanationJa:
      'Defender for Azure SQL（ATP）は、SQL インジェクション、異常なクライアント拠点からのアクセス、そして**短時間に多数のログイン失敗が集中するブルートフォース攻撃（有効ユーザーへの攻撃／存在しないユーザー列挙含む）**を自動検出します。さらに Entra-only 認証や Private Endpoint を併用することで攻撃経路自体を塞ぐことが可能です。',
    overallExplanationEn:
      'Azure SQL Advanced Threat Protection alerts on brute-force login attempts (high failed login bursts), SQL injection, and anomalous client access—complemented by disabling SQL auth and using Private Endpoints.',
    keyPointsJa: [
      '短時間での大量の認証失敗 ＝ SQL ブルートフォース攻撃アラートとして検知される',
      '対策として Private Endpoint による閉域化や Microsoft Entra 専用認証への切り替えが有効',
    ],
    keyPointsEn: [
      'High bursts of failed logins trigger SQL brute-force alerts in Defender for Databases',
      'Combine with Private Endpoints and Entra-only authentication for prevention',
    ],
    referenceTopic: 'Azure SQL Advanced Threat Protection - ブルートフォース検知',
  },
  {
    id: 'sakitoo-q60',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ストレージファイアウォールの「信頼されたサービス例外」の適切な利用シナリオ',
    titleEn: 'Appropriate Scenarios for "Allow Trusted Azure Services" on Storage Firewall',
    scenarioJa:
      'Azure Storage アカウントのパブリックアクセスを「選択された仮想ネットワークと IP アドレス」に制限しました。すると、Azure Backup によるバックアップ保存や Azure Monitor の診断ログ出力が一部のマネージドサービスから失敗する可能性が浮上しました。',
    scenarioEn:
      'After restricting an Azure Storage account firewall to selected VNets and IP addresses, you need to ensure first-party platform services like Azure Backup or Azure Monitor can still write diagnostics and backups securely.',
    questionJa:
      'Azure Storage アカウントのストレージファイアウォールで例外（Exception）として「信頼された Azure サービスを許可する」を設定すべきシナリオはどれですか？',
    questionEn:
      'In which scenario should you enable the "Allow Azure services on the trusted services list to access this storage account" exception?',
    options: [
      {
        id: 'A',
        textJa: 'ストレージアカウントの IOPS 性能とデータ転送スループットを向上させたい場合',
        textEn: 'When you need higher storage IOPS and throughput for applications',
        isCorrect: false,
        explanationJa:
          'パフォーマンス向上用ではなく、特定の信頼された Azure プラットフォームサービスからのアクセス許可例外です。',
        explanationEn:
          'This exception authorizes specific Azure platform services rather than increasing performance.',
      },
      {
        id: 'B',
        textJa: 'Azure Backup や Monitor など信頼された Azure サービスからアクセスさせる場合',
        textEn: 'When trusted Azure services like Backup or Monitor require access',
        isCorrect: true,
        explanationJa:
          'ファイアウォールでパブリックアクセスを制限しているストレージアカウントに対し、VNet 内に存在しない Azure ファーストパーティの基盤サービス（Azure Backup、Azure Monitor、Azure Event Grid、Azure Key Vault 等）からアクセスさせたい場合に「信頼されたサービス一覧にある Azure サービスに許可」を設定します（可能な場合はリソースインスタンスルールで特定リソースのみ絞るのがさらに安全です）。',
        explanationEn:
          'Enable the trusted Azure services exception when first-party services outside your VNet—such as Azure Backup, Azure Monitor, or Event Grid—must access the firewalled storage account (ideally narrowed with resource instance rules where supported).',
      },
      {
        id: 'C',
        textJa: 'トランザクション課金や下りネットワーク転送料金の月額コストを削減したい場合',
        textEn: 'When you want to lower monthly storage egress and transaction fees',
        isCorrect: false,
        explanationJa:
          '課金コスト削減のためのオプションではありません。',
        explanationEn:
          'It is a network firewall exception, not a cost optimization toggle.',
      },
      {
        id: 'D',
        textJa: 'セキュリティ要件の有無にかかわらず全ストレージアカウントで常に有効化すべき',
        textEn: 'When deploying any storage account, regardless of network isolation',
        isCorrect: false,
        explanationJa:
          '不要な場合まで広く許可すると攻撃対象面（他テナントの信頼されたサービスが自アカウントへの到達を試みる経路等）を広げるため、必要な場合のみ、あるいは特定リソースインスタンス規則で絞って許可します。',
        explanationEn:
          'Enabling it unnecessarily widens exposure; only enable when required, or prefer specific resource instance rules.',
      },
    ],
    overallExplanationJa:
      'ストレージファイアウォールの「信頼されたサービス一覧にある Azure サービス（Trusted Azure services）」例外は、VNet 外の Azure ファーストパーティサービス（Azure Backup、Azure Monitor、Azure Event Hubs 等）がストレージにアクセスできるようにします。より厳密には「リソースインスタンス（Resource instances）」規則を使うと、自サブスクリプション内の特定バックアップコンテナー等だけに限定することも可能です。',
    overallExplanationEn:
      'The Trusted Azure Services firewall exception allows verified Microsoft first-party services (like Azure Backup and Azure Monitor) to reach firewalled storage accounts. For tighter scope, pair with RBAC or Resource Instance rules.',
    keyPointsJa: [
      'Azure Backup / Azure Monitor 等の信頼されたファーストパーティサービスからの接続が必要な場合に使用する',
      '無条件に全アカウントで有効にするのではなく、不要時は無効にし、リソースインスタンス規則でさらに絞り込むのが推奨',
    ],
    keyPointsEn: [
      'Use when trusted first-party services like Azure Backup or Azure Monitor need access',
      'Combine with Entra RBAC / Managed Identity or Resource Instance rules to keep scope minimal',
    ],
    referenceTopic: 'Azure Storage ファイアウォールの信頼された Azure サービス例外',
  },
];
