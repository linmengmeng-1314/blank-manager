package com.csi.modules.loginInfo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.csi.modules.loginInfo.entity.LoginInfoMergeEntity;

/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-10 09:20:30
 */
@Mapper
public interface LoginInfoMergeDao {
		
	@Select({
			"<script>",
			"select",
					"`user_id`, ",
					"`username`, ",
					"`contacts`, ",
					"`status`, ",
					"`create_time`, ",
					"`token`, ",
					"`expire_time`, ",
					"`update_time`, ",
					"`ip`, ",
					"`end_time`, ",
					"`count`, ",
					"`type`, ",
					"`start_time`",
			"from",
				"(select u.user_id,u.username,u.contacts,t.token,t.expire_time,t.update_time,l.ip,l.start_time,l.end_time,count(l.id)  count,u.`status`,l.create_time,l.`type` from sys_user u, 	sys_user_token t, 	mrs_login_info l 	where u.user_id = t.user_id and l.user_name = u.username    group by user_id,ip) F",
			"<where>",
				"<if test='entity.userId != null '>and `user_id` = #{entity.userId} </if>",
				"<if test='entity.username != null and entity.username != \"\" '>AND `username` = #{entity.username} </if>",
				"<if test='entity.contacts != null and entity.contacts != \"\" '>AND `contacts` = #{entity.contacts} </if>",
				"<if test='entity.status != null '>and `status` = #{entity.status} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.token != null and entity.token != \"\" '>AND `token` = #{entity.token} </if>",
				"<if test='entity.expireTime != null '>and `expire_time` = #{entity.expireTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.ip != null and entity.ip != \"\" '>AND `ip` = #{entity.ip} </if>",
				"<if test='entity.endTime != null '>and `end_time` = #{entity.endTime} </if>",
				"<if test='entity.count != null '>and `count` = #{entity.count} </if>",
				"<if test='entity.type != null '>and `type` = #{entity.type} </if>",
				"<if test='entity.startTime != null '>and `start_time` = #{entity.startTime}</if>",
			"</where>",
			"limit #{startRow},#{endRow}  ",
			"</script>"
    })
	List<LoginInfoMergeEntity> selectEntityListForPage(@Param("entity")LoginInfoMergeEntity loginInfoMergeEntity,@Param("startRow")Long startRow,@Param("endRow")Long endRow);
	
	@Select({
			"<script>",
			"select",
			        "count(1) ",
			"from",
				"(select u.user_id,u.username,u.contacts,t.token,t.expire_time,t.update_time,l.ip,l.start_time,l.end_time,count(l.id)  count,u.`status`,l.create_time,l.`type` from sys_user u, 	sys_user_token t, 	mrs_login_info l 	where u.user_id = t.user_id and l.user_name = u.username    group by user_id,ip) F",
			"<where>",
				"<if test='entity.userId != null '>and `user_id` = #{entity.userId} </if>",
				"<if test='entity.username != null and entity.username != \"\" '>AND `username` = #{entity.username} </if>",
				"<if test='entity.contacts != null and entity.contacts != \"\" '>AND `contacts` = #{entity.contacts} </if>",
				"<if test='entity.status != null '>and `status` = #{entity.status} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.token != null and entity.token != \"\" '>AND `token` = #{entity.token} </if>",
				"<if test='entity.expireTime != null '>and `expire_time` = #{entity.expireTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.ip != null and entity.ip != \"\" '>AND `ip` = #{entity.ip} </if>",
				"<if test='entity.endTime != null '>and `end_time` = #{entity.endTime} </if>",
				"<if test='entity.count != null '>and `count` = #{entity.count} </if>",
				"<if test='entity.type != null '>and `type` = #{entity.type} </if>",
				"<if test='entity.startTime != null '>and `start_time` = #{entity.startTime}</if>",
			"</where>",
			"</script>"
    })
	Long selectEntityListForPageCount(@Param("entity")LoginInfoMergeEntity loginInfoMergeEntity);
}
