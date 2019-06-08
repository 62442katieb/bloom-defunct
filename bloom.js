export default {
  name: 'Bloom',
  props: {
  },
  data() {
    return {
      works: [],
      loading: true,
      orcid: '0000-0002-7796-8795',
    };
  },
  mounted() {
    this.getOrcid('0000-0002-7796-8795');
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
        console.log(data.group[0]['work-summary'])
        this.works = data.group;
        this.loading = false;
        //console.log(JSON.stringify(this.works));
        return this.works;
      });
    }
  },
};
