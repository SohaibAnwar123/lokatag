// Bootstrap Dropdown Selector Script 
if ($(".language-selector").length) {
    $(document).on("click", ".language-selector .dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            $(".language-selector .dropdown-menu .dropdown-item").removeClass("active");
            $(this).addClass("active");
            $(this)
                .parents(".language-selector")
                .find(".dropdown-toggle .selected-value")
                .html($(this).text());
        }
    });
}
if ($(".brand-selector").length) {
    $(document).on("click", ".brand-selector .dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            $(".brand-selector .dropdown-menu .dropdown-item").removeClass("active");
            $(this).addClass("active");
            $(this)
                .parents(".brand-selector")
                .find(".dropdown-toggle .selected-value")
                .html($(this).text());
        }
    });
}
if ($(".car-model-selector").length) {
    $(document).on("click", ".car-model-selector .dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            $(".car-model-selector .dropdown-menu .dropdown-item").removeClass("active");
            $(this).addClass("active");
            $(this)
                .parents(".car-model-selector")
                .find(".dropdown-toggle .selected-value")
                .html($(this).text());
        }
    });
}
if ($(".car-year-selector").length) {
    $(document).on("click", ".car-year-selector .dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            $(".car-year-selector .dropdown-menu .dropdown-item").removeClass("active");
            $(this).addClass("active");
            $(this)
                .parents(".car-year-selector")
                .find(".dropdown-toggle .selected-value")
                .html($(this).text());
        }
    });
}

// Installation steps script 
if(document.querySelector('.step-btn')){
    // Event listener for step buttons
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            let step = parseInt(this.dataset.step);
            updateUIForStep(step);
        });
    });

    // Event listener for the "Next" button
    document.querySelector('.next-step-btn').addEventListener('click', function(event) {
        event.preventDefault();
        let currentStep = getCurrentStep();
        let totalSteps = document.querySelectorAll('.step-btn').length;
        let nextStep = currentStep < totalSteps ? currentStep + 1 : currentStep;
        updateUIForStep(nextStep);
        if(currentStep == (totalSteps - 1)){
            $(this).html('Done')
        }
    });

    function getCurrentStep() {
        return parseInt(document.querySelector('.step-btn.activeStep').dataset.step);
    }

    function updateUIForStep(step) {
        updateStepButtons(step);
        updateStepContent(step);
    }

    function updateStepButtons(step) {
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('activeStep');
            if (parseInt(btn.dataset.step) === step) {
                btn.classList.add('activeStep');
            }
        });

        for (let i = 1; i <= step; i++) {
            document.querySelector(`.step-btn[data-step="${i}"]`).classList.add('active');
        }
    }

    function updateStepContent(step) {
        document.querySelectorAll('.step-content').forEach(content => {
            content.style.display = 'none';
        });
        let targetContent = document.querySelector(`.step-content.step-${step}`);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    }
    updateUIForStep(1);

}

