export enum CLASSIFICATION_ENDS {
  NORMAL = "NORMAL",
  LATE_PAYMENT = "LATE_PAYMENT",
  RESELL = "RESELL",
}

export enum CONTRACT_STATUS {
  REFUND_IN_PROGRESS = "REFUND_IN_PROGRESS",
  PARTIAL_REFUND = "PARTIAL_REFUND",
  LATE_PAYING = "LATE_PAYING",
  UNUSUAL_LOSS_OF_INTERESTS = "UNUSUAL_LOSS_OF_INTERESTS",
  ON_SALE = "ON_SALE",
  RESALE_COMPLETE = "RESALE_COMPLETE",
  REFUND_COMPLETE = "REFUND_COMPLETE",
}

export enum TYPE_OF_CONTRACT {
  NEW  = "NEW",
  EXTEND  = "EXTEND",
  UPDATE  = "UPDATE",
}

export enum REFUND_METHOD {
  DUE_DATE = "DUE_DATE",
  AVERAGE_PRINCIPAL_INTEREST = "AVERAGE_PRINCIPAL_INTEREST", 
  AVERAGE_ORIGIN = "AVERAGE_ORIGIN",
}

export enum IN_STORAGE {
  IN_STORAGE = "IN_STORAGE",                        // đang bảo quản
  LEASING = "LEASING",                              // đang cho thuê
  RETURNING_MID_BATCH = "RETURNING_MID_BATCH",      // đang trả lại giữa đợt
  RETURN_NORMAL = "RETURN_NORMAL"                   // trả lại bình thường
}

export enum MORTGAGE_STATUS {
  NORMAL = "NORMAL",                                // thế chấp bình thường
  PROCEED_COLLATERAL = "PROCEED_COLLATERAL",        // tiến hành sở hữu vật thế chấp
  CANCEL = "CANCEL"                                 // huỷ thế chấp
}