<template>
  <div class="common-layout">
    <el-container>
      <el-header class="gameSelection">
        <div>
          <span>请选择要查询的游戏</span>
        </div>
      </el-header>

      <div class="gameList whiteCard">
        <div class="gameCard">
          <img src="../../public/Genshin.jpg" alt="原神" class="gameImage"/>
          <span class="gameName">原神</span>
        </div>

        <div class="gameCard">
          <img src="../../public/Honkai_Impact_3.png" alt="崩坏3" class="gameImage"/>
          <span class="gameName">崩坏3</span>
        </div>

        <div class="gameCard" style="width: 120px;">
          <img src="../../public/StarRail.png" alt="崩坏：星穹铁道" class="gameImage"/>
          <span class="gameName">崩坏：星穹铁道</span>
        </div>

        <div class="gameCard">
          <img src="../../public/Zenless_Zone_Zero.png" alt="绝区零" class="gameImage"/>
          <span class="gameName">绝区零</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.gameSelection {
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.gameList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.gameCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  padding: 8px;
  width: 110px; /* 根据需要调整宽度 */
  border: 1px solid #ccc; /* 添加边框 */
  margin: 0 10px;
}

.gameImage {
  width: 100px;
  border-radius: 15px;
}

.gameName {
  margin-top: 10px;
}

</style>