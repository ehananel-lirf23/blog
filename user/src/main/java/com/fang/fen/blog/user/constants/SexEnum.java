package com.fang.fen.blog.user.constants;

import java.util.HashMap;
import java.util.Map;

public enum SexEnum {

    MEN("M"),
    WOMEN("F");

    private final String text;

    SexEnum(final String text) {
        this.text = text;
    }

    // Implementing a fromString method on an enum type
    private static final Map<String, SexEnum> stringToEnum = new HashMap <String, SexEnum>();

    static {
        // Initialize map from constant name to enum constant
        for(SexEnum sex : values()) {
            stringToEnum.put(sex.toString(), sex);
        }
    }
    // Returns Blah for string, or null if string is invalid
    public static SexEnum fromString(String symbol) {
        return stringToEnum.get(symbol);
    }
    @Override
    public String toString() {
        return text;
    }
}
