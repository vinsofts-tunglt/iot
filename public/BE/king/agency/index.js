window.addEventListener('load', async function () {
  var acc = await accf();
  var datas = await ContractMaster.methods.getAll(10, 0).call({
    from: acc
  });
  var dataoke = []
  datas.forEach(element => {
    if (element[0] != 0) {
      dataoke.push(element)
    }
  });
  var table = $('#bootstrap-data-table').DataTable({
    data: dataoke,
    columnDefs: [{
        targets: [5],
        render: function (data, type, row) {
          return data == 1 ? 'Admin' : 'Đại lý'
        }
      },
      {
        targets: [6],
        render: function (data, type, row) {
          return data == 0 ? null : data
        }
      },
      {
        targets: [7],
        render: function (data, type, row) {
          return data == 0 ? null : data
        }
      },
      {
        targets: 8,
        data: null,
        defaultContent: "<button>Edit</button>"
      }
    ]
  });

  $('#bootstrap-data-table tbody').on('click', 'button', function () {
    var data = table.row($(this).parents('tr')).data();
    location.href = basenow + "edit/" + data[1];
  });
})