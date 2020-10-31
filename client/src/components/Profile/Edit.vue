<template>
    <transition name="fade">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

            <button type="button" class="close modal-default-button" @click="$emit('close')" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="mr-0">
                <div class="container d-flex justify-content-center mt-4">
                    <h2>EDIT PROFILE</h2>
                </div>

                <div class="container mt-4 text-center">
                    <img  class="img-thumbnail rounded-circle" src="https://www.hungertv.com/wp-content/uploads/2017/02/099200-R1-11.jpg">
                </div>

                
            </div>

                <div class="modal-body d-flex justify-content-center" v-if="userFound">
                    <form class="p-0 w-100 " @submit.prevent>
                        <div class="row w-100">
                            <div class="col-12 col-md-6 input-group text-w-100 mb-4">
                                    <input type="email" required v-model="userData.email" disabled>
                                    <span class="bar"></span>
                                    <label style="top: -22px;font-size: 15px;color: black;" class="pl-4">Email</label>
                            </div>
                            <div class="col-12 col-md-6 input-group text-w-100 mb-4">
                                    <input type="text" required v-model="userData.name" disabled>
                                    <span class="bar"></span>
                                    <label style="top: -22px;font-size: 15px;color: black;" class="pl-4">Name</label>
                            </div>

                            <div class="col-12 input-group w-100 mb-4">
                                    <input type="text bg-white" required v-model="userData.phone">
                                    <span class="bar"></span>
                                    <label class="pl-4">Phone Number</label>
                            </div>

                        </div>
                        <div v-for="(addr,index) in userData.address" :key="index">
                            <h3>Address {{ index+1}}</h3>
                            <hr> <br>
                            <div class="row w-100 d-flex justify-content-around">
                                <div class="col-12 col-md-6 input-group d-flex justify-content-center text-w-100 mb-4">
                                        <input type="text" class="bg-white" required v-model="addr.location">
                                        <span class="bar"></span>
                                        <label class="pl-4">LOCATION</label>
                                </div>
                                <div class="col-12 col-md-6 input-group d-flex justify-content-center text-w-100 mb-4">
                                        <input type="text" class="bg-white" required v-model="addr.city">
                                        <span class="bar"></span>
                                        <label class="pl-4">City</label>
                                </div>
                                <div class="col-12 col-md-6 input-group d-flex justify-content-center text-w-100 mb-4">
                                        <input type="text" class="bg-white" required v-model="addr.state">
                                        <span class="bar"></span>
                                        <label class="pl-4">State</label>
                                </div>
                                <div class="col-12 col-md-6 input-group d-flex justify-content-center text-w-100 mb-4">
                                        <input type="text" class="bg-white" required v-model="addr.pincode">
                                        <span class="bar"></span>
                                        <label class="pl-4">PINCODE</label>
                                </div>
                            </div>
                             <div class="w-100">
                                <button class="btn btn-danger" @click.prevent="removeAddress(index)"><i class="fas fa-trash"></i></button>
                            </div>
                            <br><br>
                        </div>
                        <div class="w-100">
                            <button class="btn btn-primary" @click.prevent="addAddress()"> Add <i class="fas fa-plus"></i></button>
                        </div>


                        <div class="input-group d-flex justify-content-center w-100 mt-4 mb-2 text-center">
                            <button class="btn w-100 py-2" id="loginSubmit" @click="save()">SAVE</button>
                        </div>
                
                    </form>
                </div>
                <div class="modal-body d-flex justify-content-center" v-else>
                    <h1>ERROR 404:User Not Found</h1>
                </div>
            </div>
          </div>
        </div>
    </transition>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            userData : {},
            userFound: true,
            userToken : null,
        }
  },
    methods:{

        ...mapMutations(['setData']),
        

        close(){
            this.$emit('close');
        },
        save(){
            let newData = {
                    phone: this.phone,
                    address: this.address1,
                    state: this.state,
                    city: this.city,
                    pincode: this.pincode
                }
            this.$http.post(`${this.$api}user/data/edit`, newData, {headers:{_id:this.userData.id}})
                .then(res =>{
                    if(res.status == 200){
                        console.log('Details Updated');
                        this.close();
                    }
                    else{
                        console.log('Could not update')
                        this.close();
                    }
                })
                .catch(err => {
                    console.log('Something went Wrong')
                    console.log(err)
                    this.close();
                })
        },
        addAddress(){
            this.userData.address.push({
                        location: '',
                        city: '',
                        state: '',
                        pincode: ''
                    });
        },
        removeAddress(index){
            this.userData.address.splice(index,1)
            if(this.userData.address.length <= 0){
              this.userData.address.push({
                        location: '',
                        city: '',
                        state: '',
                        pincode: ''
                });   
            }
        },
        

    },
    computed:{
        ...mapGetters(['sendToken']),
    },
    created(){
        this.userToken = this.sendToken ? this.sendToken : null
        console.log(this.userToken);
        if(this.userToken){
            this.$http.get(`${this.$api}user/data`,{headers: {token: this.userToken}})
                    .then(resp=>{
                        
                        if(resp.data.user == null || resp.data.user == {}){
                            this.userFound = false
                        }
                        else{
                            this.userData = resp.data.user
                            this.userData.address.push({
                                location: '',
                                city: '',
                                state: '',
                                pincode: ''
                            })
                        }

                    })
                    .catch(err=>{
                        console.log(err);
                        console.log('User not Found');
                    })

        }
    }
}
</script>

<style scoped>
    .img-thumbnail{
        width:100px;
        height:100px;
    }

    .input-group {
        position: relative;
        margin: 0 auto;
        width:46%;
        float:left;
        /* margin:0 2%; */

    }

    input {
        font-size: 18px;
        padding: 10px 10px 10px 10px;
        display: block;
        width: 300px;
        border: none;
        /* border-radius: 10%; */
        width: 100%;
    }

    input:focus {
        outline: none;
    }

    label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    width:77%;
    padding-left:5px; 
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    }

    input:focus ~ label,
    input:valid ~ label{
        top: -22px;
        font-size: 15px;
        color: black;
    }

    .bar {
        position: relative;
        display:block;
        width:100%;
        background:black;
        height:2px;
        border-radius: 10px;
        transform: scaleX(0);
        transition: all 0.3s ease;
    }


    input:focus ~ .bar{
        transform: scaleX(1);
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.5s ease-out;
    }

    .modal-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        padding: 0;
    }

    .modal-container {
        width: 80%;
        height: 90vh;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #f2f2f2;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.5s ease-out;
        max-width: 70vw;
        /* max-height: 600px; */
        overflow: scroll;
    }
    .modal-container::-webkit-scrollbar {
    width: 5px;
    background-color: #f2f2f2;
} 
    .modal-container::-webkit-scrollbar-thumb{
    background: black;
    border-radius: 100px;
    margin-right: 1px;
    }


    .modal-header {
        margin-top: 20px;
        border-bottom: 1px solid black;
    }

    .modal-body {
        margin:40px 10px;
        margin-bottom:20px

    }

    .modal-footer {
        border-top: 1px solid black;
    }



    .btn {
        border: 1px solid black;
        border-radius: 0;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: white;
    }
    .btn:hover{

        background-position: 100% 100%;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: black;

    }

    @keyframes slide-in {
        from {
            background-position: 50% 100%;
        }

        to {
            background-position: 0% 100%;
        }

    }


    
    .modal-default-button {
        float: right;
    }


    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }




</style>