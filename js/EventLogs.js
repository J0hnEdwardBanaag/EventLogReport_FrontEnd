

// Generate sample data for Event Log table
function generateSampleData() {
  const sampleData = [];

  for (let i = 1; i <= 25; i++) {
    sampleData.push({
      Id: i,
      MachineId: i,
      MachineName: `Machine ${i}`,
      ShiftName: `Shift ${i}`,
      MachineCenter: `Center ${i}`,
      Event: `Event ${i}`,
      EventDate: `2023-12-${i}`, // Sample date; replace it with an actual date
      EventStartTime: `12:00:00`, // Sample time; replace it with an actual time
      EventEndTime: `13:00:00`, // Sample time; replace it with an actual time
      EventTotalSeconds: i * 10,
      EventTotalMinutes: i * 1.5,
      ExpectedParts: i * 2,
      ActualParts: i * 1.2,
      RejectedParts: i * 0.5,
      Efficiency: i * 0.8,
      WorkOrder: `Order ${i}`,
      WorkOrderQty: `Qty ${i}`,
      SensorCount: i * 5,
      NestPerCycle: i * 3,
      LayersPerNest: i * 2,
      PartsPerLayer: i * 1,
      Operator: `Operator ${i}`,
      Technician: `Technician ${i}`,
      MachineReasonCode: `Reason ${i}`,
      ToolSerialCode: `Serial ${i}`
    });
  }

  return sampleData;
}

// Generate Event Log Data Table
function generateEventLogTable() {


  debugger;

  const table = $("#EventLog").DataTable({
    "processing": true,
    "serverSide": false,
    "filter": true,
    "fixedHeader": true,
    "orderMulti": false, // for disable multiple column at once    
    "lengthMenu": [[10, 25, 50, 100, 1000], [10, 25, 50, 100, 1000]],
    // "ajax": {
    //   "url": "http://localhost:3000",
    //   "type": "GET",
    //   "datatype": "json",
    //   "dataSrc": function (data) {
    //     // Log the data received from the server before processing
    //     //console.log("Data received from server:", data);

    //     // Return the data to DataTables for processing
    //     return data;
    //   },
    // },
    "columnDefs": [{
      "targets": 0,
      "orderable": false,
      "className": 'text-center'
    }],
    "columnDefs": [
      {
        "className": 'text-nowrap',
        targets: '_all' // Apply to all columns
      }
    ],
    "columns": [
      { "data": "Id", "name": "Id", "defaultContent": "", "autoWidth": true },
      { "data": "MachineId", "name": "MachineId", "defaultContent": "", "autoWidth": true },
      { "data": "MachineName", "name": "MachineName", "defaultContent": "", "autoWidth": true },
      { "data": "ShiftName", "name": "ShiftName", "defaultContent": "", "autoWidth": true },
      { "data": "MachineCenter", "name": "MachineCenter", "defaultContent": "", "autoWidth": true },
      { "data": "Event", "name": "Event", "defaultContent": "", "autoWidth": true },
      { "data": "EventDate", "name": "EventDate", "defaultContent": "", "autoWidth": true },
      {
        "data": "EventStartTime", "name": "EventStartTime", "defaultContent": "", "autoWidth": true,
        "render": function (data, type, row, meta) {
          var dateTimeParts = data.split(' '); // Split the datetime string by space
          if (dateTimeParts.length > 1) {
            var time = dateTimeParts[1].substring(0, 8); // Extracts HH:mm from the datetime string
            return time;
          }
          return data;
        }
      },
      {
        "data": "EventEndTime", "name": "EventEndTime", "defaultContent": "", "autoWidth": true,
        "render": function (data, type, row, meta) {
          var dateTimeParts = data.split(' '); // Split the datetime string by space
          if (dateTimeParts.length > 1) {
            var time = dateTimeParts[1].substring(0, 8); // Extracts HH:mm from the datetime string
            return time;
          }
          return data;
        }
      },
      { "data": "EventTotalSeconds", "name": "EventTotalSeconds", "defaultContent": "", "autoWidth": true },
      { "data": "EventTotalMinutes", "name": "EventTotalMinutes", "defaultContent": "", "autoWidth": true },
      { "data": "ExpectedParts", "name": "ExpectedParts", "defaultContent": "", "autoWidth": true },
      { "data": "ActualParts", "name": "ActualParts", "defaultContent": "", "autoWidth": true },
      { "data": "RejectedParts", "name": "RejectedParts", "defaultContent": "", "autoWidth": true },
      { "data": "Efficiency", "name": "Efficiency", "defaultContent": "", "autoWidth": true },
      { "data": "WorkOrder", "name": "WorkOrder", "defaultContent": "", "autoWidth": true },
      { "data": "WorkOrderQty", "name": "WorkOrderQty", "defaultContent": "", "autoWidth": true },
      { "data": "SensorCount", "name": "SensorCount", "defaultContent": "", "autoWidth": true },
      { "data": "NestPerCycle", "name": "NestPerCycle", "defaultContent": "", "autoWidth": true },
      { "data": "LayersPerNest", "name": "LayersPerNest", "defaultContent": "", "autoWidth": true },
      { "data": "PartsPerLayer", "name": "PartsPerLayer", "defaultContent": "", "autoWidth": true },
      { "data": "StandardPPM", "name": "StandardPPM", "defaultContent": "", "autoWidth": true },
      { "data": "Operator", "name": "Operator", "defaultContent": "", "autoWidth": true },
      { "data": "Technician", "name": "Technician", "defaultContent": "", "autoWidth": true },
      { "data": "MachineReasonCode", "name": "MachineReasonCode", "defaultContent": "", "autoWidth": true },
      { "data": "ToolSerialCode", "name": "ToolSerialCode", "defaultContent": "", "autoWidth": true },
    ],
    "data": eventLogList
  });
}


// Function to populate select options for selectMachineFamily
function populateSelectOptionsForMachineFamily() {

  const data = [
    { value: 'default', label: 'Select Machine Family' },
    { value: 'PL', label: 'PL' },
    { value: 'RL', label: 'RL' }
  ];

  const selectElement = document.getElementById('selectMachineFamily');

  // clear select option first
  while (selectElement.options.length > 0) {
    selectElement.remove(0);
  }

  // populate
  data.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    selectElement.appendChild(optionElement);
  });


  // Set first option as a placeholder
  selectElement.selectedIndex = 0;
  selectElement[0].disabled = true;
  selectElement[0].selected = true;
}


// Function to populate select options for selectMachineFamily
function populateSelectOptionsForMachine(Machine = '') {

  const data = [
    { value: 'default', label: 'Select Machine' },
    { value: 'ANA-PL1', label: 'ANA-PL1' },
    { value: 'ANA-PL2', label: 'ANA-PL2' },
    { value: 'ANA-DK-004', label: 'ANA-DK-004' }
  ];

  const selectElement = document.getElementById('selectMachine');

  // clear select option first
  while (selectElement.options.length > 0) {
    selectElement.remove(0);
  }

  // populate 
  data.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    selectElement.appendChild(optionElement);
  });


  // Set first option as a placeholder
  selectElement.selectedIndex = 0;
  selectElement[0].disabled = true;
  selectElement[0].selected = true;
}


debugger;



// Usage:


document.addEventListener('DOMContentLoaded', function () {


  // 

  // Event Log
  generateEventLogTable();

  //
  populateSelectOptionsForMachineFamily();
  populateSelectOptionsForMachine();
});

