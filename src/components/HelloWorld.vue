<template>
  <div class="hello">
    <div class="filter-section">
      <div class="filter-section__search">
        <v-text-field
            label="Search"
        />
      </div>
      <div class="filter-section__gender">
        <label>
          Gender
        </label>
        <select>
          <option
              v-for="gender in labels"
              :key="gender"
              :value="gender">
            {{ gender }}
          </option>
        </select>
        <v-icon small>
          mdi-chevron-down
        </v-icon>
      </div>

    </div>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Username
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Gender
            </th>
            <th class="text-left">
              Registered Date
            </th>
          </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in tableData"
            :key="item.name"
        >
          <td>{{ item.username }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.registeredDate }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script src="./js/hello-world.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter-section {
  display: flex;
  gap: 10px;
  align-items: center;
  &__search {
    max-width: 300px;
  }
  &__gender {
    position: relative;
    height: 50px;
    label {
      position: absolute;
      color: rgba(0,0,0,.6);
      font-size: 12px;
      left: 5px;
    }
    select {
      margin-top: 18px;
      max-height: 32px;
      width: 100px;
    }
    i {
      margin-left: -15px;
    }
  }
}
</style>
