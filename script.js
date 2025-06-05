$(document).ready(function () {
    const conversionMap = {
        "km-m": {
            label1: "Kilometri",
            label2: "Metri",
            forward: (val) => val * 1000,
            reverse: (val) => val / 1000
        },
        "l-ml": {
            label1: "Litri",
            label2: "Mililitri",
            forward: (val) => val * 1000,
            reverse: (val) => val / 1000
        },
        "c-f": {
            label1: "Celsija grādi",
            label2: "Fārenheita grādi",
            forward: (val) => (val * 9 / 5) + 32,
            reverse: (val) => (val - 32) * 5 / 9
        },
        "h-min": {
            label1: "Stundas",
            label2: "Minūtes",
            forward: (val) => val * 60,
            reverse: (val) => val / 60
        },
        "hp-kw": {
            label1: "Zirga spēki (HP)",
            label2: "Kilovati (kW)",
            forward: (val) => val * 0.735499,
            reverse: (val) => val / 0.735499
        }
    };

    let currentType = "km-m";
    let reversed = false;

    function updateLabels() {
        const conv = conversionMap[currentType];
        if (!conv) return;

        if (reversed) {
            $("#main2").text(conv.label2);
            $("#main1").text(conv.label1);
        } else {
            $("#main2").text(conv.label1);
            $("#main1").text(conv.label2);
        }

        $("#Kilometri").val('');
        $("#Metri").val('');
        $("#info").text('');
    }

    function convert() {
        const conv = conversionMap[currentType];
        const inputVal = parseFloat($("#Kilometri").val());

        if (isNaN(inputVal)) {
            $("#info").text("Lūdzu, ievadiet derīgu skaitli.");
            return;
        }

        const result = reversed ? conv.reverse(inputVal) : conv.forward(inputVal);
        $("#Metri").val(result);
    }

    $(".editbtn").click(function () {
        currentType = $(this).data("type");
        updateLabels();
    });

    $("#pirmapoga").click(function () {
        convert();
    });

    $("#on").change(function () {
        reversed = this.checked;
        updateLabels();
    });

    // Initialize default
    $(".editbtn[data-type='km-m']").click();
});

function triggerButton(type) {
    document.querySelector(`button[data-type="${type}"]`).click();
  }