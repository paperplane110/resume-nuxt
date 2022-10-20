<template>
  <div>
    <br />
    <Text hero>Projects.</Text>
    <Card variant="flat" is-hoverable>
      <template #header>
        <div class="px-4 ">
          <Text h3>
            Data Manager
          </Text>
        </div>
      </template>
      <template #body>
        <div class="px-4">
          <Text>
            DM(Data Manager)是一个QA-Algorithm小组的数据集管理平台，旨在实现数据多维标签的管理。
            兼顾用户权限管理、数据备份、数据版本回滚等功能。
            同时还提供一套便于用户使用的Python SDK、CLI
          </Text>
        </div>
      </template>
      <template #footer>
        <div class="px-4 pb-4">
          <Text class="text-gray-500"><b>Tech Stack</b>: JavaScript, HTML, CSS, Python, Express, MongoDB, React,
            Airflow</Text>
        </div>
      </template>
    </Card>
  </div>
</template>