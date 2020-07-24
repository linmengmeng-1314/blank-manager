package com.csi.modules.testCase.dao;

import com.csi.modules.testCase.entity.TestCaseEntity;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Options;

import java.util.List;

/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
@Mapper
public interface TestCaseDao {

		@Select({
			"<script>",
			"select",
					"`id`, ",
					"`table_name`, ",
					"`comment`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`version_optimized_lock`",
			"from",
				"test_generated F",
			"<where>",
				"<if test='entity.id != null '>and `id` = #{entity.id} </if>",
				"<if test='entity.tableName != null and entity.tableName != \"\" '>AND `table_name` = #{entity.tableName} </if>",
				"<if test='entity.comment != null and entity.comment != \"\" '>AND `comment` = #{entity.comment} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.versionOptimizedLock != null '>and `version_optimized_lock` = #{entity.versionOptimizedLock}</if>",
			"</where>",
			"limit #{startRow},#{endRow}  ",
			"</script>"
    })
	List<TestCaseEntity> selectEntityListForPage(@Param("entity")TestCaseEntity testCaseEntity,@Param("startRow")Long startRow,@Param("endRow")Long endRow);
	
	@Select({
			"<script>",
			"select",
			        "count(1) ",
			"from",
				"test_generated F",
			"<where>",
				"<if test='entity.id != null '>and `id` = #{entity.id} </if>",
				"<if test='entity.tableName != null and entity.tableName != \"\" '>AND `table_name` = #{entity.tableName} </if>",
				"<if test='entity.comment != null and entity.comment != \"\" '>AND `comment` = #{entity.comment} </if>",
				"<if test='entity.createTime != null '>and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null '>and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.versionOptimizedLock != null '>and `version_optimized_lock` = #{entity.versionOptimizedLock}</if>",
			"</where>",
			"</script>"
    })
	Long selectEntityListForPageCount(@Param("entity")TestCaseEntity testCaseEntity);
	
	@Select({
			"<script>",
			"select",
					"`id`, ",
					"`table_name`, ",
					"`comment`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`version_optimized_lock`",
			"from",
				"test_generated",
			"<where>",
				"<if test='id != null '>and `id` = #{id} </if>",
				"<if test='tableName != null and tableName != \"\" '>AND `table_name` = #{tableName} </if>",
				"<if test='comment != null and comment != \"\" '>AND `comment` = #{comment} </if>",
				"<if test='createTime != null '>and `create_time` = #{createTime} </if>",
				"<if test='updateTime != null '>and `update_time` = #{updateTime} </if>",
				"<if test='versionOptimizedLock != null '>and `version_optimized_lock` = #{versionOptimizedLock}</if>",
			"</where>",
			"</script>"
    })
	List<TestCaseEntity> selectEntityListAll(TestCaseEntity testCaseEntity);

	@Insert({
			"insert into test_generated",
				"(",
					"`id`, ",
					"`table_name`, ",
					"`comment`, ",
					"`create_time`, ",
					"`update_time`, ",
					"`version_optimized_lock`",
				")",
			"values",
				"(",
					"#{id,jdbcType=BIGINT}, ",
					"#{tableName,jdbcType=VARCHAR}, ",
					"#{comment,jdbcType=VARCHAR}, ",
					"#{createTime,jdbcType=TIMESTAMP}, ",
					"#{updateTime,jdbcType=TIMESTAMP}, ",
					"1",
				")"
    })
    @Options(useGeneratedKeys=true,keyProperty="id")    int insertEntity(TestCaseEntity testCaseEntity);
	
	@Insert({
			"<script>",
			"insert into test_generated",
				"(",
				"`id`, ",
				"`table_name`, ",
				"`comment`, ",
				"`create_time`, ",
				"`update_time`, ",
				"`version_optimized_lock`",
				")",
			"values",
			"<foreach collection ='list' item='obj' separator =','>",
				"(",
					"#{obj.id,jdbcType=BIGINT}, ",
					"#{obj.tableName,jdbcType=VARCHAR}, ",
					"#{obj.comment,jdbcType=VARCHAR}, ",
					"#{obj.createTime,jdbcType=DATE}, ",
					"#{obj.updateTime,jdbcType=DATE}, ",
					"1",
				")",
			"</foreach >",
			"</script>",
    })
    @Options(useGeneratedKeys=true,keyProperty="id")    int batchInsertEntity(@Param("list")List<TestCaseEntity> testCaseEntitys);
	
	@Update({
			"<script>",
			"update test_generated",
				"<set>",
						"`table_name` = #{entity.tableName}, ",
						"`comment` = #{entity.comment}, ",
						"`create_time` = #{entity.createTime}, ",
						"`update_time` = #{entity.updateTime}, ",
						"`version_optimized_lock` = version_optimized_lock+1",
				"</set>",
				"where id = #{entity.id} and version_optimized_lock=#{entity.versionOptimizedLock}",
			"</script>"
	})
	int updateEntity(@Param("entity")TestCaseEntity testCaseEntity);

	@Update({
			"<script>",
			"<foreach collection ='list' item='obj' separator =';'>",
				"update test_generated",
					"<set>",
						"`table_name` = #{obj.tableName}, ",
						"`comment` = #{obj.comment}, ",
						"`create_time` = #{obj.createTime}, ",
						"`update_time` = #{obj.updateTime}, ",
						"`version_optimized_lock` = version_optimized_lock+1",
					"</set>",
					"where id = #{obj.id} and version_optimized_lock=#{obj.versionOptimizedLock}",
			"</foreach >",
			"</script>"
	})
	int batchUpdateEntity(@Param("list")List<TestCaseEntity> testCaseEntitys);
	
	@Delete({
			"<script>",
				"delete from test_generated",
				"<where>",
				"<if test='entity.tableName != null  and entity.tableName  != \"\" '> and `table_name` = #{entity.tableName} </if>",
				"<if test='entity.comment != null  and entity.comment  != \"\" '> and `comment` = #{entity.comment} </if>",
				"<if test='entity.createTime != null  '> and `create_time` = #{entity.createTime} </if>",
				"<if test='entity.updateTime != null  '> and `update_time` = #{entity.updateTime} </if>",
				"<if test='entity.versionOptimizedLock != null  '> and `version_optimized_lock` = #{entity.versionOptimizedLock}</if>",
				"</where>",
				"and id = #{entity.id}",
			"</script>"
	})
	int deleteEntity(@Param("entity")TestCaseEntity testCaseEntity);
	
	@Delete({
		"<script>",
		"delete from test_generated ",
		"where id in",
		"<foreach collection ='list' item='obj' open='(' separator=',' close=')'>",
			" #{obj.id}",
		"</foreach >",
		"</script>"
	})
	int batchDeleteEntity(@Param("list")List<TestCaseEntity> testCaseEntitys);
}
