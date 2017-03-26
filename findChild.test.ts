import { findChild, Tree } from './findChild'

test('it should return true if a child tree exists in parent Binary tree', () => {
    expect(findChild(parentOne, childOne)).toBeTruthy();
});
test('it should return false if a child tree does not exist in parent Binary tree', () => {
    expect(findChild(parentOne, childTwo)).toBeFalsy();
});
test('it should return true if a child tree exists in parent K-level tree', () => {
    expect(findChild(parentKLevelTree, childFour)).toBeTruthy();
});
test('it should return false if a child tree does not exist in K-level  tree', () => {
    expect(findChild(parentKLevelTree, childTwo)).toBeFalsy();
});
test('it should return false if a node in child tree is not at same position in parent tree', () => {
    expect(findChild(parentOne, childFive)).toBeFalsy();
});
let parentOne = {
    value: "root",
    left: {
        value: "a",
        left: {
            value: "c",
            left: {
                value: "g"
            },
            right: {
                value: "h"
            }
        },
        right: {
            value: "d",
            left: {
                value: "i"
            }
        }
    },
    right: {
        value: "b",
        left: {
            value: "e",
            right: {
                value: "j",
                left: {
                    value: "k"
                },
                right: {
                    value: "l"
                }
            }
        },
        right: {
            value: "f"
        }
    }
};
let childOne = {
    value: "a",
    left: {
        value: "c",
        left: {
            value: "g"
        },
        right: {
            value: "h"
        }
    },
    right: {
        value: "d",
        left: {
            value: "i"
        }
    }
};
let childTwo = {
    value: "a",
    left: {
        value: "c",
        left: {
            value: "g"
        },
        right: {
            value: "h"
        }
    },
    right: {
        value: "d",
        left: {
            value: "idfd"
        }
    }
};
let parentKLevelTree = {
    value: "root",
    left: {
        value: "a",
        left: {
            value: "c",
            left: {
                value: "g",
                left: {
                    value: "aa"
                },
                right: {
                    value: "bb"
                }
            },
            right: {
                value: "h",
                left: {
                    value: "cc"
                },
                right: {
                    value: "dd"
                }
            }
        },
        right: {
            value: "d",
            left: {
                value: "i",
                left: {
                    value: "ee"
                },
                right: {
                    value: "ff"
                }
            },
            right: {
                value: "b",
                left: {
                    value: "e",
                    right: {
                        value: "j",
                        left: {
                            value: "k",
                            left: {
                                value: "gg",
                                left: {
                                    value: "zz",
                                    left: {
                                        value: "ss",
                                        left: {
                                            value: "pp",

                                        },
                                        right: {
                                            value: "vv"
                                        }

                                    },
                                    right: {
                                        value: "tt",
                                        left: {
                                            value: "aaa",
                                            left: {
                                                value: "ccc",

                                            },
                                            right: {
                                                value: "ddd"
                                            }

                                        },
                                        right: {
                                            value: "bbb",
                                            left: {
                                                value: "eee",

                                            },
                                            right: {
                                                value: "fff"
                                            }
                                        }
                                    }
                                },
                                right: {
                                    value: "mm",
                                    left: {
                                        value: "ll"
                                    },
                                    right: {
                                        value: "ji"
                                    }
                                }
                            },
                            right: {
                                value: "hh",
                                left: {
                                    value: "nn"
                                },
                                right: {
                                    value: "oo"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    right: {
        value: "b",

        right: {
            value: "f",
            left: {
                value: "ii",
                left: {
                    value: "z"
                },
                right: {
                    value: "y"
                }
            },
            right: {
                value: "jj",
                left: {
                    value: "x",
                    left: {
                        value: "r"
                    },
                    right: {
                        value: "q"
                    }
                },
                right: {
                    value: "w",
                    left: {
                        value: "p"
                    },
                    right: {
                        value: "q"
                    }
                }
            }
        },
        left: {
            value: "e",
            right: {
                value: "j",
                left: {
                    value: "k",
                    left: {
                        value: "v"
                    },
                    right: {
                        value: "u"
                    }
                },
                right: {
                    value: "l",
                    left: {
                        value: "s"
                    },
                    right: {
                        value: "t"
                    }
                }
            }
        }
    },
    first: {
        value: "fc",
        left: {
            value: "fg",
            left: {
                value: "fa"
            },
            right: {
                value: "fbb"
            }
        }
    },
    second: {
        value: "sc",
        left: {
            value: "sg",
            left: {
                value: "sa"
            },
            right: {
                value: "sbb"
            },
            first: {
                value: "fgf",
                left: {
                    value: "faf"
                },
                right: {
                    value: "fbbf"
                }
            }
        }
    }
};
let childThree = {
    value: "l",
    left: {
        value: "s"
    },
    right: {
        value: "t"
    }
};
let childFour = {
    value: "sg",
    left: {
        value: "sa"
    },
    right: {
        value: "sbb"
    },
};
let childFive = {
    value: "a",
    left: {
        value: "c",

        right: {
            value: "g"
        }
    },
    right: {
        value: "h",

    },
};