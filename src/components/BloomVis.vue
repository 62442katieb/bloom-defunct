<template>
  <div class="hello">
    <b-tabs vertical card pills content-class="mt-3">
      <b-tab title="Publications" active>
        <ul>
          <div v-if="loading" class="align-items-center">
            <b-spinner type="grow" variant="info"></b-spinner>
          </div>
          <div v-else>
            <b-list-group>
              <b-list-group-item v-for="work in works" class="flex-column align-items-start">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-1">{{ work['work-summary'][0]['title']['title']['value'] }}</p>
                  <small>{{ work['work-summary'][0]['publication-date']['year']['value'] }}</small>
                </div>
                <p v-if="work['work-summary'][0]['journal-title']" class="mb-1">
                  <small>{{ work['work-summary'][0]['journal-title']['value'] }}</small>
                </p>
                <p v-else class="mb-1">
                  <small>Preprint</small>
                </p>
              </b-list-group-item>

              </b-list-group-item>
            </b-list-group>
          </div>
        </ul>
      </b-tab>
      <b-tab title="Code Repositories">
        <ul>
          <div v-if="loading2" class="align-items-center">
            <b-spinner type="grow" variant="info"></b-spinner>
          </div>
          <div v-else>
            <b-list-group>
              <b-list-group-item v-for="repo in repos" class="flex-column align-items-start">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-1">{{ repo['name'] }}</p>
                  <small>{{ repo['forks_count'] }}</small>
                </div>
                <p class="mb-1">
                  <small>{{ repo['language'] }}</small>
                </p>
              </b-list-group-item>

              </b-list-group-item>
            </b-list-group>
          </div>
        </ul>
      </b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>

  </div>
</template>

<script>
//import axios from 'axios';
//import xml2js from 'xml-js';
export default {
  name: 'Bloom',
  props: {
  },
  data() {
    return {
      works: [],
      repos: [],
      loading: true,
      loading2: true,
      orcid: '0000-0002-7796-8795',
    };
  },
  mounted() {
    this.getOrcid('0000-0002-7796-8795');
    this.getRepos('62442katieb');
  },
  methods: {
    getOrcid(orcid) {
      const options = {
          method: 'GET',
          headers: new Headers({'accept': 'application/json'})
      };
      fetch(`https://pub.orcid.org/v3.0/${orcid}/works`, options)
      .then((resp) => resp.json())
      .then(data => {
        //console.log(data);
        //console.log(data.group[0]['work-summary'])
        this.works = data.group;
        this.loading = false;
        //console.log(JSON.stringify(this.works));
        return this.works;
      });
    },
    getRepos(ghusername) {
      const options = {
          method: 'GET',
          headers: new Headers({'accept': 'application/json'})
      };
      fetch(`https://api.github.com/users/${ghusername}/repos`, options)
      .then((resp) => resp.json())
      .then(data => {
        //console.log(data);
        console.log(data[0])
        this.repos = data;
        this.loading2 = false;
        console.log(JSON.stringify(this.repos));
        return this.repos;
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 40px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
}
journal-title {
  align-self: auto;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
}
a {
  color: #42b983;
}
p {
  text-align: left;
}
</style>
