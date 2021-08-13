function addProject(name, color, image, link, badges){
    $('.cards-list').append(`
        <a class="project_link" href="#" target="_blank" data-toggle="modal" data-target="#ModalCard">
            <div class="card-container 1">
                <div class="card_image"> <img src="${image}"/> </div>
                <div class="card_title title-white">
                    <p style="color: white;text-shadow: #000 0px 0px 2px,   #000 0px 0px 2px,   #000 0px 0px 2px,
                    #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px;">${name}</p>
                <div class="card-badges">
                    <h6>
                        ${badges.map(badge => `<span class="badge" style="background-color:${badge.Bgcolor}; color: ${badge.TextColor}"> ${badge.Tag} </span>`).join(" ")}
                    </h6>
                </div>
                </div>
            </div> 
        </a>
    `);
}

function addModal(name, colortext, link, image, description, version, badges){
    return `
        <div class="modal fade bd-example-modal-lg" id="ModalCard" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body" style="background: url(${image}); color: ${colortext}">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                       
                        <div class="project-info">
                            <div class="project-title row align-items-center">
                                <div class="col-md-8">  
                                    <h3 style="color: white">${name}</h3>
                                </div>
                                <div class="col-md-4">
                                    <a href="${link}" target="_blank">
                                        <button type="button" class="btn-custom"> <b> <i class="fab fa-discord"> </i> View in Github </b> </button>
                                    </a>
                                </div>
                            </div>

                            <div class="row project-desc">
                                <div class="col-md-8">
                                    <h5><b>Description:</b> </h5>
                                    ${description}
                                </div>
                                <div class="col-md-4">
                                    <div class="modal-tags">
                                        <h5><b>Tags</b></h5>
                                        ${badges.map(badge => `<span class="badge" style="background-color:${badge.Bgcolor}; color: ${badge.TextColor}"> ${badge.Tag} </span>`).join(" ")}
                                    </div>
                                    <br>
                                    <div class="modal-version">
                                        <h5><b>Version</b></h5>
                                        <p>${version}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

$(document).ready(function(){
    project_list.forEach((item) => {
        addProject(item.Name, item.ModalColor, item.Image, item.Link, item.Badges);
    });

    $('.project_link').click(function(){
        let index = $(this).index();
        let arr_index = project_list[index];
        $('.modal-card').html(addModal(arr_index.Name, arr_index.ModalColor, arr_index.Link, arr_index.Image, arr_index.Description, arr_index.Version, arr_index.Badges));
    })

});

// Meet the team section
var slideIndex = 0;
showDivs(slideIndex);

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("meet-card-container");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[n].style.display = "block"; 
}