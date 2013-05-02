yearDays = 360;

calculations = {
	"preScf" : {
		"title" : "Pre SCF Financing Costs:",
		"formula" : "(Invoice Value/" + yearDays + ") * Net Days * Supplier Value of Capital %"
	},
	"postScf" : {
		"title" : "Post SCF Financing based on SCF Financing % APR:",
		"formula" : "(Invoice Value/" + yearDays + ") * Days Paid Early * SCF Financing %"
	},
	"costReduction" : {
		"title" : "Supply Chain Price Reduction Potential:",
		"formula" : "Pre SCF Financing Costs - Post SCF Financing based on SCF Financing % APR"
	},
	"improvement" : {
		"title" : "Percent Improvement:",
		"formula" : "(Supply Chain Price Reduction Potential/Pre SCF Financing Costs)*100 %"
	},
	"accountCash" : {
		"title" : "Cash in your account on XXXX date",
		"formula" : "Invoice Value - Post SCF Financing based on SCF Financing % APR"
	}
}