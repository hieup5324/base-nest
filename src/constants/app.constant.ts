import * as process from 'process';
import { getBoolean, getNumber, getString } from 'src/utils/common.util';
import * as dotenv from 'dotenv';
dotenv.config();

export const NodeEnv = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
};

export const TIMEOUT_REQUEST = 7 * 1000;

export const MAX_DEPTH = 2;

export const AppEnv = {
  DB_READ: 'DB_READ',
  DB_TYPE_READ: getString(process.env.DB_TYPE_READ),
  DB_HOST_READ: getString(process.env.DB_HOST_READ),
  DB_PORT_READ: getNumber(process.env.DB_PORT_READ),
  DB_USERNAME_READ: getString(process.env.DB_USERNAME_READ),
  DB_PASSWORD_READ: getString(process.env.DB_PASSWORD_READ),
  DB_DATABASE_READ: getString(process.env.DB_DATABASE_READ),
  DB_SSL_READ: getString(process.env.DB_SSL_READ),
  DB_CA_READ: getString(process.env.DB_CA_READ),

  DB_WRITE: 'DB_WRITE',
  NODE_ENV: getString(process.env.NODE_ENV),
  APP_PORT: getNumber(process.env.APP_PORT),
  DB_TYPE: getString(process.env.DB_TYPE),
  DB_HOST: getString(process.env.DB_HOST),
  DB_PORT: getNumber(process.env.DB_PORT),
  DB_USERNAME: getString(process.env.DB_USERNAME),
  DB_PASSWORD: getString(process.env.DB_PASSWORD),
  DB_DATABASE: getString(process.env.DB_DATABASE),
  DB_SSL: getString(process.env.DB_SSL),
  DB_CA: getString(process.env.DB_CA),
  // MONGODB_URI: getString(process.env.MONGODB_URI),
  JWT_SECRET: getString(process.env.JWT_SECRET),
  JWT_SECRET_REFRESH: getString(process.env.JWT_SECRET) + 'refresh',
  JWT_EXPIRY_IN_SECOND: process.env.JWT_EXPIRY_IN_SECOND,
  REDIS_HOST: getString(process.env.REDIS_HOST),
  REDIS_PORT: getNumber(process.env.REDIS_PORT),
  REDIS_DB: getNumber(process.env.REDIS_DB),
  DEFAULT_CACHE_TTL: getNumber(process.env.DEFAULT_CACHE_TTL),
  ENABLE_QUERY_LOG: getBoolean(process.env.ENABLE_QUERY_LOG || 'false'),
  ENABLE_DB_SYNC: getBoolean(process.env.ENABLE_DB_SYNC || 'false'),
  RABBITMQ_DEFAULT_USER: getString(process.env.RABBITMQ_DEFAULT_USER),
  RABBITMQ_DEFAULT_PASS: getString(process.env.RABBITMQ_DEFAULT_PASS),
  RABBITMQ_HOST: getString(process.env.RABBITMQ_HOST),
  RABBITMQ_PORT: getNumber(process.env.RABBITMQ_PORT),
  RABBITMQ_VHOST: getString(process.env.RABBITMQ_VHOST),
  RABBITMQ_QUEUE_GHN: getString(process.env.RABBITMQ_QUEUE_GHN),
  RABBITMQ_QUEUE_BSI: getString(process.env.RABBITMQ_QUEUE_BSI),
  RABBITMQ_QUEUE_NJV: getString(process.env.RABBITMQ_QUEUE_NJV),
  RABBITMQ_QUEUE_JAT: getString(process.env.RABBITMQ_QUEUE_JAT),
  RABBITMQ_QUEUE_GTK: getString(process.env.RABBITMQ_QUEUE_GTK),
  RABBITMQ_QUEUE_CREATE_CONTROL_CRON_JOB:
    getString(process.env.RABBITMQ_QUEUE_CREATE_CONTROL_CRON_JOB) ||
    'queue.control.create',
  RABBITMQ_QUEUE_PUSH_NOTIFICATION:
    getString(process.env.RABBITMQ_QUEUE_PUSH_NOTIFICATION) ||
    'queue.push-notify.all',
  RABBITMQ_QUEUE_ORDER:
    getString(process.env.RABBITMQ_QUEUE_ORDER) || 'order-by-xlsx',
  RABBITMQ_QUEUE_ORDER_OPEN_API:
    getString(process.env.RABBITMQ_QUEUE_ORDER_OPEN_API) || 'order-by-open-api',
  RABBITMQ_QUEUE_SAVE_MESSAGE:
    getString(process.env.RABBITMQ_QUEUE_SAVE_MESSAGE) || 'save-message',
  RABBITMQ_QUEUE_CREATE_COMPARE: 'cms-comapre',
  RABBITMQ_QUEUE_UPDATE_CONTROL_DETAIL: 'control-detail',
  RABBITMQ_QUEUE_CREATE_ACCOUNTANT_COMPARE: 'accountant-compare',
  RABITMQ_NAME_EXCHANGE:
    getString(process.env.RABITMQ_NAME_EXCHANGE) || 'ghxvfanout',
  RABITMQ_NAME_EXCHANGE_DIRECT:
    getString(process.env.RABITMQ_NAME_EXCHANGE_DIRECT) || 'exchange.direct',
  RABBITMQ_GHXV_CONTROL_DIRECT_EXCHANGE:
    getString(process.env.RABBITMQ_GHXV_CONTROL_DIRECT_EXCHANGE) ||
    'exchange.direct.control',
  RABBITMQ_GHXV_AUTO_RECOMMEND_PAYMENT_DIRECT_EXCHANGE:
    getString(
      process.env.RABBITMQ_GHXV_AUTO_RECOMMEND_PAYMENT_DIRECT_EXCHANGE,
    ) || 'exchange.direct.recommend-payment',
  RABITMQ_NAME_CONTROL_TOPIC:
    getString(process.env.RABITMQ_NAME_CONTROL_TOPIC) || 'control.topic',
  RABITMQ_EXCHANGE_DIRECT_COMPARE: 'exchange.direct.compare',

  URL_SMS_BRANCH_NAME: 'https://api.brandsms.vn/api/SMSBrandname/SendSMS',
  URL_GHN_ORDER_UPDATE: getString(process.env.URL_GHN_ORDER_UPDATE),
  URL_GHN_ORDER_UPDATE_COD: getString(process.env.URL_GHN_ORDER_UPDATE_COD),
  URL_GHN_ORDER_CANCEL: getString(process.env.URL_GHN_ORDER_CANCEL),
  URL_GHN_ORDER: getString(process.env.URL_GHN_ORDER),
  URL_GTK_WEB_ADD: getString(process.env.URL_GTK_WEB_ADD),
  URL_GHTK_ORDER_CANCEL: getString(process.env.URL_GHTK_ORDER_CANCEL),
  URL_SPX_PUBLIC_API: getString(process.env.URL_SPX_PUBLIC_API),
  URL_NJV_DOMAIN: getString(process.env.URL_NJV_DOMAIN),
  URL_NT_PUBLIC_API: getString(process.env.URL_NT_PUBLIC_API),
  URL_LEX_DOMAIN:
    getString(process.env.URL_LEX_DOMAIN) ?? 'https://api.lazada.vn/rest',
  SUPER_ADMIN: 'superadmin02',
  X_API_KEY: '4f2c23a7d4e19b5d8d99bafe1745c6e1',
  CONSOLE_V1_TOKEN: getString(process.env.CONSOLE_V1_TOKEN),
  CONSOLE_V1_DOMAIN: getString(process.env.CONSOLE_V1_DOMAIN),
  FIREBASE_PROJECT_ID: getString(process.env.FIREBASE_PROJECT_ID),
  FIREBASE_PRIVATE_KEY: getString(process.env.FIREBASE_PRIVATE_KEY),
  FIREBASE_CLIENT_EMAIL: getString(process.env.FIREBASE_CLIENT_EMAIL),
  GOOGLE_SHEET_EMAIL: getString(process.env.GOOGLE_SHEET_EMAIL),
  GOOGLE_SHEET_PRIVATE_KEY: getString(process.env.GOOGLE_SHEET_PRIVATE_KEY),
  REDIS_AUTH_KEY: getString(process.env.REDIS_AUTH_KEY),
  BACKEND_AUTH_KEY: getString(process.env.BACKEND_AUTH_KEY),
  PASS_DEFAULT: getString(process.env.PASS_DEFAULT),
  AUTH_PRIVATE_KEY: getString(process.env.AUTH_PRIVATE_KEY),
  AUTH_PUBLIC_KEY: getString(process.env.AUTH_PUBLIC_KEY),

  ELASTICSEARCH_URL: getString(process.env.ELASTICSEARCH_URL),
  ELASTICSEARCH_USERNAME: getString(process.env.ELASTICSEARCH_USERNAME),
  ELASTICSEARCH_PASSWORD: getString(process.env.ELASTICSEARCH_PASSWORD),
  ELASTICSEARCH_INDEX_ORDER: getString(process.env.ELASTICSEARCH_INDEX_ORDER),
  ELASTICSEARCH_INDEX_CONTROL: getString(
    process.env.ELASTICSEARCH_INDEX_CONTROL,
  ),
  ELASTICSEARCH_INDEX_CONTROL_MONEY_AVAILABLE: getString(
    process.env.ELASTICSEARCH_INDEX_CONTROL_MONEY_AVAILABLE,
  ),
  ELASTICSEARCH_INDEX_ORDER_LOG: getString(
    process.env.ELASTICSEARCH_INDEX_ORDER_LOG,
  ),
  ELASTICSEARCH_INDEX_ORDER_BRANCH_PREFIX: getString(
    process.env.ELASTICSEARCH_INDEX_ORDER_BRANCH_PREFIX,
  ),
  ELASTICSEARCH_INDEX_WEBHOOK: getString(
    process.env.ELASTICSEARCH_INDEX_WEBHOOK,
  ),
  ELASTICSEARCH_INDEX_NOTIFY: getString(process.env.ELASTICSEARCH_INDEX_NOTIFY),

  SQS_ENDPOINT: getString(process.env.SQS_ENDPOINT),
  SQS_DLQ_ENDPOINT: getString(process.env.SQS_DLQ_ENDPOINT),
  S3_BUCKET: getString(process.env.S3_BUCKET) || 'ghsv-v2-backend-dev',
  AWS_REGION: getString(process.env.AWS_REGION),
  AWS_ACCESS_KEY_ID: getString(process.env.AWS_ACCESS_KEY_ID),
  AWS_SECRET_ACCESS_KEY: getString(process.env.AWS_SECRET_ACCESS_KEY),
};

export const TableName = {
  USER: 'user',
  ROLE: 'role',
  PERMISSION: 'permission',
  PERMISSION_SCREEN: 'permission_screen',
  ROLE_PERMISSION: 'role_permission',
  CUSTOMER: 'customer',
  CUSTOMER_REG: 'customer_reg',
  CUSTOMER_LOG: 'customer_log',
  POLICY: 'policy',
  THEME: 'theme',
  BANK: 'bank',
  BRANCH: 'branch',
  DEADLINE: 'deadline',
  CONFIG: 'config',
  ORDER: 'order',
  ORDER_INTERNATIONAL: 'order_international',
  CHANGE_FEE: 'change_fee',
  CHANGE_TEXT: 'change_text',
  COUNTRY: 'country',
  CONTROL: 'control',
  CONTROL_DETAIL: 'control_detail',
  ORDER_LOSE_LOG: 'order_lose_log',
  ORDER_LOG: 'order_log',
  TO_INFOMATION: 'to_infomation',
  ORDER_HISTORY: 'order_history',
  FEE: 'fee',
  FCM_TOKEN: 'fcm_token',
  ADDRESS: 'address',
  ADDRESS_AREA: 'address_area',
  PARTNER: 'partner',
  PARTNER_INTERNATIONAL: 'partner_international',
  TRANSPORT: 'transport',
  ORDER_TRANSPORT: 'order_transport',
  ROUTING: 'routing',
  WARE_HOUSE: 'ware_house',
  PATTERN: 'PATTERN',
  TICKET: 'ticket',
  TICKET_SENT: 'ticket_sent',
  PARTNER_BRANCH: 'partner_branch',
  POLICY_NOTE: 'policy_note',
  CONFIG_NOTE: 'config_note',
  WAREHOUSE_SHIPPER: 'warehouse_shipper',
  CASHBOOK: 'cashbook',
  CASHBOOK_GROUP: 'cashbook_group',
  CASHBOOK_SOURCE: 'cashbook_source',
  WEBHOOK: 'webhook',
  SOURCE: 'source',
  NOTIFICATIONS: 'notifications',
  PROXY: 'proxy',
  ANNOUNCEMENT: 'announcement',
  ANNOUNCEMENT_TO_BRANCH: 'announcement_to_branch',
  PRINT_STORAGE: 'print_storage',
  PRINT_TEMPLATE: 'print_template',
  CONTROL_JOB: 'control_job',
  ACCOUNT_ADMIN_BEST: 'account_admin_best',
  PARTNER_BRANCH_NOTE: 'partner_branch_note',
  CONTROL_LOG: 'control_log',
  SWITCH_DATABASE: 'switch_database',
  GUIDELINE: 'guideline',
  WARE_HOUSE_INTERNATIONAL: 'ware_house_international',
};

export const MAPPING_TABLE_NAME = {
  UserEntity: 'Người dùng',
  RoleEntity: 'Role',
  PermissionEntity: 'Permission',
  PermissionScreenEntity: 'Permission_screen',
  CustomerEntity: 'Khách hàng',
  PolicyEntity: 'Chính sách',
  ThemeEntity: 'Chủ đề',
  BankEntity: 'Ngân hàng',
  BranchEntity: 'Bưu cục',
  DeadlineEntity: 'Deadline',
  ConfigEntity: 'Cấu hình',
  OrderEntity: 'Đơn hàng',
  ChangeFeeEntity: 'Thay đổi phí',
  ChangeTextEntity: 'Thay đổi text',
  ControlEntity: 'Đối soát',
  ControlDetailEntity: 'Chi tiết đối soát',
  OrderLoseLogEntity: 'Đơn lỗi',
  OrderLogEntity: 'Log đơn hàng',
  ToInfomationEntity: 'Địa chỉ nhận',
  OrderHistoryEntity: 'Lịch sử đơn hàng',
  FeeEntity: 'Phí',
  FCMTokenEntity: 'Fcm_token',
  AddressEntity: 'Địa chỉ',
  PartnerEntity: 'Đối tác',
  TransportEntity: 'Phiên vận chuyên',
  OrderTransportEntity: 'Đơn trong phiên vận chuyển',
  WareHouseEntity: 'Cửa hàng',
  PatternEntity: 'Mẫu',
  TicketEntity: 'Ticket',
  PartnerBranchEntity: 'Đối tác của bưu cục',
  PolicyNoteEntity: 'Ghi chú chính sách',
  ConfigNoteEntity: 'Ghi chú cấu hình',
  WAREHOUSE_SHIPPER: 'Warehouse_shipper',
  CashbookEntity: 'Sổ quỹ',
  CashbookGroupEntity: 'Nhóm phiếu',
  CashbookSourceEntity: 'Nguồn tiền',
  WebhookEntity: 'Webhook',
  SourceEntity: 'Nguồn lên đơn',
  RoomEntity: 'Phòng chat',
  WareHouseInternationalEntity: 'Kho hàng quốc tế',
};

export const Language = {
  ENGLISH: 'en',
  VIETNAMESE: 'vi',
};

export const TEXT_BLOCK_BRANCH_CREATE_ORDER =
  'Bưu cục của bạn đã bị khoá. Vui lòng liên hệ bưu cục sales để được hỗ trợ.';

export const TEXT_BLOCK_CUSTOMER_CREATE_ORDER =
  'Tài khoản của bạn đã bị khoá tạo đơn. Vui lòng liên hệ bưu cục sales để được hỗ trợ.';

export const RABBITMQ_HEARTBEAT = 60;
