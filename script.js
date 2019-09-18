

$("#dropDown").change(function () {
    $(".trader").toggleClass("active");

})


const tradingname={
    validators: {
        notEmpty: {
            message: 'Trading name is required'
        },
    }
};

const howlonghaveyoubeentrading={
    validators: {
        notEmpty: {
            message: 'How long have you been trading is required'
        },

    }
};
const sector={
    validators: {
        notEmpty: {
            message: 'Sector is required'
        },

    }
};
const firstName={
    validators: {
        notEmpty: {
            message: 'First name is required'
        },

    }
};
const surName={
    validators: {
        notEmpty: {
            message: 'Surname is required'
        },

    }
};
const jobTitle={
    validators: {
        notEmpty: {
            message: 'Job title is required'
        },

    }
};
const telephone={
    validators: {
        numeric: {
            message: 'The value is not a number',
            // The default separators
            thousandsSeparator: ' ',
            decimalSeparator: '.'
        },
        notEmpty: {
            message: 'Telephone is required'
        },

    }
};
const email={
    validators: {
        notEmpty: {
            message: 'The email address is required'
        },
        emailAddress: {
            message: 'The input is not a valid email address'
        }
    }
};
const  confirmEmailInput= {
    validators: {
        notEmpty: {
            message: 'Confirm email is required'
        },
        emailAddress: {
            message: 'The input is not a valid email address'
        },

        identical: {
            field: 'email',
            message: 'This input should not be different from the email input'


        },
    }
};






soleIndex=0;
 $('#soleTraderValidator').wizard({
    onInit: function () {       
           

        $('#validation').formValidation({
            framework: 'bootstrap',
           /*  icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            }, */
            fields: {
              
               "company[0].tradingName":tradingname,             
               "company[0].howlonghaveyoubeentrading": howlonghaveyoubeentrading,
               "company[0].sector":sector,
                "firstName":firstName,
                "surName":surName,
                "jobTitle":jobTitle,
                "telephone":telephone,
                "email":email,
                "confirmEmailInput":confirmEmailInput     
            },

        
            

        });
    },
    

     validator: function () {
        var fv = $('#validation').data('formValidation');
        var $this = $(this);

        // Validate the container

        fv.validateContainer($this);
        var isValidStep = fv.isValidContainer($this);
        if (isValidStep === false || isValidStep === null) {
            return false;
        }
        return true;

    }, 
    buttonsAppendTo: 'this',
    templates: {
        buttons: function () {
            const options = this.options;
            return `<div class="wizard-buttons">
            <a class="wizard-back btn btn-danger btn-lg float-left" href="#${this.id}" data-wizard="back" role="button">Back</a>
            <a class="wizard-next btn btn-danger btn-lg float-right" href="#${this.id}" data-wizard="next" role="button">SAVE & NEXT >></a>
            <a class="wizard-finish btn btn-danger btn-lg float-right" href="#${this.id}" data-wizard="finish" role="button" id="finishButton">Apply for approval</a></div>`;
        },


    },
  
     
   
    onNext:function(){
      
    $(".progress.first").addClass("hide");
    $(".progress.second").removeClass("hide");
    },

    onStateChange: function (step, enter, state) {

        switch (state) {
            case 'error':
                if (enter) {
                    alert('Get a error on step ' + step.index);
                } else {
                    alert('Resolved the error');
                }
                break;
        }
    }, 
    onFinish: function () {
      
        $('#progresBarApply').html(`<div class="progress-bar progress-bar-danger"  role="progressbar" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100" style="width:100%; background-color: dimgray;">
        </div>`);
  

        $('#validation').submit();
       $("#secondDiv").show();
       $("#firstDiv").hide();
       $("#firstDivLeft").hide();
       $("#secondDivLeft").show();
       $(".topDiv").hide();
       $(".aplicationTop").removeClass("hide");
       $(".aplicationTopFirst").addClass("hide");
       $(".second").html(`<div class="progress-bar progressBarSecond" role="progressbar" style="width:100%;background-color:transparent" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div> </div>`)      
      
      

        alert('finish');
    }
})
.on('click', '.addButton', function() {
    soleIndex++;
    var $template = $('#addTemplate'),
        $clone    = $template
                        .clone()
                        .removeClass('hide')
                        .removeAttr('id')
                        .attr('data-company-index', soleIndex)
                        .insertBefore($template);

    // Update the name attributes
    $clone
        .find('[name="webSite"]').attr('name', 'company[' + soleIndex + '].webSite').end()
        .find('[name="howlonghaveyoubeentrading"]').attr('name', 'company[' + soleIndex + '].howlonghaveyoubeentrading').end()
        .find('[name="sector"]').attr('name', 'company[' + soleIndex + '].sector').end();

    // Add new fields
    // Note that we also pass the validator rules for new field as the third parameter
    $('#validation')
       
        .formValidation('addField', 'company[' + soleIndex + '].howlonghaveyoubeentrading', howlonghaveyoubeentrading)
        .formValidation('addField', 'company[' + soleIndex + '].sector', sector);
})

// Remove button click handler
.on('click', '.deleteButton', function() {
    var $row  = $(this).parents('.form-group'),
        index = $row.attr('data-company-index');

    // Remove fields
    $('#validation')
        .formValidation('removeField', $row.find('[name="company[' + index + '].howlonghaveyoubeentrading"]'))
        .formValidation('removeField', $row.find('[name="company[' + index + '].sector"]'))
 
    // Remove element containing the fields
    $row.remove();
});  
   


const registrationNumber={
        validators: {
            notEmpty: {
                message: 'Registration number is required'
            },
        }
    };
   
    const verificationLink={
        validators: {
            notEmpty: {
                message: 'Verification link is required'
            },

        }
    };

  $('#limitedCompanyValidator').wizard({
    onInit: function () {
 
        $('#validation2').formValidation({
            framework: 'bootstrap',
          /*   icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            }, */
            fields: {
                "registrationNumber":registrationNumber,               
                "verificationLink":verificationLink,
                "firstName":firstName,
                "surName":surName,
                "jobTitle":jobTitle,
                "telephone":telephone,
                "email":email,
                "confirmEmailInput":confirmEmailInput 
            },
        });
    },


   validator: function () {
        var fv = $('#validation2').data('formValidation');
        var $this = $(this);

        // Validate the container

        fv.validateContainer($this);
        var isValidStep = fv.isValidContainer($this);
        if (isValidStep === false || isValidStep === null) {
            return false;
        }
        return true;

    }, 
    buttonsAppendTo: 'this',
    templates: {
        buttons: function () {
            const options = this.options;
            return `<div class="wizard-buttons">
            <a class="wizard-back btn btn-danger btn-lg float-left" href="#${this.id}" data-wizard="back" role="button">Back</a>
            <a class="wizard-next btn btn-danger btn-lg float-right" href="#${this.id}" data-wizard="next" role="button">SAVE & NEXT >></a>
            <a class="wizard-finish btn btn-danger btn-lg float-right" href="#${this.id}" data-wizard="finish" role="button" id="finishButton">Apply for approval</a></div>`;
        },


    },
    onNext:function(){
     
  
        $(".progress.first").addClass("hide");
        $(".progress.second").removeClass("hide");
    },
    onStateChange: function (step, enter, state) {

        switch (state) {
            case 'error':
                if (enter) {
                    alert('Get a error on step ' + step.index);
                } else {
                    alert('Resolved the error');
                }
                break;
        }
    },
    onFinish: function () {
        $('#progresBarApply').html(`<div class="progress-bar"  role="progressbar" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100" style="width:100%;background-color: dimgray;">
        </div>`);

        $('#validation2').submit();

        alert('finish');
        $("#secondDiv").show();
        $("#firstDiv").hide();
        $("#firstDivLeft").hide();
        $("#secondDivLeft").show();
        $(".topDiv").hide(); 
        $(".aplicationTop").removeClass("hide");
        $(".aplicationTopFirst").addClass("hide");
        $(".second").html(`<div class="progress-bar progressBarSecond" role="progressbar" style="width:100%;background-color:transparent" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div> </div>`)      
       
    }
});


  