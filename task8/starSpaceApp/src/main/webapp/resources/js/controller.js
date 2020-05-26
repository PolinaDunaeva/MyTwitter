let controller = (function () {
    return {      
        Delete(id) {
            console.log(id);
            let result = confirm("Вы уверены?");
            if (result === true) {
                View.deletePost(id); 
            }
        },
    }
}());