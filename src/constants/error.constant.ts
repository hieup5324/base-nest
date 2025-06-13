export const ErrorMessage = {
  INTERNAL_SERVER_ERROR: 'common.internalServerError',
  USER_NOT_FOUND: 'user.notFound',
  INVALID_EMAIL_OR_PASSWORD: 'auth.invalidCredential',
  UNAUTHORIZED: 'common.unauthorized',
  FORBIDDEN: 'common.forbidden',
  NOT_FOUND: ' này không tồn tại.',
  DATA_EXIST: ' này đã tồn tại.',
  USER_BLOCKED: 'Người dùng đã bị khóa!',
  BRANCH_BLOCKED: 'Bưu cục đã bị khóa!',
  CUSTOMER_BLOCKED_BY_BRANCH:
    'Bưu cục ký hợp đồng với bạn đang bị khóa. Vui lòng liên hệ bưu cục ký hợp đồng với bạn để được hỗ trợ!',
  TOO_MANY_REQUEST: 'Số lượng request vượt quá ngưỡng cho phép trong ngày!',
};

export const ErrorCode = {
  USER_NOT_FOUND: 4000,
  UNAUTHORIZED: 4001,
  INVALID_EMAIL_OR_PASSWORD: 4002,
  FORBIDDEN: 4003,
  NOT_FOUND: 4004,
  DATA_EXIST: 4005,
  USER_BLOCKED: 4006,
  BRANCH_BLOCKED: 4007,
  TOO_MANY_REQUEST: 4009,
};
