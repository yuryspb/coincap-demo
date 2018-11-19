import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

const columns = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Price",
    dataIndex: "priceUsd",
    key: "priceUsd"
  },
  {
    title: "Market Cap",
    dataIndex: "marketCapUsd",
    key: "marketCapUsd"
  },
  {
    title: "Volume (24Hr)",
    dataIndex: "volumeUsd24Hr",
    key: "volumeUsd24Hr",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.volumeUsd24Hr - b.volumeUsd24Hr
  }
];

export default class MainTable extends Component {
  state = {
    info: []
  };

  componentDidMount() {
    const source = "https://api.coincap.io/v2/assets";
    fetch(`${source}`)
      .then(response => response.json())
      .then(data => this.setState({ info: data.data }));
  }

  render() {
    const { info } = this.state;

    console.log(this.state.info);

    return (
      <div class="wrap">
        <Table
          dataSource={this.state.info}
          columns={columns}
          pagination={{ pageSize: 15, total: 15 }}
          scroll={{ y: 350 }}
        />
      </div>
    );
  }
}
