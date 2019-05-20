const figura = document.querySelector("#figura");
//const figura = $("#figura"); JQuery

const form = document.querySelector("#form-figura");

figura.addEventListener('change',()=> {
    var html = '';
    switch(figura.value){
        case "2":break;
        case "1":break;
        case "3":break;
        case "4": html =`
                        <form action="" id="form-base-altura">
                        <div class="form-group">
                            <label for="base">Base</label>
                            <input type="number" class="form-control" id="base"  placeholder="0.0">
                        </div>
                        <div class="form-group">
                            <label for="altura">Altura</label>
                            <input type="number" class="form-control" id="altura" placeholder="0.0">
                        </div>
                        <button type="submit" class="btn btn-primary">Carcular</button>
                    </form>
                    `;break;
    }
    form.innerHTML = html;
});