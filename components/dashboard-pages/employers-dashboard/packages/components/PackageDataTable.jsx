const PackageDataTable = () => {
  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Fatura No</th>
          <th>Paket</th>
          <th>Bitiş Tarihi</th>
          <th>İlan Hakkı</th>
          <th>Kullanılan</th>
          <th>Kalan</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Super CV Paketi</a>
          </td>
          <td className="expiry">11 Ocak 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Aktif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>2</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Gold Paket</a>
          </td>
          <td className="expiry">11 Ocak 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Aktif</td>
        </tr>
        {/* End tr */}

        
        {/* End tr */}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
