<template>
  <div class="hello">
    <div class="filter-section">
      <div class="filter-section__search">
        <v-text-field
            v-model="keyword"
            label="Search"
        />
      </div>
      <div class="filter-section__gender">
        <label>
          Gender
        </label>
        <select v-model="genderFilter">
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
      <v-btn
          depressed
          @click="resetFilter"
      >
        Reset Filter
      </v-btn>
    </div>
    <div class="content-section">
      <v-skeleton-loader
          v-if="showLoader"
          v-bind="attrs"
          type="image"
      />
      <v-simple-table
          v-else
          dark
          class="data-table"
      >
        <template v-slot:default>
          <thead>
          <tr>
            <th
              v-for="header in tableHeaders"
              :key="header.label"
              class="data-table__header"
              :class="{'pointer': header.sortable}"
              @click="sort(header)"
            >
              {{ header.label }}
              <v-icon
                  v-if="header.sortable"
                  small
              >
                {{ sortIcon(header) }}
              </v-icon>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in shownData"
              :key="item.name"
          >
            <td>{{ item.username }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ format(item.registeredDate) }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="pagination">
      <v-pagination
          v-model="page"
          :length="paginationLength"
          :total-visible="7"
      ></v-pagination>
    </div>
    <loader-mask v-if="showLoader" />
  </div>
</template>

<script src="./js/data-table-page.js"></script>

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
      position: absolute;
      right: 8px;
      top: 20px;
    }
  }
}
.content-section {
  /deep/ .v-skeleton-loader__image {
    height: 288px;
  }
  .data-table {
    &__header {
      i {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .pointer {
      cursor: pointer;
    }
  }
}
.pagination {
  margin-top: 20px;
  /deep/ .v-pagination__item--active {
    box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
  }
}
</style>
