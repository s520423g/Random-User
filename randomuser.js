// API: https://randomuser.me/api/?results=6
// 圖片清晰度: 清晰、中等、模糊
// Address: city + state + country + postcode

const { createApp } = Vue;

createApp({

    //放變數的地方
    data() {
        return {
            myData: {},
            users: [],
            imgType: 'large',
            // loveZone: false,
        };
    },

    mounted() {
        this.fetchData();
    },

    //放函式的地方
    methods: {
        fetchData() {
            fetch('https://randomuser.me/api/?results=6')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    // console.log(this.imgType);
                    
                    this.myData = data;
                    this.users = this.myData.results;
                    //物件新增 ex-> obj.name = 1;
                    // this.users.forEach(item =>{
                    //     item.loveZone = false;
                    // })
                })
        },

        changeImg(){
            if (this.imgType === 'large'){
                this.imgType = 'medium';
            } else if(this.imgType === 'medium'){
                this.imgType = 'thumbnail';
            }else{
                this.imgType = 'large';
            }
        }
    },
}).mount('#app');
