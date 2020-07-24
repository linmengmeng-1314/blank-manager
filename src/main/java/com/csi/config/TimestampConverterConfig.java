package com.csi.config;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * 全局handler前日期统一处理
 * @author zhanghang
 * @date 2018/1/11
 */
@Component
public class TimestampConverterConfig implements Converter<String, Timestamp> {

    private static final List<String> formarts = new ArrayList<>(4);
    static{
        formarts.add("yyyy-MM");
        formarts.add("yyyy-MM-dd");
        formarts.add("yyyy-MM-dd HH:mm");
        formarts.add("yyyy-MM-dd HH:mm:ss");
    }

    @Override
    public Timestamp convert(String source) {
        String value = source.trim();
        if ("".equals(value)) {
            return null;
        }
        if(source.matches("^\\d{4}-\\d{1,2}-\\d{1,2} {1}\\d{1,2}:\\d{1,2}:\\d{1,2}$")){
            return parseDate(source, formarts.get(3));
        }else if(source.matches("^\\d{4}-\\d{1,2}-\\d{1,2} {1}\\d{1,2}:\\d{1,2}$")){
            return parseDate(source, formarts.get(2));
        }else if(source.matches("^\\d{4}-\\d{1,2}-\\d{1,2}$")){
            return parseDate(source, formarts.get(1));
        }else if(source.matches("^\\d{4}-\\d{1,2}$")){
            return parseDate(source, formarts.get(0));
        }else {
            throw new IllegalArgumentException("Invalid boolean value '" + source + "'");
        }
    }
    

    /**
     * 格式化日期
     * @param dateStr String 字符型日期
     * @param format String 格式
     * @return Date 日期
     */
    public  Timestamp parseDate(String dateStr, String format) {
    	Timestamp date=null;
    	try {
    		DateFormat dateFormat = new SimpleDateFormat(format);
    		date = new Timestamp(dateFormat.parse(dateStr).getTime());
    		dateFormat.format(date);
    	} catch (Exception e) {
    		throw new IllegalArgumentException("Invalid boolean value '" + date + "'");
    	}
    	return date;
    }

}