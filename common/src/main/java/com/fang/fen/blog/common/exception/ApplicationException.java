package com.fang.fen.blog.common.exception;

public abstract class ApplicationException extends Exception {

    private String errorCode;


    public String getErrorCode() {
        return errorCode;
    }


    public ApplicationException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ApplicationException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    @Override
    public String toString() {
        return "ApplicationException: { errorCode : " + getErrorCode() + " }";
    }

}
