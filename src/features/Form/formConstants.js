/**
 * Form panel constants.
 *
 * Key = linkId
 *    id = linkId
 *    title = Name of panel
 *    selectId = Select nav id in component
 *    panelId = Panel id in component
 */
export const Panels = {
  InitialPanel: {
    id: "76453-0",
    title: "Patient initial visit details",
    selectId: "select-76453-0",
    panelId: "panel-76453-0",
  },
  GlobalPhysicalFuncPanel: {
    id: "72989",
    title: "Global measure of physical function",
    selectId: "select-72989",
    panelId: "panel-72989",
  },
  ConditionPopulationPanel: {
    id: "72988",
    title: "Condition or population specific",
    selectId: "select-72988",
    panelId: "panel-72988",
  },
  SelfCareMobilityPanel: {
    id: "72990",
    title: "Self-care and mobility",
    selectId: "select-72990",
    panelId: "panel-72990",
  },
  PatientGoalsPanel: {
    id: "111748",
    title: "Patient goals",
    selectId: "select-111748",
    panelId: "panel-111748",
  },
  PlannedInterventionPanel: {
    id: "111728",
    title: "Planned intervention or services",
    selectId: "select-111728",
    panelId: "panel-111728",
  },
  InterventionServicesPanel: {
    id: "100794",
    title: "Intervention or services provided",
    selectId: "select-100794",
    panelId: "panel-100794",
  },
  BillingPanel: {
    id: "100804",
    title: "Billing info",
    selectId: "select-100804",
    panelId: "panel-100804",
  },
};

/**
 * Initial form values.
 *
 * [linkId]-[Text]
 *
 * We use linkId as per Fhir field linkIds.
 */
export const formInitialValues = {
  "75777-Patient-identifier": "lasdjflajskdf",
};
