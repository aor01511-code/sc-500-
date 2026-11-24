import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH6: Question[] = [
  {
    id: 'sc500-q89',
    number: 89,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: '隔離された OT 環境からの WEF / WEC 経由の Windows セキュリティ イベント収集',
    titleEn: 'Collecting Windows Security Events from Isolated OT Servers via WEF/WEC',
    scenarioJa: `あなたの組織には、隔離された運用技術 (OT) ネットワーク セグメントで稼働している 300 台の Windows Server 2012 R2 サーバーがあります。これらのサーバーには直接のインターネット接続がなく、Azure エンドポイントと通信できないため、各サーバーに直接 Azure Monitor エージェント (AMA) をインストールして構成することはできません。同じネットワーク セグメント内にある 1 台の強化された Windows Server 2019 マシンだけは、Azure への送信インターネット アクセスを持っています。

ネットワーク接続の制約を満たしながら、300 台すべての OT サーバーからの Windows セキュリティ イベントが Microsoft Sentinel によって確実に収集されるようにする必要があります。`,
    scenarioEn: `Your organization has 300 Windows Server 2012 R2 servers running in an isolated operational technology (OT) network segment. These servers have no direct internet connectivity and cannot communicate with Azure endpoints, so the Azure Monitor Agent (AMA) cannot be installed or configured directly on each server. A single hardened Windows Server 2019 machine in the same network segment does have outbound internet access to Azure.

You need to ensure that Windows Security events from all 300 OT servers are collected by Microsoft Sentinel while meeting the network connectivity constraints.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'OT サーバーを含むサブスクリプションに対して Microsoft Defender for Cloud の設定で Log Analytics エージェントの自動プロビジョニングを有効にし、Defender for Cloud がオンボーディングされたサーバーから Windows セキュリティ イベントを Microsoft Sentinel に自動転送するようにする',
        textEn: 'Enable auto-provisioning of the Log Analytics agent in Microsoft Defender for Cloud for the subscription containing the 300 OT servers, and rely on Defender for Cloud to automatically collect and forward Windows Security events from those servers directly to the Microsoft Sentinel workspace.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud によるエージェントの自動プロビジョニングは隔離されたサーバーの接続制限を解決せず、Defender for Cloud は WEF 経由で Windows セキュリティ イベントを Microsoft Sentinel に転送する仕組みでもありません。',
        explanationEn: 'Defender for Cloud auto-provisioning of agents does not resolve the connectivity limitation of the isolated servers, and Defender for Cloud is not the mechanism used to forward Windows Security events into Microsoft Sentinel via WEF.'
      },
      {
        id: 'B',
        textJa: '300 台の OT サーバーそれぞれに Azure Monitor エージェント (AMA) 拡張機能を手動でインストールし、各サーバー上のローカル Security イベント ログからすべての Windows セキュリティ イベントを収集して Microsoft Sentinel へ送信する単一のデータ収集ルール (DCR) を作成して関連付ける',
        textEn: 'Install the Azure Monitor Agent directly on each of the 300 isolated OT servers using offline packages, and create a single data collection rule (DCR) associated with all servers that collects Windows Security events from each machine\'s local Security event log and sends them to Microsoft Sentinel.',
        isCorrect: false,
        explanationJa: '【不正解】OT サーバーにはインターネット接続がないため、AMA は 300 台のサーバーから個別に Azure Monitor エンドポイントへ接続することができず、この環境では技術的に実現不可能です。',
        explanationEn: 'The OT servers have no internet connectivity, so AMA cannot connect to Azure Monitor endpoints from each of the 300 servers individually, making this approach technically impossible in this environment.'
      },
      {
        id: 'C',
        textJa: '300 台の OT サーバーを Windows イベント フォワーディング (WEF) ソース コンピューターとして構成し、インターネット接続のあるサーバーを Windows イベント コレクター (WEC) としてセキュリティ イベントを転送させ、WEC サーバーに AMA をインストールして ForwardedEvents ログからイベントを収集する DCR を作成する',
        textEn: 'Configure the 300 OT servers as Windows Event Forwarding (WEF) source computers that forward Security events to the internet-connected server acting as a Windows Event Collector (WEC), install the Azure Monitor Agent on the WEC server, and create a DCR that collects events from the ForwardedEvents log.',
        isCorrect: true,
        explanationJa: '【正解】Windows イベント フォワーディング (WEF) を使用すると、隔離されたソース コンピューターはインターネット アクセスを必要とせず、ローカル ネットワーク経由で WEC サーバーにセキュリティ イベントを転送できます。インターネット接続を持つコレクター (WEC) サーバーにのみ AMA をインストールし、ForwardedEvents ログから収集するように DCR を構成するのが、このシナリオでサポートされている Microsoft Sentinel の標準パターンです。',
        explanationEn: 'Windows Event Forwarding allows the isolated source computers to forward Security events over the local network to a WEC server without requiring internet access; installing AMA only on the internet-connected collector and configuring a DCR to collect from the ForwardedEvents log is the supported Microsoft Sentinel pattern for this scenario.'
      },
      {
        id: 'D',
        textJa: '300 台の OT サーバーそれぞれにレガシーな Log Analytics エージェント (Microsoft Monitoring Agent) をインストールしてワークスペース ID と共有キーを構成し、インターネット接続のあるサーバーを経由せずに Microsoft Sentinel で使用されている Log Analytics ワークスペースに直接接続する',
        textEn: 'Install the legacy Log Analytics agent (Microsoft Monitoring Agent) configured with the workspace ID and shared key on each of the 300 OT servers, and connect each server directly to the Log Analytics workspace used by Microsoft Sentinel without using the internet-connected server.',
        isCorrect: false,
        explanationJa: '【不正解】Log Analytics エージェント (MMA) はすでに廃止・提供終了しており、さらに各サーバーから Azure へのネットワーク接続が必要となるため、隔離された OT サーバーでは使用できません。',
        explanationEn: 'The Log Analytics agent (MMA) is deprecated and was retired, and it still requires network connectivity to Azure from each server, which is not available on the isolated OT servers.'
      }
    ],
    overallExplanationJa: `ソース コンピューターが Azure に直接到達できない隔離ネットワーク (OT 環境など) では、**Windows イベント フォワーディング (WEF)** を使用して、Azure への接続性を持つ **Windows イベント コレクター (WEC)** サーバーにイベントを一元集約します。

その WEC サーバーにのみ **Azure Monitor エージェント (AMA)** をインストールし、**ForwardedEvents** イベント チャネルを対象とするデータ収集ルール (DCR) を作成することが、隔離された Windows システムから Microsoft Sentinel へセキュリティ イベントを取り込むための正しくサポートされた方法です。`,
    overallExplanationEn: `When source computers cannot reach Azure directly, Windows Event Forwarding is used to centralize event collection on a WEC server that does have connectivity. Installing the Azure Monitor Agent only on that WEC server and building a DCR targeting the ForwardedEvents log is the correct, supported way to ingest Windows Security events from isolated systems into Microsoft Sentinel.`,
    keyPointsJa: [
      'インターネット接続のない隔離された多数の Windows サーバーからのログ収集 ＝ WEF (ソース) -> WEC (集約サーバー) ＋ AMA ＋ DCR (ForwardedEvents ログ)',
      'WEC サーバーのみが Azure への送信接続を持てば、隔離ホスト側に AMA を入れる必要がない',
      'MMA (レガシー Log Analytics エージェント) は提供終了済みであり、直接の接続も必要とする'
    ],
    keyPointsEn: [
      'Use Windows Event Forwarding (WEF) to send Security events from isolated servers to a Windows Event Collector (WEC)',
      'Install AMA only on the internet-connected WEC server and target the ForwardedEvents log in a DCR',
      'Avoid deprecated MMA agents and direct internet dependencies on OT servers'
    ],
    referenceTopic: 'WEF / WEC と AMA による隔離ネットワークの Sentinel ログ収集'
  },
  {
    id: 'sc500-q90',
    number: 90,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault の消去保護 (Purge Protection) による論理削除期間中の完全削除防止',
    titleEn: 'Preventing Premature Permanent Deletion with Key Vault Purge Protection',
    scenarioJa: `Contoso Ltd. は、本番アプリケーションが使用する TLS/SSL 証明書と API シークレットを格納するために ContosoKV という名前の Azure Key Vault を使用しています。内部監査中に、Key Vault 共同作成者 (Key Vault Contributor) ロールを割り当てられた IT チーム メンバーの 1 人が誤って重要な証明書を削除し、さらに即座に完全消去 (Purge) したため、コンテナーの論理的な削除 (Soft-delete) の保持期間が 90 日に設定されていたにもかかわらず、永久に復元不能になっていたことが判明しました。

今後、ユーザーに割り当てられた RBAC ロールやアクセス ポリシーに関係なく、論理的な削除の保持期間が経過するまで誰も削除済みシークレット、キー、証明書を永久に消去できないようにする必要があります。

既存のアクセス モデルは維持し、ロールの割り当ては一切変更してはなりません。`,
    scenarioEn: `Contoso Ltd. uses an Azure Key Vault named ContosoKV to store TLS/SSL certificates and API secrets used by production applications. During an internal audit, you discover that a member of the IT team, who has the Key Vault Contributor role assigned, accidentally deleted a critical certificate and then immediately purged it, making it permanently unrecoverable, even though the vault's soft-delete retention period was set to 90 days.

You need to ensure that going forward, deleted secrets, keys, and certificates cannot be permanently purged by anyone until the soft-delete retention period has expired, regardless of the RBAC roles or access policies assigned to users.

You must retain the existing access model and must not change any role assignments.`,
    questionJa: 'Key Vault の設定で何を構成すべきですか？',
    questionEn: 'What should you configure in the Key Vault settings?',
    options: [
      {
        id: 'A',
        textJa: 'アクセス許可モデルを Azure RBAC からアクセス ポリシーへ変更する',
        textEn: 'Switch the permission model to vault access policies.',
        isCorrect: false,
        explanationJa: '【不正解】Azure RBAC とコンテナー アクセス ポリシーを切り替えると権限の割り当て・評価方法は変わりますが、それ自体では論理削除されたアイテムの消去を防止できません。また既存のアクセス モデルやロール割り当てを変更しない要件にも反します。',
        explanationEn: 'Switching between Azure RBAC and vault access policies changes how permissions are assigned and evaluated, but it does not, by itself, prevent purging of soft-deleted items. Additionally, the requirement explicitly states that the existing access model and role assignments must not be changed.'
      },
      {
        id: 'B',
        textJa: '信頼されたネットワーク限定で Key Vault ファイアウォールを構成する',
        textEn: 'Configure a Key Vault firewall for trusted networks.',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault ファイアウォール設定はコンテナーへのネットワーク レベルのアクセスを制御しますが、接続を許可された権限ユーザーが論理削除済みオブジェクトを消去できるかどうかには影響しません。',
        explanationEn: 'Key Vault firewall settings control network-level access to the vault (for example, restricting access to specific virtual networks or IP ranges) but have no effect on whether an authorized, connected user can purge a soft-deleted secret, key, or certificate.'
      },
      {
        id: 'C',
        textJa: 'Key Vault で消去保護 (Purge protection) を有効にする',
        textEn: 'Enable purge protection on the Key Vault.',
        isCorrect: true,
        explanationJa: '【正解】消去保護 (Purge protection) は、一度有効にすると、Key Vault Contributor などの完全な削除・消去権限を持つユーザーやロールであっても、保持期間が満了する前に論理削除済みオブジェクトを永久削除することを強制的に禁止する Key Vault 設定です。既存のロール割り当てやアクセス モデルを変更せずに要件を直接満たします。',
        explanationEn: 'Purge protection is a Key Vault setting that, once enabled, prevents any user or role, including those with full delete/purge permissions such as Key Vault Contributor, from permanently deleting a soft-deleted object before the retention period expires. This directly addresses the requirement without changing any existing role assignments or access model.'
      },
      {
        id: 'D',
        textJa: '論理的な削除の保持期間を 90 日間へ再設定して強制する',
        textEn: 'Reapply the 90-day soft-delete retention setting.',
        isCorrect: false,
        explanationJa: '【不正解】論理的な削除の保持期間はすでに 90 日に設定されているため再設定しても効果はありません。論理的な削除だけでは削除を遅らせるのみで、消去 (Purge) 権限を持つユーザーが即座に永久削除するのを止めることはできません。',
        explanationEn: 'The soft-delete retention period was already set to 90 days, so setting it again has no effect and does not address the issue. Soft-delete alone only delays deletion; it does not stop someone with purge permissions from immediately purging the object, which is exactly what happened in the scenario.'
      }
    ],
    overallExplanationJa: `Key Vault の関連する 2 つの保護機能の役割を正確に区別することが重要です：
- **論理的な削除 (Soft-delete)**: 削除されたオブジェクトを指定の保持期間 (例: 90 日) 回復可能な状態で保持します。ただし単体では、消去権限を持つユーザーによる手動 Purge (完全消去) を防げません。
- **消去保護 (Purge protection)**: 有効化すると、特権ユーザーを含め誰であっても保持期間満了前の完全消去 (Purge) を一切実行できないよう強制します (一度有効化すると無効化不可)。

既存の RBAC モデルやロール割り当てを変更せずに早期完全削除を防ぐには、**消去保護 (Purge protection)** を有効化します。`,
    overallExplanationEn: `The scenario tests understanding of two related but distinct Key Vault protections: soft-delete (which retains deleted objects for a recovery window) and purge protection (which enforces that retention window against premature permanent deletion, even by privileged users). Because soft-delete alone did not stop the purge, enabling purge protection is the correct configuration to meet the stated requirement while leaving the access model unchanged.`,
    keyPointsJa: [
      'RBAC 権限を変えずに論理削除期間中の完全消去 (Purge) を禁止 ＝ Key Vault の消去保護 (Purge protection) を有効化',
      'Soft-delete のみでは Purge 権限を持つ管理者が即座に永久削除できてしまう',
      '消去保護は一度有効にするとコンテナーに対して取り消すことができない強力な保護機能'
    ],
    keyPointsEn: [
      'Enable Purge protection on Azure Key Vault to block permanent deletion before the soft-delete retention period expires',
      'Applies regardless of RBAC roles or access policies held by the user',
      'Soft-delete alone still permits immediate manual purging by authorized identities'
    ],
    referenceTopic: 'Azure Key Vault の論理的な削除と消去保護 (Purge Protection)'
  },
  {
    id: 'sc500-q91',
    number: 91,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'プライベート エンドポイント作成後の Azure SQL パブリック ネットワーク アクセス無効化',
    titleEn: 'Disabling Public Network Access After Deploying an Azure SQL Private Endpoint',
    scenarioJa: `Contoso Ltd. は、機密性の高い顧客レコードを格納する ContosoSQL という名前の Azure SQL Database をホストしています。セキュリティ チームは、仮想ネットワークの専用サブネット内に ContosoSQL 用の Azure Private Link プライベート エンドポイントを作成し、仮想ネットワーク内からの DNS クエリがデータベースの完全修飾ドメイン名 (FQDN) をエンドポイントのプライベート IP アドレスに解決することを確認しました。仮想ネットワーク内からの接続は期待どおりに機能しています。

セキュリティ レビュー中に、仮想ネットワーク外のクライアント IP アドレスから ContosoSQL のパブリック エンドポイントを使用してインターネット経由で依然として直接到達でき、プライベート エンドポイントが完全にバイパスされていることが判明しました。

既存のプライベート接続を維持しながら、プライベート エンドポイント経由でのみ ContosoSQL にアクセスできるようにする必要があります。`,
    scenarioEn: `Contoso Ltd. hosts an Azure SQL Database named ContosoSQL that stores sensitive customer records. The security team creates an Azure Private Link private endpoint for ContosoSQL inside a dedicated subnet of their virtual network and confirms that DNS queries from inside the virtual network resolve the database's fully qualified domain name (FQDN) to the private IP address of the endpoint. Connections from within the virtual network work as expected.

During a security review, the team discovers that ContosoSQL can still be reached directly over the internet using its public endpoint from client IP addresses outside the virtual network, bypassing the private endpoint entirely.

You need to ensure that ContosoSQL can only be accessed through the private endpoint, while preserving the existing private connectivity.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'Azure SQL Database サーバーで、「パブリック ネットワーク アクセス」(Public network access) 設定を「無効」(Disabled) に設定する',
        textEn: 'On the Azure SQL Database server, set the "Public network access" setting to "Disabled."',
        isCorrect: true,
        explanationJa: '【正解】プライベート エンドポイントを作成しても、リソースのパブリック エンドポイントは自動的には無効になりません。プライベート エンドポイント経由のプライベート接続を正常に機能させつつすべてのトラフィックをプライベート エンドポイント経由に強制するには、Azure SQL Database サーバー上で明示的に「パブリック ネットワーク アクセス」を「Disabled」に設定する必要があります。',
        explanationEn: 'Creating a private endpoint does not automatically disable the resource\'s public endpoint. You must explicitly set "Public network access" to "Disabled" on the Azure SQL Database server to ensure all traffic is forced through the private endpoint, while private connectivity via the private endpoint continues to function normally.'
      },
      {
        id: 'B',
        textJa: '仮想ネットワーク サブネット上で Microsoft.Sql 用のサービス エンドポイント (Service endpoint) を構成して SQL トラフィックを有効にする',
        textEn: 'On the virtual network subnet, configure and enable a service endpoint for Microsoft.Sql.',
        isCorrect: false,
        explanationJa: '【不正解】サービス エンドポイントは Microsoft バックボーン経由で仮想ネットワークの ID をサービスに拡張しますが、リソースのパブリック エンドポイントを無効にすることはなく、Private Link とは別の仕組みであるため、ContosoSQL へのパブリック インターネット アクセスを防止しません。',
        explanationEn: 'A service endpoint extends the virtual network identity to the service over the Microsoft backbone but does not disable the public endpoint of the resource, and it is a separate mechanism from Private Link; it would not prevent public internet access to ContosoSQL.'
      },
      {
        id: 'C',
        textJa: '仮想ネットワークに Azure Firewall をデプロイし、SQL サーバーのパブリック IP アドレス宛てのトラフィックを拒否する規則を作成する',
        textEn: 'Deploy Azure Firewall in the virtual network to block traffic to the SQL server public IP.',
        isCorrect: false,
        explanationJa: '【不正解】Azure Firewall は仮想ネットワークを流れるトラフィック (通常は送信またはサブネット間トラフィック) を制御するように設計されており、インターネット クライアントがデータベースのパブリック エンドポイントへ直接接続する経路には介在しないため傍受できません。',
        explanationEn: 'Azure Firewall is designed to control traffic that flows through the virtual network (typically outbound or inter-subnet traffic) and is not positioned to intercept internet clients connecting directly to the database\'s public endpoint, since that traffic never traverses the firewall.'
      },
      {
        id: 'D',
        textJa: 'サブネット上で、インターネット宛てのすべての送信トラフィックを拒否するネットワーク セキュリティ グループ (NSG) 規則を追加構成する',
        textEn: 'On the subnet, configure an NSG rule that denies all outbound traffic to the internet.',
        isCorrect: false,
        explanationJa: '【不正解】サブネットからの送信トラフィックをブロックする NSG 規則はそのサブネット内のリソースから発信されるトラフィックにのみ影響し、インターネット経由でデータベースのパブリック エンドポイントに直接接続する外部クライアントには影響しません。',
        explanationEn: 'A network security group rule that blocks outbound traffic from the subnet only affects traffic originating from resources inside that subnet; it has no effect on external clients connecting directly to the database\'s public endpoint over the internet.'
      }
    ],
    overallExplanationJa: `Azure Private Link プライベート エンドポイントを構成すると PaaS リソースへの安全なプライベート パスが作成されますが、**それだけではリソースのパブリック エンドポイントは無効になりません**。

パブリックな攻撃対象領域を完全に排除しプライベート エンドポイント経由のアクセスのみを許可するには、プライベート エンドポイントと DNS を構成した後で、Azure SQL Database サーバー (または Storage Account 等の対象リソース) 側の **Public network access を明示的に「Disabled」に設定する**必要があります。`,
    overallExplanationEn: `Configuring an Azure Private Link private endpoint provides a secure private path to a PaaS resource but does not, by itself, remove the resource's public endpoint. To fully secure access and eliminate the public attack surface, administrators must explicitly disable public network access on the resource (e.g., Azure SQL Database, Storage Account) after the private endpoint is deployed and DNS is configured.`,
    keyPointsJa: [
      'Private Endpoint を作成してもパブリック エンドポイントは開いたまま ＝ リソース側で「Public network access: Disabled」を明示的に設定する',
      'Public network access を無効化しても既存の Private Endpoint 経由の通信は正常に継続する',
      'VNet 内の Azure Firewall や NSG では外部インターネットから直接 PaaS パブリック エンドポイントへの通信を止められない'
    ],
    keyPointsEn: [
      'Creating a private endpoint does not automatically close the PaaS resource\'s public endpoint',
      'Explicitly set "Public network access" to "Disabled" on the Azure SQL Database server',
      'Traffic flowing through the private endpoint continues uninterrupted when public network access is disabled'
    ],
    referenceTopic: 'Azure SQL Private Endpoint 導入時のパブリック アクセス無効化'
  },
  {
    id: 'sc500-q92',
    number: 92,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'DCR の XPath クエリによる不要な Windows イベントの取り込み前フィルタリング',
    titleEn: 'Filtering Windows Security Events via DCR XPath Queries to Control Ingestion Cost',
    scenarioJa: `Contoso 社は、Azure Monitor エージェント (AMA) を使用して 400 台のサーバーから Microsoft Sentinel ワークスペースへ Windows セキュリティ イベントを収集しています。取り込み (Ingestion) コストが急増しており、分析の結果、ボリュームの大部分は Contoso 社の検出ルールが一切参照していない高頻度イベントによって占められていることがわかりました。

セキュリティ チームは、別のエージェントを展開したり各サーバー上の設定を個別に編集したりすることなく、分析ルールで使用する特定のイベント ID のみを引き続き収集し、それ以外のすべてのイベントの収集を停止したいと考えています。`,
    scenarioEn: `Contoso collects Windows Security events from 400 servers into a Microsoft Sentinel workspace using the Azure Monitor Agent. Ingestion cost has risen sharply, and analysis shows that a large share of the volume comes from high-frequency events that Contoso's detections never reference.

The security team wants to keep collecting the specific event IDs used by its analytics rules and stop collecting everything else, without deploying a different agent or editing settings on each individual server.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'イベント取り込み量を制限するため、Log Analytics ワークスペース レベルの 1 日あたりの上限 (Daily cap) を構成する',
        textEn: 'Configure a workspace-level daily cap on Log Analytics data ingestion to stop event collection once a threshold is reached.',
        isCorrect: false,
        explanationJa: '【不正解】1 日あたりの上限はしきい値に達すると取り込みを完全に停止するため、その日の残りの時間に監視の死角 (ブラインド スポット) が生じます。検出価値のないイベントだけを選別するのではなく、無差別にデータを取り込めなくなります。',
        explanationEn: 'A daily cap stops ingestion once the threshold is reached, which creates blind spots for the rest of the day. It limits spend indiscriminately rather than filtering out events that carry no detection value.'
      },
      {
        id: 'B',
        textJa: 'SecurityEvent テーブルのプラン構成を変更し、ログ単価の低い Auxiliary (補助) ログ プランへと移動する',
        textEn: 'Change the table plan configuration and move the SecurityEvent table in the workspace to the lower-cost Auxiliary logs plan.',
        isCorrect: false,
        explanationJa: '【不正解】安価なテーブル プランに変更してもギガバイトあたりの単価やクエリ体験が変わるだけで、同じ不要なイベントが引き続き収集され続けます。また検出で依存している分析機能 (Analytics tier の機能) も制限されてしまいます。',
        explanationEn: 'A cheaper table plan changes the cost per gigabyte and the query experience, but the same unnecessary events continue to be collected. It also reduces the analytics capability the team relies on for detections.'
      },
      {
        id: 'C',
        textJa: 'サーバーに関連付けられたデータ収集ルール (DCR) を編集し、XPath クエリを使用して必要なイベント ID のみを収集するようにする',
        textEn: 'Edit the data collection rule associated with the servers and use an XPath query to collect only the required event IDs.',
        isCorrect: true,
        explanationJa: '【正解】データ収集ルール (DCR) は Azure Monitor エージェントが何を収集するかを定義し、Windows イベント ログ データ ソースはチャネルおよびイベント ID でフィルタリングする XPath 式を受け入れます。ルールはマシン群に一元的に関連付けられているため、DCR を 1 度更新するだけで 400 台すべてのサーバーを個別に操作することなく収集対象を変更できます。',
        explanationEn: 'Data collection rules define what the Azure Monitor Agent gathers, and the Windows event log data source accepts XPath expressions that filter by channel and event ID. Because the rule is associated with the machines centrally, updating it changes collection on all 400 servers without touching them individually.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel ワークスペースのデータ保持期間 (Retention period) を既定値から 30 日間に短縮する',
        textEn: 'Reduce the interactive data retention period on the Microsoft Sentinel Log Analytics workspace down to 30 days in total.',
        isCorrect: false,
        explanationJa: '【不正解】保持期間はデータが到着した後の保存期間を決定し、取り込み量とは別に課金されます。保持期間を短縮しても、毎日取り込まれるイベントのボリューム自体は削減されません。',
        explanationEn: 'Retention determines how long data is kept after it arrives and is billed separately from ingestion. Shortening it would not reduce the volume of events being ingested each day.'
      }
    ],
    overallExplanationJa: `Azure Monitor エージェント (AMA) では、収集動作はマシン上の個別設定ではなく**データ収集ルール (DCR)** によって一元定義されます。

DCR 内の Windows イベント ログ データ ソースは **XPath クエリ**をサポートしており、ログ チャネルや特定のイベント ID (例: ` + '`Security!*[System[(EventID=4624 or EventID=4625)]]`' + `) でエージェント送信前にフィルタリングすることで、検出価値のあるイベントのみを取り込んでコストを最適化できます。DCR を編集するだけで関連付けられた 400 台すべてのサーバーに即座かつ一貫して反映されます。`,
    overallExplanationEn: `With the Azure Monitor Agent, collection behaviour is defined entirely by data collection rules rather than by settings on the machine. The Windows event log data source inside a rule accepts XPath queries, which can filter by log channel and by specific event IDs so that only events with detection value are transmitted. Because the rule is associated with a scope of machines, a single edit applies across all 400 servers immediately and consistently. Retention changes, table plan changes, and daily caps all act after ingestion has occurred or blunt the data set indiscriminately, so none of them addresses the root cause. Filtering at the rule is the standard cost-optimization technique and preserves the events the analytics rules depend on.`,
    keyPointsJa: [
      'AMA 環境で特定 Windows イベント ID のみ収集して取り込みコストを削減 ＝ DCR を編集し XPath クエリでフィルタリング',
      'エージェント側 (送信前) で絞り込むため不要イベントの取り込み課金が発生せず、DCR 一括更新で 400 台に即時適用される',
      'Daily cap は監視の欠落を招き、保持期間短縮やプラン変更は毎日のインジェスト量自体を減らさない'
    ],
    keyPointsEn: [
      'Edit the centralized Data Collection Rule (DCR) with an XPath query to collect only required Windows Event IDs',
      'Applies centrally across all 400 AMA-connected servers with no per-server edits',
      'Daily caps create blind spots; table tier or retention changes do not stop unneeded ingestion volume'
    ],
    referenceTopic: 'AMA データ収集ルール (DCR) の XPath クエリによるコスト最適化'
  },
  {
    id: 'sc500-q93',
    number: 93,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'AI Gateway のマネージド ID 認証 (authentication-managed-identity) による静的キー排除',
    titleEn: 'Eliminating Static API Keys in AI Gateway with Managed Identity',
    scenarioJa: `あなたの組織では Microsoft Foundry を使用して複数の大規模言語モデル (LLM) をデプロイしています。すべてのクライアント アプリケーションが Foundry エンドポイントに直接アクセスするのではなく API Management を経由してモデルを呼び出すように、Azure API Management を AI ゲートウェイとして構成しています。

セキュリティ レビュー中に、Foundry リソース キーが API Management の名前付き値 (Named value) として保存されており、API Management から Foundry エンドポイントへの送信呼び出しの認証ポリシーで使用されていることが判明しました。API Management が安全に Foundry エンドポイントを呼び出せる状態を維持しつつ、このバックエンド認証における静的リソース キーの使用を廃止する必要があります。`,
    scenarioEn: `Your organization deploys several large language models by using Microsoft Foundry. You configure Azure API Management as an AI Gateway so that all client applications call the models through API Management rather than directly against the Foundry endpoints.

During a security review, you discover that the Foundry resource key is stored as a named value in API Management and is used in policies to authenticate outbound calls from API Management to the Foundry endpoint. You need to eliminate the use of a static resource key for this backend authentication while still allowing API Management to securely call the Foundry endpoint.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'API Management インスタンスの送信パブリック IP アドレス以外のすべての場所から Microsoft Foundry リソース エンドポイントへの認証・アクセス要求をブロックする Microsoft Entra 条件付きアクセス ポリシーを作成して割り当てる',
        textEn: 'Create and assign a Microsoft Entra Conditional Access policy that blocks all sign-ins and access requests to the Foundry resource endpoint from any network location other than the API Management instance\'s dedicated outbound public IP addresses',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセス ポリシーは場所などの条件に基づいてサインインを制御しますが、API Management がキーなしで Foundry エンドポイントへの送信呼び出しを認証するためのメカニズムを提供するものではありません。',
        explanationEn: 'Conditional Access policies govern interactive and some non-interactive user/application sign-ins based on conditions like location, but they do not provide the mechanism for API Management to authenticate outbound calls to a Foundry endpoint without a key.'
      },
      {
        id: 'B',
        textJa: 'API Management と Microsoft Foundry バックエンド エンドポイント間に相互 TLS (mTLS / クライアント証明書) 認証を構成し、クライアント アプリケーションが API Management を呼び出す際に有効な証明書の提示を強制する',
        textEn: 'Configure mutual TLS (mTLS client certificate) authentication between API Management and the Microsoft Foundry endpoint, and configure an inbound policy requiring clients to present a valid certificate when calling API Management APIs',
        isCorrect: false,
        explanationJa: '【不正解】相互 TLS はトランスポート チャネルを保護し API Management への呼び出し元クライアントを認証できますが、API Management 自体が Foundry バックエンドへキーレスで認証する方法には対処しておらず、Foundry エンドポイントは通常クライアント証明書認証には構成されません。',
        explanationEn: 'Mutual TLS secures the transport channel and can authenticate clients calling API Management, but it does not address how API Management itself authenticates to the Foundry backend, and Foundry endpoints are not typically configured for client certificate authentication.'
      },
      {
        id: 'C',
        textJa: 'API Management インスタンスでシステム割り当てマネージド ID を有効にし、その ID に Foundry リソース上の適切なロールを付与した上で、バックエンドへアクセス トークンを取得・転送する authentication-managed-identity ポリシーを構成する',
        textEn: 'Enable a system-assigned managed identity on the API Management instance, grant that identity the appropriate role on the Foundry resource, and configure the authentication-managed-identity policy to acquire and forward an access token to the backend',
        isCorrect: true,
        explanationJa: '【正解】API Management でシステム割り当てマネージド ID を有効にし、authentication-managed-identity ポリシーを使用することで、API Management は実行時に Microsoft Entra ID アクセス トークンを取得して Foundry エンドポイントに提示できるため、静的リソース キーの保存・管理を完全に不要にできます。',
        explanationEn: 'Enabling a system-assigned managed identity on API Management and using the authentication-managed-identity policy lets API Management obtain a Microsoft Entra ID access token at runtime and present it to the Foundry endpoint, removing the need to store or manage a static resource key entirely.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Foundry リソース キーを Azure Key Vault 内にシークレットとして安全に格納し、API Management インスタンスにその Key Vault シークレットを参照する名前付き値を作成して、既存ポリシーで参照する',
        textEn: 'Store the Microsoft Foundry resource key as a protected secret inside Azure Key Vault, create a Key Vault-backed named value in the API Management instance pointing to that secret, and continue referencing it within the existing inbound policies',
        isCorrect: false,
        explanationJa: '【不正解】キーを Key Vault に移動するとシークレットの保存やローテーションは改善されますが、API Management は依然として認証に静的なキー値を取得・使用するため、静的リソース キーの使用を廃止するという要件を満たせません。',
        explanationEn: 'Moving the key into Key Vault improves secret storage and rotation, but API Management still retrieves and uses the static key value for authentication, so the requirement to eliminate use of a static resource key is not met.'
      }
    ],
    overallExplanationJa: `Azure API Management の AI ゲートウェイ パターンでは、プラットフォームの**システム割り当てマネージド ID** と **` + '`authentication-managed-identity`' + ` ポリシー** (例: Cognitive Services OpenAI User 等の RBAC ロールを付与) を組み合わせて、Microsoft Foundry / Azure OpenAI などのバックエンド Azure リソースへトークン認証を行うことを推奨しています。

これにより静的 API キーの保管・ローテーション・漏洩リスクを完全に排除でき、Key Vault への静的キー格納や証明書認証よりも安全で運用負荷の低い構成を実現できます。`,
    overallExplanationEn: `The AI Gateway pattern in API Management supports using the platform's system-assigned managed identity together with the authentication-managed-identity policy to authenticate to backend Azure resources such as Foundry endpoints, removing the need to manage and rotate static API keys. This is the recommended, most secure approach compared to key-based, certificate-based, or Conditional Access-based alternatives, which either still rely on a static secret or do not apply to service-to-service backend authentication.`,
    keyPointsJa: [
      'API Management AI Gateway から Microsoft Foundry へのキーレス認証 ＝ システム割り当てマネージド ID ＋ RBAC ロール付与 ＋ authentication-managed-identity ポリシー',
      'Key Vault にリソース キーを移しても依然として静的キー認証に依存するため要件を満たさない',
      'Entra ID トークンベース認証により静的キーの管理・ローテーションが不要になる'
    ],
    keyPointsEn: [
      'Enable a system-assigned managed identity on APIM, assign RBAC permissions on the Foundry resource, and use authentication-managed-identity',
      'Obtains and attaches short-lived Microsoft Entra ID access tokens at runtime instead of static API keys',
      'Key Vault-backed named values still rely on a static resource key'
    ],
    referenceTopic: 'APIM AI Gateway のマネージド ID バックエンド認証'
  },
  {
    id: 'sc500-q94',
    number: 94,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'コンプライアンス担当者向け Defender for Cloud 閲覧専用ロール (Security Reader)',
    titleEn: 'Assigning Least-Privilege Defender for Cloud Read-Only Role (Security Reader)',
    scenarioJa: `あなたの会社は、組織のセキュリティ態勢の四半期レビューを義務付ける規制フレームワークに準拠する必要があります。複数のリソース グループにわたるリソースを含む Azure サブスクリプションがあります。Priya という名前のコンプライアンス担当者は、サブスクリプション内のすべてのリソースについて、Microsoft Defender for Cloud の規制コンプライアンス ダッシュボード、セキュア スコア、およびセキュリティ推奨事項を閲覧できる必要があります。

Priya はセキュリティ ポリシーの変更、推奨事項の適用、またはリソース構成の変更を行えてはなりません。

最小権限の原則に従いながら要件を満たす Azure 組み込みロールをサブスクリプション スコープで Priya に割り当てる必要があります。`,
    scenarioEn: `Your company must comply with a regulatory framework that requires quarterly reviews of the organization's security posture. You have an Azure subscription that contains resources across multiple resource groups. A compliance officer named Priya must be able to view the Microsoft Defender for Cloud regulatory compliance dashboard, secure score, and security recommendations for all resources in the subscription. Priya must NOT be able to modify security policies, apply recommendations, or change any resource configuration.

You need to assign an Azure built-in role to Priya at the subscription scope that meets the requirement while following the principle of least privilege.`,
    questionJa: 'どのロールを割り当てるべきですか？',
    questionEn: 'Which role should you assign?',
    options: [
      {
        id: 'A',
        textJa: '閲覧者 (Reader)',
        textEn: 'Reader',
        isCorrect: false,
        explanationJa: '【不正解】Reader ロールは汎用的なリソース プロパティや構成の読み取りアクセスを提供しますが、規制コンプライアンス ダッシュボードやセキュリティ推奨事項・アラートなどの Defender for Cloud 固有データへの完全な可視性を保証する専用ロールは Security Reader です。',
        explanationEn: 'Reader provides general read access to resource properties and configurations but does not guarantee visibility into Defender for Cloud-specific data such as the regulatory compliance dashboard and security recommendations, which are exposed through the Security Reader role.'
      },
      {
        id: 'B',
        textJa: 'セキュリティ管理者 (Security Admin)',
        textEn: 'Security Admin',
        isCorrect: false,
        explanationJa: '【不正解】Security Admin には Security Reader のすべての権限が含まれますが、セキュリティ ポリシーの変更、アラートの却下、推奨事項の適用も許可されるため、読み取り専用の要件を超え、最小権限の原則に違反します。',
        explanationEn: 'Security Admin includes all Security Reader permissions but also allows the user to modify security policies, dismiss alerts, and apply recommendations, which exceeds the read-only requirement and violates least privilege.'
      },
      {
        id: 'C',
        textJa: 'セキュリティ閲覧者 (Security Reader)',
        textEn: 'Security Reader',
        isCorrect: true,
        explanationJa: '【正解】Security Reader 組み込みロールは、セキュア スコア、規制コンプライアンス ダッシュボード、セキュリティ推奨事項を含む Microsoft Defender for Cloud への読み取り専用アクセスを付与しつつ、セキュリティ ポリシーやリソース構成の変更は一切許可しないため、最小権限の要件を満たす最適な選択肢です。',
        explanationEn: 'The Security Reader built-in role grants read-only access to Microsoft Defender for Cloud, including the secure score, regulatory compliance dashboard, and security recommendations, without permitting any changes to security policies or resource configurations, making it the least-privileged choice.'
      },
      {
        id: 'D',
        textJa: '共同作成者 (Contributor)',
        textEn: 'Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Contributor はサブスクリプション全体でリソースを作成・変更・削除できる広範な読み取り/書き込み権限を付与するため、閲覧専用の要件を大きく超えてしまいます。',
        explanationEn: 'Contributor grants broad read/write access to create, modify, and delete resources across the subscription, far exceeding what is needed and posing a significant security risk given the requirement is view-only.'
      }
    ],
    overallExplanationJa: `ガバナンス目的で Azure 組み込みロールを割り当てる際は、必要な権限を最小権限の原則に沿って正確にマッピングする必要があります。

**セキュリティ閲覧者 (Security Reader)** は、セキュリティ ポリシーの変更、アラート操作、リソース構成変更を許可せずに、Microsoft Defender for Cloud のセキュリティ態勢データ (セキュア スコア、規制コンプライアンス ダッシュボード、推奨事項) に対する閲覧専用アクセスを提供するために特別に設計されたロールであり、監査人やコンプライアンス レビュー担当者に最適です。`,
    overallExplanationEn: `When assigning Azure built-in roles for governance purposes, administrators should map required permissions precisely to the least privilege necessary. Security Reader is purpose-built to provide visibility into Microsoft Defender for Cloud's security posture data—including compliance dashboards and recommendations—without allowing changes, making it the correct choice for an auditor or compliance reviewer role.`,
    keyPointsJa: [
      'Defender for Cloud のセキュア スコア・規制コンプライアンス・推奨事項の閲覧専用 ＝ Security Reader',
      'Security Admin はポリシー変更・推奨事項適用・アラート却下ができるため読み取り専用要件に不適合',
      '汎用 Reader は Defender for Cloud 固有のセキュリティ データ閲覧専用に設計されたものではない'
    ],
    keyPointsEn: [
      'Assign Security Reader for read-only access to Defender for Cloud secure score, compliance dashboard, and recommendations',
      'Security Admin permits modifying security policies and dismissing alerts (violates read-only requirement)',
      'Contributor and generic Reader do not match the least-privilege Defender posture role'
    ],
    referenceTopic: 'Defender for Cloud の組み込み RBAC ロール (Security Reader)'
  },
  {
    id: 'sc500-q95',
    number: 95,
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Role Based Access Control Administrator ロールによる最小権限の RBAC 委任',
    titleEn: 'Delegating Role Assignments with Role Based Access Control Administrator',
    scenarioJa: `Contoso 社は ID 運用を委任しています。Priya という名前のプラットフォーム エンジニアは、Prod-Platform サブスクリプション内でサービス プリンシパルおよびマネージド ID に対する Azure ロール割り当てを付与および削除できる必要があります。

Priya は、Azure Blueprints の管理、サブスクリプションの別テナントへの委任 (Azure Lighthouse 等)、あるいは仮想マシンやストレージ アカウントなどのリソースの管理を行えてはなりません。`,
    scenarioEn: `Contoso is delegating identity operations. A platform engineer named Priya must be able to grant and remove Azure role assignments for service principals and managed identities within the Prod-Platform subscription.

Priya must NOT be able to manage Azure Blueprints, delegate the subscription to another tenant, or otherwise administer resources such as virtual machines and storage accounts.`,
    questionJa: 'サブスクリプション スコープで Priya にどの Azure 組み込みロールを割り当てるべきですか？',
    questionEn: 'Which built-in Azure role should you assign to Priya at the subscription scope?',
    options: [
      {
        id: 'A',
        textJa: 'ユーザー アクセス管理者 (User Access Administrator)',
        textEn: 'User Access Administrator',
        isCorrect: false,
        explanationJa: '【不正解】User Access Administrator もロール割り当てを管理できますが、Azure Blueprints の管理や広範なアクセス委任などの追加機能を備えています。これらの追加権限は Priya が保持してはならないものとして明示的に禁止されています。',
        explanationEn: 'User Access Administrator also manages role assignments, but it carries additional capabilities including Azure Blueprints management and broader access delegation. Those extras are explicitly outside what Priya should hold.'
      },
      {
        id: 'B',
        textJa: '所有者 (Owner)',
        textEn: 'Owner',
        isCorrect: false,
        explanationJa: '【不正解】Owner はロール割り当て権限に加えて、サブスクリプション内のすべてのリソースに対する完全な制御権を付与するため、委任範囲を大幅に超えて最小権限に反します。',
        explanationEn: 'Owner grants full control of every resource in the subscription in addition to role assignment rights. It vastly exceeds the delegation described and breaks least privilege.'
      },
      {
        id: 'C',
        textJa: '共同作成者 (Contributor)',
        textEn: 'Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Contributor はリソースの完全な管理を許可しますが、ロール割り当ての作成や削除は明確に除外されています。これでは Priya はインフラを変更できてもロール付与タスクを実行できません。',
        explanationEn: 'Contributor allows full management of resources but expressly excludes creating or removing role assignments. Priya would be able to change infrastructure yet unable to perform the delegation task.'
      },
      {
        id: 'D',
        textJa: 'ロールベースのアクセス制御管理者 (Role Based Access Control Administrator)',
        textEn: 'Role Based Access Control Administrator',
        isCorrect: true,
        explanationJa: '【正解】このロールはリソース自体に対する管理権限を付与することなく、Azure ロール割り当てを作成および削除する権限を付与します。User Access Administrator と比較して、Azure Blueprints の管理およびテナント全体でアクセスを昇格させる機能が意図的に除外されています。',
        explanationEn: 'This role grants permission to create and remove Azure role assignments without granting rights over the resources themselves. Compared with User Access Administrator it deliberately excludes Azure Blueprints management and the ability to elevate access across the tenant.'
      }
    ],
    overallExplanationJa: `Azure はリソース管理権限とアクセス管理 (ロール割り当て) 権限を分離しており、アクセス管理側には主に 2 つの組み込みロールが存在します：
- **User Access Administrator**: 従来のロールで、ロール割り当てに加えて Azure Blueprints 管理やテナントレベルの権限昇格・委任などの追加機能も含まれます。
- **Role Based Access Control Administrator**: より範囲を絞ったロールとして導入され、Azure Blueprints 管理やテナント委任を除外し、ロール割り当ての作成・削除に必要な権限のみを付与します (さらに ABAC ロール割り当て条件で特定ロール・特定プリンシパル種別への制限も可能)。

リソース管理や Blueprints 管理を除外したい場合は、**Role Based Access Control Administrator** が最小権限の正解となります。`,
    overallExplanationEn: `Azure separates the ability to manage resources from the ability to manage who has access to them, and two built-in roles cover the access-management side. User Access Administrator has been the traditional choice, but it bundles extra capabilities such as Azure Blueprints management and tenant-level access elevation. Role Based Access Control Administrator was introduced as the narrower option, granting only the permissions needed to create and delete role assignments. Because the requirement rules out blueprint management and resource administration, that narrower role is the least-privilege fit. Assignments made by this role can be further constrained with role assignment conditions so that Priya may only grant a specific set of roles.`,
    keyPointsJa: [
      'Blueprints 管理や他テナント委任・リソース管理を含まず、純粋に Azure RBAC ロール割り当ての作成・削除のみ委任 ＝ Role Based Access Control Administrator',
      'User Access Administrator には Blueprints 管理や追加の委任権限が含まれるため RBAC Administrator の方が最小権限',
      'Contributor はリソース操作はできるがロール割り当て自体は変更できない'
    ],
    keyPointsEn: [
      'Assign Role Based Access Control Administrator instead of User Access Administrator when Azure Blueprints and tenant delegation must be excluded',
      'Grants permission to manage Azure role assignments without granting control over VM/storage resources',
      'Contributor cannot manage role assignments; Owner grants full resource and access control'
    ],
    referenceTopic: 'Role Based Access Control Administrator vs User Access Administrator'
  },
  {
    id: 'sc500-q96',
    number: 96,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '条件付きアクセス付与制御の OR 条件 (準拠デバイスなら MFA 免除、非準拠は MFA)',
    titleEn: 'Conditional Access OR Grant Control for Compliant Devices vs MFA',
    scenarioJa: `あなたは Contoso 社の Microsoft Entra 管理者です。同社は、Microsoft 365 アプリにアクセスするすべてのユーザー向けに、次の要件を満たす条件付きアクセス ポリシーを構成したいと考えています：

- Microsoft Intune で「準拠 (Compliant)」とマークされたデバイスからサインインするユーザーには、多要素認証 (MFA) のプロンプトを表示せずにアクセスを許可する。
- 準拠とマークされていないデバイスからサインインするユーザーは、アクセスを許可されるために MFA を完了する必要がある。
- どちらのユーザー グループにも最終的にはアクセスが許可される必要があり、ポリシーがどちらかのグループのサインインを完全にブロックしてはならない。

すべてのユーザーと Microsoft 365 アプリ クラウド アプリを対象とする条件付きアクセス ポリシーを作成します。`,
    scenarioEn: `You are the Microsoft Entra administrator for Contoso. The company wants to configure a Conditional Access policy for all users accessing Microsoft 365 apps with the following requirements:

- Users who sign in from a device marked as compliant in Microsoft Intune should be granted access without being prompted for multifactor authentication (MFA).
- Users who sign in from a device that is NOT marked as compliant must complete MFA to be granted access.
- Both groups of users must ultimately be allowed access; the policy should never block sign-in outright for either group.

You create a Conditional Access policy that targets all users and the Microsoft 365 apps cloud app. Which grant control configuration should you select to meet these requirements?`,
    questionJa: 'これらの要件を満たすために、どの付与制御 (Grant control) 構成を選択すべきですか？',
    questionEn: 'Which grant control configuration should you select to meet these requirements?',
    options: [
      {
        id: 'A',
        textJa: '「多要素認証を要求する」(Require multifactor authentication) のみを選択し、付与制御オプションを「選択したコントロールをすべて必要とする」(Require all) に設定する',
        textEn: 'Select only "Require multifactor authentication" for the grant requirement and set the control logic to "Require all the selected controls" in the policy',
        isCorrect: false,
        explanationJa: '【不正解】この構成はデバイス準拠を完全に無視し、準拠デバイス上のユーザーを含むすべてのユーザーに MFA の完了を強制するため、準拠デバイス ユーザーを MFA から免除する要件を満たしません。',
        explanationEn: 'This configuration ignores device compliance entirely and forces every user, including those on compliant devices, to complete MFA, which does not meet the requirement to exempt compliant device users from MFA.'
      },
      {
        id: 'B',
        textJa: '「多要素認証を要求する」と「デバイスが準拠していることを要求する」の両方を選択し、付与制御を「選択したコントロールをすべて必要とする」(Require all the selected controls) に設定する',
        textEn: 'Select both "Require multifactor authentication" and "Require device to be marked as compliant," and set the grant control to "Require all the selected controls"',
        isCorrect: false,
        explanationJa: '【不正解】付与制御を「選択したコントロールをすべて必要とする」(AND) に設定すると、ユーザーは毎回両方の条件 (MFA と準拠デバイス) を満たす必要があり、準拠デバイスでも MFA が強制されるほか、非準拠デバイスではブロックされてしまいます。',
        explanationEn: 'Setting the grant control to "Require all the selected controls" means a user must satisfy BOTH conditions (MFA and compliant device) every time, which would force MFA even on compliant devices, contradicting the requirement that compliant device users be exempt from MFA.'
      },
      {
        id: 'C',
        textJa: '「多要素認証を要求する」と「デバイスが準拠していることを要求する」の両方を選択し、付与制御を「選択したコントロールのいずれかを必要とする」(Require one of the selected controls) に設定する',
        textEn: 'Select both "Require multifactor authentication" and "Require device to be marked as compliant," and set the grant control to "Require one of the selected controls"',
        isCorrect: true,
        explanationJa: '【正解】「選択したコントロールのいずれかを必要とする」を選択すると OR ロジックが適用されます。準拠デバイス上のユーザーは準拠デバイス制御を満たすため MFA なしでアクセスが許可され、非準拠デバイス上のユーザーは残りの制御 (MFA) を満たすことでアクセスできます。提示された業務要件に完全に一致します。',
        explanationEn: 'Selecting "Require one of the selected controls" applies an OR logic: a user on a compliant device satisfies the compliant-device control and is granted access without MFA, while a user on a noncompliant device must satisfy the remaining control (MFA) to gain access. This exactly matches the stated business requirement.'
      },
      {
        id: 'D',
        textJa: '「デバイスが準拠していることを要求する」(Require device to be marked as compliant) のみを選択し、付与制御を「選択したコントロールのいずれかを必要とする」に設定する',
        textEn: 'Select only "Require device to be marked as compliant" for the grant requirement and set the policy logic to "Require one of the selected controls"',
        isCorrect: false,
        explanationJa: '【不正解】「デバイスが準拠していることを要求する」のみを選択すると非準拠デバイス向けの代替制御がないため、非準拠デバイスのユーザーは MFA を求められるのではなくブロックされてしまい、両グループとも最終的にアクセス許可される要件に違反します。',
        explanationEn: 'Selecting only "Require device to be marked as compliant" provides no alternative control for noncompliant devices, so users on noncompliant devices would be blocked rather than prompted for MFA, violating the requirement that all users must ultimately be granted access.'
      }
    ],
    overallExplanationJa: `条件付きアクセス ポリシーに複数の付与制御 (Grant controls) が含まれる場合、選択ロジックには次の 2 種類があります：
- **選択したコントロールのいずれかを必要とする (Require one of the selected controls)**: **OR ロジック**を適用し、いずれか 1 つの制御を満たせばアクセスを許可します。
- **選択したコントロールをすべて必要とする (Require all the selected controls)**: **AND ロジック**を適用し、すべての制御を満たす必要があります。

「準拠デバイスなら MFA 不要、非準拠なら MFA で許可」という要件を満たすには、両方の制御を選択して **Require one of the selected controls (OR)** に設定します。`,
    overallExplanationEn: `When a Conditional Access policy includes multiple grant controls, the "Require one of the selected controls" option applies OR logic, allowing access if any single control is satisfied, while "Require all the selected controls" applies AND logic, requiring every control to be met. To satisfy the scenario—exempting compliant devices from MFA while still requiring MFA on noncompliant devices—both controls must be selected together with the OR ("Require one of the selected controls") setting.`,
    keyPointsJa: [
      '準拠デバイスなら MFA 免除・非準拠なら MFA 要求 ＝「Require MFA」＋「Require compliant device」＋「Require one of the selected controls (OR)」',
      '「Require all the selected controls (AND)」では非準拠デバイスがアクセス拒否になり、準拠デバイスにも MFA が課される',
      '「Require compliant device」単独では非準拠デバイスのユーザーが完全にブロックされる'
    ],
    keyPointsEn: [
      'Select both "Require multifactor authentication" and "Require device to be marked as compliant" with "Require one of the selected controls" (OR logic)',
      'Compliant devices satisfy the device check without MFA; noncompliant devices fall back to MFA',
      '"Require all" applies AND logic and blocks noncompliant devices outright'
    ],
    referenceTopic: '条件付きアクセス付与制御の AND / OR ロジック'
  },
  {
    id: 'sc500-q97',
    number: 97,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure API Management の validate-jwt ポリシーによる Entra ID OAuth トークン検証',
    titleEn: 'Validating Microsoft Entra ID JWT Tokens with APIM validate-jwt Policy',
    scenarioJa: `あなたの会社では、外部パートナー向けに OrdersAPI という名前のバックエンド API を公開するために Azure API Management を使用しています。登録済みアプリケーション用に Microsoft Entra ID によって発行された有効な OAuth 2.0 アクセス トークンを含む呼び出しのみがバックエンド サービスに転送されるようにする必要があります。

有効なトークンがない呼び出し、または信頼できない機関によって発行されたトークンを含む呼び出しは、バックエンドに到達する前に API Management によって拒否される必要があります。`,
    scenarioEn: `Your company uses Azure API Management to expose a backend API named OrdersAPI to external partners. You need to ensure that only calls containing a valid OAuth 2.0 access token issued by Microsoft Entra ID for your registered application are forwarded to the backend service. Calls without a valid token, or with a token issued by an untrusted authority, must be rejected by API Management before reaching the backend.`,
    questionJa: 'OrdersAPI ポリシー定義の受信処理 (inbound processing) セクションでどの API Management ポリシーを構成すべきですか？',
    questionEn: 'Which API Management policy should you configure in the inbound processing section of the OrdersAPI policy definition?',
    options: [
      {
        id: 'A',
        textJa: 'validate-jwt',
        textEn: 'validate-jwt',
        isCorrect: true,
        explanationJa: '【正解】validate-jwt ポリシーは Authorization ヘッダー内の JWT ベアラー トークンを検証し、指定された Microsoft Entra ID OpenID 構成エンドポイントに対して発行者 (issuer)・対象ユーザー (audience)・署名キー・有効期限をチェックして、検証に失敗した場合はバックエンドに到達する前に 401 エラーで要求を拒否します。',
        explanationEn: 'The validate-jwt policy validates a JWT bearer token in the Authorization header, checking the issuer, audience, signing keys, and expiration against a specified Microsoft Entra ID OpenID configuration endpoint, rejecting the request with a 401 before it reaches the backend if validation fails.'
      },
      {
        id: 'B',
        textJa: 'rate-limit-by-key',
        textEn: 'rate-limit-by-key',
        isCorrect: false,
        explanationJa: '【不正解】rate-limit-by-key ポリシーは不正使用を防ぐために一定期間内に呼び出し元が実行できる呼び出し回数を制限しますが、認証トークンを検査または検証する機能はありません。',
        explanationEn: 'The rate-limit-by-key policy throttles the number of calls a caller can make within a time period to prevent abuse, but it has no capability to inspect or validate authentication tokens.'
      },
      {
        id: 'C',
        textJa: 'check-header',
        textEn: 'check-header',
        isCorrect: false,
        explanationJa: '【不正解】check-header ポリシーは指定された HTTP ヘッダーが存在し、オプションで想定値と一致することを検証しますが、JWT トークンの解析、署名検証、発行者や対象ユーザー クレームの検証は行いません。',
        explanationEn: 'The check-header policy verifies that a specified HTTP header exists and optionally matches expected values, but it does not parse, validate signatures, or verify the issuer/audience claims of a JWT token.'
      },
      {
        id: 'D',
        textJa: 'ip-filter',
        textEn: 'ip-filter',
        isCorrect: false,
        explanationJa: '【不正解】ip-filter ポリシーは呼び出し元の IP アドレス範囲に基づいてアクセスを許可または制限するものであり、OAuth 2.0 トークンの正当性や発行者を検証する要件には対処しません。',
        explanationEn: 'The ip-filter policy restricts or allows access based on the caller\'s IP address range, which does not address the requirement to validate an OAuth 2.0 token\'s authenticity or issuer.'
      }
    ],
    overallExplanationJa: `要求がバックエンドに到達する前に API ゲートウェイ側でトークン ベースの認証を強制し、無効または信頼できないトークンを拒否するには、API Management の inbound セクションで **` + '`validate-jwt`' + ` ポリシー**を使用し、Microsoft Entra ID テナントの OpenID 構成 URL (` + '`openid-config`' + `)、想定される対象ユーザー (` + '`audiences`' + `)、および発行者 (` + '`issuers`' + `) を指定します。

これによりバックエンド サービスを不正な呼び出しから保護し、API Management レイヤーで認証検証を一元化できます。`,
    overallExplanationEn: `To enforce token-based authentication and reject invalid or untrusted tokens at the gateway before requests reach the backend, API Management administrators use the validate-jwt policy, specifying the Microsoft Entra ID tenant's OpenID configuration URL, expected audience, and issuer. This centralizes authentication enforcement at the API Management layer, protecting the backend service from unauthorized calls.`,
    keyPointsJa: [
      'API Management の inbound 処理で Microsoft Entra ID の OAuth 2.0 / JWT ベアラー トークンを検証 ＝ validate-jwt ポリシー',
      'OpenID 構成 URL・署名・有効期限・Issuer・Audience を検証し、不正トークンは 401 でゲートウェイ遮断する',
      'check-header はヘッダー文字列の一致確認のみで署名や JWT クレーム検証は行えない'
    ],
    keyPointsEn: [
      'Use the validate-jwt inbound policy in Azure API Management to verify Entra ID OAuth 2.0 bearer tokens',
      'Checks token signature, expiration, issuer, and audience against Entra ID OpenID configuration metadata',
      'Rejects invalid or untrusted tokens with HTTP 401 before forwarding to the backend'
    ],
    referenceTopic: 'Azure API Management の validate-jwt ポリシー'
  },
  {
    id: 'sc500-q98',
    number: 98,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Policy の例外 (Exemption) による特定リソースへの期限付き免除構成',
    titleEn: 'Granting Time-Bounded Resource Exceptions via Azure Policy Exemptions',
    scenarioJa: `Contoso 社は、管理グループ スコープでパブリック BLOB アクセスを許可するストレージ アカウントの作成を拒否する Azure Policy イニシアチブを強制しています。レガシーなパブリック向け製品カタログでは 1 つの特定のストレージ アカウントで匿名読み取りトラフィックを提供する必要があり、アーキテクチャ ボードはアプリケーションが再設計される今後 6 か月間に限りこの例外を承認しました。

例外はその 1 つのストレージ アカウントにのみ適用され、承認された逸脱としてコンプライアンス レポートに表示され、かつ自動的に失効する必要があります。`,
    scenarioEn: `Contoso enforces an Azure Policy initiative at the management group scope that denies the creation of storage accounts which allow public blob access. A legacy public-facing product catalogue requires one specific storage account to serve anonymous read traffic, and the architecture board has approved this exception for the next six months while the application is re-engineered.

The exception must apply only to that one storage account, must be visible in compliance reporting as an approved deviation, and must lapse automatically.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '承認済み期間の回避策として、該当のストレージ アカウントを親管理グループのスコープ外にある別の Azure サブスクリプションへ移動し、再設計後に元へ戻す',
        textEn: 'Move the specific storage account to a separate subscription located outside the management group scope until the application re-engineering completes.',
        isCorrect: false,
        explanationJa: '【不正解】リソースの移動は承認された例外を記録するのではなくポリシー割り当てを回避する行為であり、サブスクリプション構成の断片化を招き、コンプライアンス上の逸脱記録も残りません。',
        explanationEn: 'Relocating the resource evades the assignment rather than documenting an approved exception. It also fragments the subscription topology and leaves no compliance record of the deviation.'
      },
      {
        id: 'B',
        textJa: '該当のストレージ アカウントで拒否されないよう、管理グループ スコープに割り当てられたイニシアチブのポリシー効果を「拒否」(Deny) から「監査」(Audit) に変更する',
        textEn: 'Change the Azure Policy initiative effect from Deny to Audit at the management group scope so the legacy storage account is not blocked.',
        isCorrect: false,
        explanationJa: '【不正解】効果を変更すると承認された 1 つのリソースだけでなく、管理グループ配下のすべてのリソースに対する強制が解除され、組織が依存している制御が失われてしまいます。',
        explanationEn: 'Changing the effect removes enforcement for every resource under the management group, not just the approved one. The organization would silently lose the control it relies on.'
      },
      {
        id: 'C',
        textJa: '割り当てられた Azure Policy が構成を変更または拒否できないように、該当のストレージ アカウントに対して読み取り専用または削除不可のリソース ロック (Resource lock) を追加する',
        textEn: 'Add an Azure resource lock to the legacy storage account resource scope so that the assigned Azure Policy cannot alter or block its configuration.',
        isCorrect: false,
        explanationJa: '【不正解】リソース ロックはリソースの削除や変更を防止するものであり、Azure Policy が要求を評価・拒否する方法には影響しません。Deny 効果は引き続き適用されます。',
        explanationEn: 'Locks prevent deletion or modification of a resource and have no influence on how Azure Policy evaluates or denies requests. The deny effect would continue to apply.'
      },
      {
        id: 'D',
        textJa: 'ストレージ アカウントのリソース スコープに対して、カテゴリを「権利放棄」(Waiver) とし、有効期限を 6 か月後に設定したポリシーの例外 (Policy exemption) を作成する',
        textEn: 'Create a policy exemption for the storage account, scoped to the resource, with a waiver category and an expiration date six months from now.',
        isCorrect: true,
        explanationJa: '【正解】ポリシーの例外 (Exemption) は他のすべての場所での強制をそのまま維持しながら、指定された単一のリソースに対してのみ割り当ての評価を抑制します。カテゴリ (Waiver 等) と有効期限を設定することでコンプライアンス レポートに逸脱を記録し、指定日に例外が自動的に失効するようにできます。',
        explanationEn: 'An exemption suppresses evaluation of the assignment for a single specified resource while leaving enforcement intact everywhere else. Setting the category and an expiration date records the deviation in compliance reporting and causes the exception to lapse automatically on the chosen date.'
      }
    ],
    overallExplanationJa: `**Azure Policy の例外 (Policy exemptions)** は、通常は強制されているポリシー割り当てに対する、承認済みかつ期間限定の逸脱を管理するために用意された専用機能です。

救済が必要なリソース (またはリソース グループ・サブスクリプション) のスコープで例外を作成し、対象の割り当てを指定します。カテゴリとして **Waiver (権利放棄)** または **Mitigated (軽減済み)** を選択して例外の理由を記録し、**有効期限 (ExpiresOn)** を設定することで、誰かが削除し忘れても期限到来時に自動的に再びポリシー強制の対象へ戻ります。また、例外対象リソースはコンプライアンス結果に「Exempt (除外済み)」として明示的に記録されるため監査上の透明性も保たれます。`,
    overallExplanationEn: `Azure Policy exemptions exist precisely for approved, time-bounded deviations from an otherwise enforced assignment. An exemption is created at the scope of the resource, resource group, or subscription that needs relief, and it references the specific assignment and optionally the individual policy definitions within an initiative. Choosing the waiver or mitigated category records why the deviation was granted, and the expiration date causes the resource to fall back under enforcement automatically without anyone needing to remember to remove it. Exempted resources appear separately in compliance results, which keeps auditors informed rather than hiding the gap. Weakening the effect or moving the resource would either remove the control broadly or leave no record of the decision.`,
    keyPointsJa: [
      '特定リソースのみ期限付きで Azure Policy を免除し監査レポートにも記録 ＝ Policy exemption (対象リソース スコープ、Waiver カテゴリ、有効期限設定)',
      '有効期限が過ぎると自動的に例外が失効し、再度ポリシー強制下に置かれる',
      '効果変更 (Deny -> Audit) や管理グループ外への移動はガバナンス違反・監査証跡欠落となる'
    ],
    keyPointsEn: [
      'Create a resource-scoped Azure Policy exemption with category "Waiver" and an expiration date',
      'Records the approved deviation in compliance reports as Exempt and lapses automatically on expiry',
      'Preserves Deny enforcement across the rest of the management group'
    ],
    referenceTopic: 'Azure Policy の例外 (Policy Exemptions)'
  },
  {
    id: 'sc500-q99',
    number: 99,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Network Watcher IP フロー検証によるライブ トラフィックなしでの遮断ルール特定',
    titleEn: 'Identifying Blocking NSG/AVNM Rules with Network Watcher IP Flow Verify',
    scenarioJa: `VM1 という名前の仮想マシンには、NSG1 という名前の NSG に関連付けられたネットワーク インターフェイスがあります。アプリケーション管理者は、Azure portal のルール一覧で確認すると NSG1 がトラフィックを許可しているように見えるにもかかわらず、VM1 が TCP ポート 443 で外部 SaaS API へ送信接続できないと報告しています。

ライブのテスト トラフィックを生成したりパケットをキャプチャしたりすることなく、そのトラフィックに実際に適用されてブロックしている正確なルール (既定ルールやプラットフォーム ルールを含む) を特定する必要があります。`,
    scenarioEn: `A virtual machine named VM1 has a network interface associated with an NSG named NSG1. Application administrators report that VM1 cannot connect outbound to an external SaaS API on TCP port 443, even though NSG1 appears to allow the traffic when viewed in the Azure portal rules list. You need to determine exactly which rule (including any default or platform rule) is actually being applied to the traffic and blocking it, without generating any live test traffic or capturing packets.`,
    questionJa: 'どの Azure Network Watcher 診断機能を使用すべきですか？',
    questionEn: 'Which Azure Network Watcher diagnostic capability should you use?',
    options: [
      {
        id: 'A',
        textJa: 'IP フロー検証 (IP flow verify)',
        textEn: 'IP flow verify',
        isCorrect: true,
        explanationJa: '【正解】IP フロー検証は、実際のトラフィックを送信することなく、VM の NIC とサブネットに適用されているすべての NSG および Azure Virtual Network Manager 管理規則に対して単一のパケットをシミュレートします。「アクセスが許可されました」または「アクセスが拒否されました」とともに、原因となっているセキュリティ規則名 (DenyAllOutBound などの既定ルールを含む) を返します。',
        explanationEn: 'IP flow verify simulates a single packet against every NSG applied to the VM\'s NIC and subnet as well as any Azure Virtual Network Manager admin rules, without sending real traffic. It returns Access allowed or Access denied together with the name of the security rule responsible, including default rules such as DenyAllOutBound.'
      },
      {
        id: 'B',
        textJa: '接続のトラブルシューティング (Connection troubleshoot)',
        textEn: 'Connection troubleshoot',
        isCorrect: false,
        explanationJa: '【不正解】Connection troubleshoot はライブのプローブ トラフィックを生成して送信元と宛先間の実際の接続性をテストし、待機時間とホップごとの結果を報告するため、ライブ テスト トラフィックを回避する要件を満たしません。',
        explanationEn: 'Connection troubleshoot tests actual connectivity between a source and destination by generating live probe traffic and reports latency and hop-by-hop results, which does not meet the requirement of avoiding live test traffic.'
      },
      {
        id: 'C',
        textJa: 'NSG フロー ログ (NSG flow logs)',
        textEn: 'NSG flow logs',
        isCorrect: false,
        explanationJa: '【不正解】NSG フロー ログは監査・分析向けに実際のトラフィック フローの許可/拒否判定を時系列で記録するものですが、集約された有効なルール セットを提示するものではなく、即座のシミュレーション判定には適しません。',
        explanationEn: 'NSG flow logs record historical allow/deny decisions for actual traffic flows over time for auditing and analysis, but they do not present the aggregated effective rule set and require log data collection and analysis tools rather than an immediate rule evaluation.'
      },
      {
        id: 'D',
        textJa: '有効なセキュリティ規則 (Effective security rules)',
        textEn: 'Effective security rules',
        isCorrect: false,
        explanationJa: '【不正解】有効なセキュリティ規則は NIC レベルとサブネット レベルの規則 (既定ルールを含む) の統合一覧を表示するものであり、なぜ判定されたかを理解するのには役立ちますが、特定のフローを評価して外部 SaaS API への送信呼び出しをどの単一ルールがブロックしているかを直接特定してはくれません。',
        explanationEn: 'Effective security rules shows the aggregated list of NIC-level and subnet-level rules, including defaults, that apply to the network interface, which is useful for understanding why a decision was made. It does not evaluate a specific flow, so it will not tell you which single rule is blocking the outbound call to the SaaS API.'
      }
    ],
    overallExplanationJa: `**IP フロー検証 (IP flow verify)** は、特定のトラフィック フローをどのルールが許可またはブロックしているかを正確に特定するために設計された Azure Network Watcher の機能です。

方向・プロトコル・ローカル IP/ポート・リモート IP/ポートを指定すると、NIC とサブネットに適用されたすべての NSG および AVNM セキュリティ管理規則を評価し、「Access denied」および該当するルール名 (例: サブネット NSG 側のルールや ` + '`DenyAllOutBound`' + `、AVNM ルール) を返します。シミュレーションであるため、実トラフィックの送出やパケット キャプチャは一切行われません。`,
    overallExplanationEn: `IP flow verify is the Network Watcher capability designed to answer exactly which rule permits or blocks a given flow. You supply direction, protocol, local IP and port, and remote IP and port, and it evaluates all network security groups attached to the NIC and the subnet plus any Virtual Network Manager security admin rules, returning Access denied together with the offending rule name. It is a simulation, so no live traffic is generated and no packets are captured. Effective security rules only lists the aggregated rule set for a NIC, NSG flow logs require real traffic to have occurred, and connection troubleshoot actively tests a connection, so none of them satisfy the stated constraints.`,
    keyPointsJa: [
      'ライブ トラフィックを送らずに特定 IP:Port フローを拒否している単一の NSG / AVNM ルール名を特定 ＝ Network Watcher の「IP フロー検証 (IP flow verify)」',
      'Connection troubleshoot はライブのプローブ パケットを送信するため要件に反する',
      'Effective security rules は結合ルール一覧の閲覧のみで、特定 5-tuple フローに対する判定結果を直接返さない'
    ],
    keyPointsEn: [
      'Use Network Watcher IP flow verify to simulate a packet and identify the exact rule blocking or allowing a flow',
      'Evaluates NIC NSG, subnet NSG, and AVNM security admin rules without sending live test traffic',
      'Connection troubleshoot sends live probe packets; NSG flow logs record historical actual traffic'
    ],
    referenceTopic: 'Azure Network Watcher IP フロー検証'
  },
  {
    id: 'sc500-q100',
    number: 100,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'AKS 向け Azure Policy アドオン (Gatekeeper) によるデプロイ時アドミッション制御',
    titleEn: 'Enforcing Admission-Time Pod Policies in AKS with Azure Policy Add-on',
    scenarioJa: `あなたの組織では Azure Kubernetes Service (AKS) クラスター上で本番ワークロードを実行しています。セキュリティ レビュー中に、複数のポッドが特権コンテナー (Privileged containers) として実行されており、未承認のパブリック レジストリからイメージがプルされていることが判明しました。

事後検出だけでなく、デプロイ時 (Admission time) に強制を行うことで、これらの種類のポッド仕様が今後クラスターにデプロイされるのを防ぐ必要があります。`,
    scenarioEn: `Your organization runs a production workload on an Azure Kubernetes Service (AKS) cluster. During a security review, you discover that several pods are running as privileged containers, and images are being pulled from unapproved public registries. You need to prevent these types of pod specifications from being deployed to the cluster going forward, with enforcement occurring at deployment time (not just after-the-fact detection).`,
    questionJa: 'この要件を満たすためにどの AKS セキュリティ制御を有効にすべきですか？',
    questionEn: 'Which AKS security control should you enable to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender for Containers の脆弱性評価',
        textEn: 'Microsoft Defender for Containers vulnerability assessment',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Containers はイメージと実行中ワークロードの脆弱性評価およびランタイム脅威検出を提供しますが、ポッド仕様に対するアドミッション時のブロック強制は行いません。',
        explanationEn: 'Microsoft Defender for Containers provides vulnerability assessment and runtime threat detection for images and running workloads, but it does not enforce admission-time restrictions on pod specifications; it primarily generates recommendations and alerts after resources exist.'
      },
      {
        id: 'B',
        textJa: 'AKS サブネット上のネットワーク セキュリティ グループ (NSG)',
        textEn: 'Network security groups on the AKS subnet',
        isCorrect: false,
        explanationJa: '【不正解】NSG は IP アドレスとポートに基づいてサブネットまたは NIC レベルのネットワーク トラフィックを制御するものであり、特権モードやコンテナー イメージ レジストリ元などのポッド仕様を検査・ブロックする能力はありません。',
        explanationEn: 'Network security groups control network traffic at the subnet or NIC level based on IP addresses and ports; they have no ability to inspect or block pod specifications such as privileged mode or container image source.'
      },
      {
        id: 'C',
        textJa: 'クラスター ユーザー向けの Kubernetes ロールベース アクセス制御 (RBAC)',
        textEn: 'Kubernetes role-based access control (RBAC) for cluster users',
        isCorrect: false,
        explanationJa: '【不正解】Kubernetes RBAC はどのユーザーやサービス アカウントが Kubernetes リソースの作成・更新・削除を実行できるかを制御しますが、特権エスカレーション設定やイメージ レジストリ元といったポッド仕様の中身までは評価・制限できません。',
        explanationEn: 'Kubernetes RBAC controls which users or service accounts can perform actions (such as create, update, delete) on Kubernetes resources, but it does not evaluate or restrict the content of a pod specification, such as privilege escalation settings or image registry source.'
      },
      {
        id: 'D',
        textJa: 'AKS 用 Azure Policy アドオン (Gatekeeper ベースのアドミッション制御)',
        textEn: 'Azure Policy Add-on for AKS (Gatekeeper-based admission control)',
        isCorrect: true,
        explanationJa: '【正解】AKS 用 Azure Policy アドオンは、割り当てられた Azure Policy 定義に対してポッド仕様をクラスターへの受け入れ (Admission) 前に評価する Gatekeeper (Open Policy Agent ベースのアドミッション コントローラー) をデプロイするため、特権コンテナーのブロックや未承認レジストリからのイメージ使用をデプロイ時に即座に拒否できます。',
        explanationEn: 'The Azure Policy Add-on for AKS deploys Gatekeeper (an admission controller based on Open Policy Agent) that evaluates pod specifications against assigned Azure Policy definitions before they are admitted to the cluster, allowing you to block privileged containers or disallow images from unapproved registries at deployment time.'
      }
    ],
    overallExplanationJa: `AKS においてポッド仕様に対するセキュリティ ベースライン (特権コンテナーの禁止、許可されたイメージ レジストリの制限など) をアドミッション時 (デプロイ前) に強制するには、**AKS 用 Azure Policy アドオン**を有効化します。

このアドオンは Open Policy Agent (OPA) ベースの **Gatekeeper** アドミッション コントローラーを展開し、Azure Policy のイニシアチブ／割り当て (Deny 効果) に基づいて非準拠のマニフェストがクラスターで実行される前にブロックします。`,
    overallExplanationEn: `Enforcing security baselines on pod specifications in AKS (such as disallowing privileged containers or restricting allowed image registries) at admission time requires the Azure Policy Add-on for AKS, which uses Gatekeeper to evaluate and block non-compliant deployments before they run. Other controls like Defender for Containers, NSGs, and Kubernetes RBAC serve different security purposes and do not provide admission-time enforcement of pod-level configuration policies.`,
    keyPointsJa: [
      'AKS デプロイ時に特権コンテナーや未承認レジストリのポッド作成をブロック ＝ AKS 用 Azure Policy アドオン (Gatekeeper / OPA)',
      'Gatekeeper が Kubernetes API アドミッション時にマニフェストを検証して非準拠デプロイを拒否する',
      'Defender for Containers や Kubernetes RBAC はポッド YAML のセキュリティ制約 (特権フラグ等) のデプロイ時ブロックには使えない'
    ],
    keyPointsEn: [
      'Enable the Azure Policy Add-on for AKS (OPA Gatekeeper) to enforce pod security policies at admission time',
      'Blocks privileged containers and unapproved container registries before pods are scheduled',
      'Defender for Containers surfaces post-deployment recommendations/alerts rather than admission blocks'
    ],
    referenceTopic: 'AKS 用 Azure Policy アドオンと Gatekeeper アドミッション制御'
  },
  {
    id: 'sc500-q101',
    number: 101,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Entra ID ガバナンス アクセス レビューによる 90 日ごとの特権グループ再認証と自動削除',
    titleEn: 'Recurring Entra ID Access Reviews with Auto-Apply and No-Response Removal',
    scenarioJa: `Contoso 社は、2 つの Microsoft Entra ID グループを通じて「特権ロール管理者」(Privileged Role Administrator) および「グローバル管理者」(Global Administrator) ロールを割り当てています。監査では、これらのグループのすべてのメンバーが 90 日ごとにグループ所有者によって再認証 (Re-attest) され、アクセスが承認されなかったメンバーは自動的に削除され、さらに期限までにレビュー担当者が応答しなかったメンバーも同様に削除されることが要求されています。

Contoso 社は Microsoft Entra ID Governance ライセンスを利用できます。`,
    scenarioEn: `Contoso assigns the Privileged Role Administrator and Global Administrator roles through two Microsoft Entra ID groups. An audit requires that every member of these groups be re-attested by the group owner every 90 days, that any member whose access is not approved be removed automatically, and that members whose reviewer does not respond before the deadline also be removed.

Contoso has Microsoft Entra ID Governance licensing available.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: '特権ロールをアクティブ化するたびに指定の承認者による承認、チケット番号の記録、および正当な理由の入力を必須とする Microsoft Entra Privileged Identity Management (PIM) のロール設定',
        textEn: 'Privileged Identity Management (PIM) role activation settings that require designated approver confirmation, justification, and multi-factor authentication on every elevation.',
        isCorrect: false,
        explanationJa: '【不正解】アクティブ化承認はロールを使用する瞬間に昇格をどう制御するかを決めるものであり、そもそも誰がそのロール／グループに適格であるかを定期的に再認証する機能ではありません。',
        explanationEn: 'Activation approval controls how a role is elevated at the moment of use. It does not periodically re-attest who is eligible for the role in the first place.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Entra Permissions Management を使用して対象特権グループのメンバーごとに過去 90 日間の権限使用状況を監視し、未使用のロール権限の自動削減および最適化レポートを生成する構成',
        textEn: 'Microsoft Entra Permissions Management remediation tasks that analyze permission creep over 90 days and automatically remove unused privileges across the cloud environment.',
        isCorrect: false,
        explanationJa: '【不正解】Permissions Management はマルチクラウド プラットフォーム全体で付与済み権限と使用済み権限を分析して適正化を推奨するツールであり、未承認メンバーの自動削除を伴う定期的な人間による棚卸しサイクルを実行しません。',
        explanationEn: 'Permissions Management analyses granted versus used permissions across cloud platforms and recommends right-sizing. It does not run a recurring human attestation cycle with automatic removal of unapproved members.'
      },
      {
        id: 'C',
        textJa: 'グローバル管理者および特権ロール管理者のメンバーを対象に、90 日ごとの再認証 (サインイン頻度) と多要素認証を強制してセッションの有効性を検証する Microsoft Entra 条件付きアクセス ポリシー',
        textEn: 'A Microsoft Entra Conditional Access policy applied to privileged users that enforces multifactor authentication and requires interactive reauthentication every 90 days.',
        isCorrect: false,
        explanationJa: '【不正解】再認証頻度 (サインイン頻度) はサインイン時にユーザーが本人確認を行う間隔を制御するものであり、ロールやグループ メンバーシップのレビューおよび失効とは無関係です。',
        explanationEn: 'Reauthentication frequency governs how often a user proves their identity during sign-in. It has no relationship to reviewing or revoking role or group membership.'
      },
      {
        id: 'D',
        textJa: '各グループに対する定期的なアクセス レビュー (Access review) を構成し、レビュー担当者としてグループ所有者を設定、結果の自動適用 (Auto-apply) を有効化し、レビュー担当者が応答しない場合のアクションを「アクセス権を削除する」(Remove access) に設定する',
        textEn: 'A recurring access review on each group, with the group owner as reviewer, auto-apply of results enabled, and the action for reviewers who do not respond set to remove access.',
        isCorrect: true,
        explanationJa: '【正解】アクセス レビューは監査が求める定期的な再認証サイクルを作成し、レビュー担当者としてグループ所有者を指定できます。結果の自動適用 (Auto-apply) を有効にすると管理者の作業なしで拒否されたメンバーが自動削除され、無応答時の動作を「アクセス権を削除する」に設定することで期限を逃したレビュー担当者のメンバーも確実に削除されます。',
        explanationEn: 'Access reviews create the recurring attestation cycle the audit requires and can name the group owner as the reviewer. Enabling auto-apply removes denied members without administrator action, and setting the no-response behaviour to remove access covers reviewers who miss the deadline.'
      }
    ],
    overallExplanationJa: `Microsoft Entra ID Governance の**アクセス レビュー (Access reviews)** は、グループ メンバーシップ・アプリケーション割り当て・特権ロール資格に対する定期的な棚卸しパターン向けに設計されています。

レビュー作成時に「グループ所有者」をレビュー担当者に指定し、90 日ごとの繰り返しスケジュールを設定した上で、完了後に拒否されたユーザーを自動除外する **Auto-apply results to resource** と、レビュー期限までに未回答の場合のアクション **If reviewers don't respond: Remove access** を設定することで、監査要件を完全に自動化できます。`,
    overallExplanationEn: `Access reviews in Microsoft Entra ID Governance are designed for exactly this recurring attestation pattern and can target group membership, application assignments, or role eligibility. When creating the review you choose the reviewer, which can be the group owner, a named set of users, or the members themselves, and you set the recurrence to match the audit cadence. Auto-apply is the setting that removes denied members automatically once the review closes, without waiting for an administrator to action the results. A separate setting defines what happens to members whose reviewer never responded, and choosing to remove access satisfies the second half of the requirement. Permissions Management, Privileged Identity Management activation settings, and Conditional Access address related but distinct governance problems.`,
    keyPointsJa: [
      '特権ロール割り当てグループの 90 日ごとの定期棚卸し＋自動削除 ＝ 定期アクセス レビュー ＋ グループ所有者レビュー ＋ Auto-apply 有効 ＋ 無応答時 Remove access',
      'Auto-apply が拒否済みメンバーを自動削除し、If reviewers don\'t respond = Remove access が期限切れ未回答者を削除する',
      'PIM アクティブ化承認は昇格時のワークフローであり、メンバー資格の定期棚卸しとは別'
    ],
    keyPointsEn: [
      'Configure a recurring Entra ID Access Review targeting each group with Group Owner as reviewer',
      'Enable auto-apply of results and set "If reviewers don\'t respond" to "Remove access"',
      'PIM activation approval governs real-time elevation, not periodic membership attestation'
    ],
    referenceTopic: 'Microsoft Entra ID Governance アクセス レビューの自動適用設定'
  }
];
