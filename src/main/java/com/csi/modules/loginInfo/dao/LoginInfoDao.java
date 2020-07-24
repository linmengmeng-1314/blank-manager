package com.csi.modules.loginInfo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.csi.modules.loginInfo.entity.LoginInfoEntity;

/**
 * 记录登陆信息
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-05 09:59:36
 */
@Mapper
public interface LoginInfoDao {

		@Select({
			"<script>",
			"select",
					"`id`, ",
					"`user_name`, ",
					"`ip`, ",
					"`type`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`start_time`, ",
					"`end_time`",
			"from",
				"mrs_login_info F",
			"<where>",
				"<if test='entity.id != null '>and `id` = #{entity.id} </if>",
				"<if test='entity.userName != null and entity.userName != \"\" '>AND `user_name` = #{entity.userName} </if>",
				"<if test='entity.ip != null and entity.ip != \"\" '>AND `ip` = #{entity.ip} </if>",
				"<if test='entity.type != null '>and `type` = #{entity.type} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.startTime != null '>and `start_time` = #{entity.startTime} </if>",
				"<if test='entity.endTime != null '>and `end_time` = #{entity.endTime}</if>",
				"<if test='entity.sysRoleDeptEntity != null and entity.sysRoleDeptEntity.size() != 0'>",
					"and dept_id in (",
					"<foreach collection='entity.sysRoleDeptEntity' item='item' index='index' separator=',' >",
						"#{item.deptId}",
					"</foreach>",
					")",
				"</if>",
			"</where>",
			"limit #{startRow},#{endRow}  ",
			"</script>"
    })
	List<LoginInfoEntity> selectEntityListForPage(@Param("entity")LoginInfoEntity loginInfoEntity,@Param("startRow")Long startRow,@Param("endRow")Long endRow);
	
	@Select({
			"<script>",
			"select",
			        "count(1) ",
			"from",
				"mrs_login_info F",
			"<where>",
				"<if test='entity.id != null '>and `id` = #{entity.id} </if>",
				"<if test='entity.userName != null and entity.userName != \"\" '>AND `user_name` = #{entity.userName} </if>",
				"<if test='entity.ip != null and entity.ip != \"\" '>AND `ip` = #{entity.ip} </if>",
				"<if test='entity.type != null '>and `type` = #{entity.type} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.startTime != null '>and `start_time` = #{entity.startTime} </if>",
				"<if test='entity.endTime != null '>and `end_time` = #{entity.endTime}</if>",
				"<if test='entity.sysRoleDeptEntity != null and entity.sysRoleDeptEntity.size() != 0'>",
					"and dept_id in (",
					"<foreach collection='entity.sysRoleDeptEntity' item='item' index='index' separator=',' >",
						"#{item.deptId}",
					"</foreach>",
					")",
				"</if>",
			"</where>",
			"</script>"
    })
	Long selectEntityListForPageCount(@Param("entity")LoginInfoEntity loginInfoEntity);
	
	@Select({
			"<script>",
			"select",
					"`id`, ",
					"`user_name`, ",
					"`ip`, ",
					"`type`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`start_time`, ",
					"`end_time`",
			"from",
				"mrs_login_info",
			"<where>",
				"<if test='id != null '>and `id` = #{id} </if>",
				"<if test='userName != null and userName != \"\" '>AND `user_name` = #{userName} </if>",
				"<if test='ip != null and ip != \"\" '>AND `ip` = #{ip} </if>",
				"<if test='type != null '>and `type` = #{type} </if>",
				"<if test='createTime != null '>and `create_time` = #{createTime} </if>",
				"<if test='updateTime != null '>and `update_time` = #{updateTime} </if>",
				"<if test='startTime != null '>and `start_time` = #{startTime} </if>",
				"<if test='endTime != null '>and `end_time` = #{endTime}</if>",
				"<if test='sysRoleDeptEntity != null and sysRoleDeptEntity.size() != 0'>",
					"and dept_id in (",
					"<foreach collection='sysRoleDeptEntity' item='item' index='index' separator=',' >",
						"#{item.deptId}",
					"</foreach>",
					")",
				"</if>",
			"</where>",
			"</script>"
    })
	List<LoginInfoEntity> selectEntityListAll(LoginInfoEntity loginInfoEntity);

	@Insert({
			"insert into mrs_login_info",
				"(",
					"`id`, ",
					"`user_name`, ",
					"`ip`, ",
					"`type`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`start_time`, ",
					"`end_time`",
				")",
			"values",
				"(",
					"#{id,jdbcType=INTEGER}, ",
					"#{userName,jdbcType=VARCHAR}, ",
					"#{ip,jdbcType=VARCHAR}, ",
					"#{type,jdbcType=INTEGER}, ",
					"#{createTime,jdbcType=TIMESTAMP}, ",
					"#{updateTime,jdbcType=TIMESTAMP}, ",
					"#{startTime,jdbcType=TIMESTAMP}, ",
					"#{endTime,jdbcType=TIMESTAMP}",
				")"
    })
    @Options(useGeneratedKeys=true,keyProperty="id")    int insertEntity(LoginInfoEntity loginInfoEntity);
	
	@Insert({
			"<script>",
			"insert into mrs_login_info",
				"(",
				"`id`, ",
				"`user_name`, ",
				"`ip`, ",
				"`type`, ",
				"`create_time`, ",
				"`update_time`, ",
				"`start_time`, ",
				"`end_time`",
				")",
			"values",
			"<foreach collection ='list' item='obj' separator =','>",
				"(",
					"#{obj.id,jdbcType=INTEGER}, ",
					"#{obj.userName,jdbcType=VARCHAR}, ",
					"#{obj.ip,jdbcType=VARCHAR}, ",
					"#{obj.type,jdbcType=INTEGER}, ",
					"#{obj.createTime,jdbcType=TIMESTAMP}, ",
					"#{obj.updateTime,jdbcType=TIMESTAMP}, ",
					"#{obj.startTime,jdbcType=TIMESTAMP}, ",
					"#{obj.endTime,jdbcType=TIMESTAMP}",
				")",
			"</foreach >",
			"</script>",
    })
    @Options(useGeneratedKeys=true,keyProperty="id")    int batchInsertEntity(@Param("list")List<LoginInfoEntity> loginInfoEntitys);
	
	@Update({
			"<script>",
			"update mrs_login_info",
				"<set>",
						"`user_name` = #{entity.userName}, ",
						"`ip` = #{entity.ip}, ",
						"`type` = #{entity.type}, ",
						"`create_time` = #{entity.createTime}, ",
						"`update_time` = #{entity.updateTime}, ",
						"`start_time` = #{entity.startTime}, ",
						"`end_time` = #{entity.endTime}",
				"</set>",
				"where id = #{entity.id} and version_optimized_lock=#{entity.versionOptimizedLock}",
			"</script>"
	})
	int updateEntity(@Param("entity")LoginInfoEntity loginInfoEntity);

	@Update({
			"<script>",
			"<foreach collection ='list' item='obj' separator =';'>",
				"update mrs_login_info",
					"<set>",
						"`user_name` = #{obj.userName}, ",
						"`ip` = #{obj.ip}, ",
						"`type` = #{obj.type}, ",
						"`create_time` = #{obj.createTime}, ",
						"`update_time` = #{obj.updateTime}, ",
						"`start_time` = #{obj.startTime}, ",
						"`end_time` = #{obj.endTime}",
					"</set>",
					"where id = #{obj.id} and version_optimized_lock=#{obj.versionOptimizedLock}",
			"</foreach >",
			"</script>"
	})
	int batchUpdateEntity(@Param("list")List<LoginInfoEntity> loginInfoEntitys);
	
	@Delete({
			"<script>",
				"delete from mrs_login_info",
				"<where>",
				"<if test='entity.userName != null  and entity.userName  != \"\" '> and `user_name` = #{entity.userName} </if>",
				"<if test='entity.ip != null  and entity.ip  != \"\" '> and `ip` = #{entity.ip} </if>",
				"<if test='entity.type != null  '> and `type` = #{entity.type} </if>",
				"<if test='entity.createTime != null  '> and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null  '> and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.startTime != null  '> and `start_time` = #{entity.startTime} </if>",
				"<if test='entity.endTime != null  '> and `end_time` = #{entity.endTime}</if>",
				"</where>",
				"and id = #{obj.id}",
			"</script>"
	})
	int deleteEntity(@Param("entity")LoginInfoEntity loginInfoEntity);
	
	@Delete({
		"<script>",
		"delete from mrs_login_info where id in",
		"<foreach collection ='list' item='obj' open='(' separator =',' close=')'>",
			"#{obj.id}",
		"</foreach >",
		"</script>"
	})
	int batchDeleteEntity(@Param("list")List<LoginInfoEntity> loginInfoEntitys);
}
