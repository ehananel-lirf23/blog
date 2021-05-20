package com.fang.fen.blog.common.exception;

public class CommonApplicationException extends ApplicationException {

    public CommonApplicationException(String errorCode, String message) {
        super(errorCode, message);
    }

    public CommonApplicationException(String errorCode, String message, Throwable cause) {
        super(errorCode, message, cause);
    }

    @Override
    public String toString() {
        return "CommonApplicationException: { errorCode : " + this.getErrorCode() + " }";
    }

}
