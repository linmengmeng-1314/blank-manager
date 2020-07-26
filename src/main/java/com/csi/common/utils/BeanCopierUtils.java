package com.csi.common.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.cglib.beans.BeanCopier;

/**
 * 对象属性copy工具类
 * 	当两个对象含有相同的字段时(字段名称和字段类型一致),可以进行属性值的copy
 * @author linmengmeng
 * @创建时间：2019年3月26日 上午11:16:23
 */
public class BeanCopierUtils {

     public static Map<String,BeanCopier> beanCopierMap = new HashMap<String,BeanCopier>();

     /**
      * 对象属性值copy
      * 注意是强拷贝，前者的null属性会覆盖后者的属性值
      * @param source 模板
      * @param target 目标对象
      */
     public static void copyProperties(Object source, Object target){
         String beanKey =  generateKey(source.getClass(), target.getClass());
         BeanCopier copier =  null;
         if(!beanCopierMap.containsKey(beanKey)){
              copier = BeanCopier.create(source.getClass(), target.getClass(), false);
              beanCopierMap.put(beanKey, copier);
         }else{
              copier = beanCopierMap.get(beanKey);
         }
         copier.copy(source, target, null);

     }   

     private static String generateKey(Class<?> class1,Class<?>class2){
         return class1.toString() + class2.toString();
     }

}