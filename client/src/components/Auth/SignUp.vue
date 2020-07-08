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
                    <h2>SIGN UP</h2>
                </div>
                
            </div>

            <div class="modal-body d-flex justify-content-center">
                <form class="p-0 w-100 ">
                    <div class="input-group d-flex justify-content-center text-w-100 mb-4 bg-white">
                        <input type="text" name="email" class="input-group-text bg-transparent w-100 py-2" placeholder="Email">
                    </div>
      
                    <div class="input-group d-flex justify-content-center w-100 my-4 bg-white">
                        <input type="password" name ="newPassword" class="input-group-text bg-transparent w-100 py-2" placeholder="Add New Password">
                    </div>

                    <div class="input-group d-flex justify-content-center w-100 my-4 bg-white">
                        <input type="password" name ="confirmPassword" class="input-group-text bg-transparent w-100 py-2" placeholder="Confirm Password">
                    </div>

                    <div class="input-group d-flex justify-content-center w-100 mt-4 mb-2 bg-white text-center">
                        <button class="btn w-100 py-2">SUBMIT</button>
                    </div>
            
                </form>
            </div>

            <div class="modal-footer">
                <div class="container-fluid text-center">
                    <span class="text-secondary "> Have an Account? <a href= "#" class="text-dark" @click="$emit('change','login')">Login</a></span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {

    mounted(){
        setTimeout(() =>{
            document.getElementById(".btn").style.animation = "slide-out 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);";
        },1000)
    },  

    methods:{
        close(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
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
        display: table-cell;
        vertical-align: middle;
        padding: 0;
    }

    .modal-container {
        width: 80%;
        height: 80vh;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.5s ease-out;
        max-width: 450px;
        max-height: 600px;
    }

    .modal-header {
        margin-top: 20px;
        border-bottom: 1px solid black;
    }

    .modal-body {
        margin:40px 10px;

    }

    .modal-footer {
        border-top: 1px solid black;
    }

    .input-group , .input-group-text{
        text-align: start;
        border-radius: 0;
        vertical-align: middle;
    }
    .input-group:focus , .input-group-text:focus{
        outline: none;
        border: 1px solid black;
    }

     .btn {
        border: 1px solid black;
        border-radius: 0;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 33.33%, rgba(255,255,255,0) 33.33%, rgba(255,255,255,0) 66.66%, rgba(0,0,0,1) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;
        transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: black;
        
    }
    .btn:hover{

        background-position: 100% 100%;
        animation: slide-in 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: white;

    }

    @keyframes slide-in {
        from {
            background-position: 50% 100%;
        }

        to {
            background-position: 0% 100%;
        }

    }
    @keyframes slide-out {
        from {
            background-position: 100% 100%;
        }

        to {
            background-position: 50% 100%;
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