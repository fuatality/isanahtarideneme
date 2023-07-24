const TableInvoice = () => {
  return (
    <table className="default-table invoice-table">
      <thead>
        <tr>
          <th>Açıklama</th>
          <th>Fiyat</th>
          <th>KDV (20%)</th>
          <th>Toplam</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Standart Plan</td>
          <td>$443.00 </td>
          <td>$921.80</td>
          <td>$9243</td>
        </tr>
        <tr>
          <td>Gold Plan</td>
          <td>$413.00 </td>
          <td>$912.80 </td>
          <td>$5943</td>
        </tr>
        <tr>
          <td>
            <strong>Toplam</strong>
          </td>
          <td></td>
          <td></td>
          <td>
            <strong>$9,750</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInvoice;
