export const POST_CONTRACT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_title",
        type: "string"
      },
      {
        name: "_contents",
        type: "string"
      }
    ],
    name: "posting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_idx",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_address",
        type: "address"
      },
      {
        indexed: false,
        name: "_title",
        type: "string"
      },
      {
        indexed: false,
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "insertPostEvent",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_postNum",
        type: "uint256"
      }
    ],
    name: "getPost",
    outputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getTotalPostCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
