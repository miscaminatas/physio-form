import * as Yup from "yup";
/* Varaible for the dropdown inputs of the form */

/* Validation Schema for the form */
const validationSchema = Yup.object().shape({
  "79530-2": Yup.string().min(2, "Too Short!").required("Required"),
  "79531-0": Yup.string().required(),
  "79532-8": Yup.string().required(),
  "79533-6": Yup.string().required(),
  "79534-4": Yup.string().required(),
  "79535-1": Yup.string().required(),
  "79536-9": Yup.string().required(),
  "79537-7": Yup.string().required(),
  "79421-4": Yup.string().required(),
  "79422-2": Yup.string().required(),
  "77866-2": Yup.string().required(),
  "77874-6": Yup.string().required(),
  "91721-1": Yup.string().required(),
  "77580-9": Yup.string().required(),
  "92391-2": Yup.string().required(),
  "92448-0": Yup.string().required(),
  "91612-2": Yup.string().required(),
  "77578-3": Yup.string().required(),
  "90705-5": Yup.string().required(),
  "90884-8": Yup.string().required(),
  "77579-1": Yup.string().required(),
  "76435-7": Yup.string().required(),
  "76698-0": Yup.string().required(),
  "76471-2": Yup.string().required(),
  "76470-4": Yup.string().required(),
  "76696-4": Yup.string().required(),
  "76423-3": Yup.string().required(),
  "76417-5": Yup.string().required(),
  "76419-1": Yup.string().required(),
  "86637-6": Yup.string().required(),
  "18630-4": Yup.string().required(),
  "89177-0": Yup.string().required(),
  "76442-3": Yup.string().required(),
  "76472-0": Yup.string().required(),
  "76444-9": Yup.string().required(),
  "76445-6": Yup.string().required(),
  "76446-4": Yup.string().required(),
  "89189-5": Yup.string().required(),
  "89188-7": Yup.string().required(),
  "57828-6": Yup.string().required(),
  "92725-1": Yup.string().required(),
  "52642-6": Yup.string().required(),
  "52644-2": Yup.string().required(),
  "52645-9": Yup.string().required(),
  "52662-4": Yup.string().required(),
  "52646-7": Yup.string().required(),
  "52647-5": Yup.string().required(),
  "52663-2": Yup.string().required(),
  "52664-0": Yup.string().required(),
  "52648-3": Yup.string().required(),
  "52650-9": Yup.string().required(),
  "52651-7": Yup.string().required(),
  "52672-3": Yup.string().required(),
  "52656-6": Yup.string().required(),
  "52668-1": Yup.string().required(),
  "52654-1": Yup.string().required(),
  "52653-3": Yup.string().required(),
  "52660-8": Yup.string().required(),
  "52659-0": Yup.string().required(),
  "52658-2": Yup.string().required(),
  "52657-4": Yup.string().required(),
  "52671-5": Yup.string().required(),
  "52667-3": Yup.string().required(),
  "52670-7": Yup.string().required(),
  "52669-9": Yup.string().required(),
  "52665-7": Yup.string().required(),
  "92710-3": Yup.string().required(),
  "92709-5": Yup.string().required(),
  "92708-7": Yup.string().required(),
  "92705-3": Yup.string().required(),
  "92823-4": Yup.string().required(),
  "92704-6": Yup.string().required(),
  "92557-8": Yup.string().required(),
  "92553-7": Yup.string().required(),
  "92554-5": Yup.string().required(),
  "92555-2": Yup.string().required(),
  "92556-0": Yup.string().required(),
  "92558-6": Yup.string().required(),
  "92559-4": Yup.string().required(),
  "92560-2": Yup.string().required(),
  "92565-1": Yup.string().required(),
  "92706-1": Yup.string().required(),
  "45952-9": Yup.string().required(),
  "52829-9": Yup.string().required(),
  "86255-7": Yup.string().required(),
  "81885-6": Yup.string().required(),
  "89266-1": Yup.string().required(),
  "76430-8": Yup.string().required(),
  "89265-3": Yup.string().required(),
  "89178-8": Yup.string().required(),
  "76428-2": Yup.string().required(),
});
export default validationSchema;
