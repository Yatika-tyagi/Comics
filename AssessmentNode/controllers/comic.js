// Get the Schemas We need to Enter the Data in their respective keys
var User = require("../models/user");
// var SuperAdmin = require("../models/superAdmin");
// var Admin = require("../models/admin");
var Season = require("../models/season");
var Series = require("../models/series");
var Comic= require("../models/comic");


exports.SearchData = function (req, res) {
    console.log(req.params.reg);
    var regex = RegExp(req.params.reg);

    Comic.find({
        Cm_Name: regex
    }, function (err, response) {
        console.log(err,response); 
       if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }
    if ((response || []).length === 0) {
      res.json({
        status: true,
        respData: {
          data: "data doesnt exist"
        }
      });
    }
    return res.json({
      status: true,
      respData: {
        data: response
      }
    });
    })
};

exports.postuser = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  });

  user.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getuser = function(req, res) {
  User.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateuser = function(req, res) {
  var name = req.body.username;
  User.findOne({
    username: name
  }, function(err, user) {
    if (err) {
      res.json(err);
    }

    // var username = req.body.username;
    var password = req.body.password;
    // var type = req.body.type;
    var role = req.body.role;
    // user.username = username;
    user.password = password;
    // user.type = type;
    user.role = role;

    user.updated_at = new Date();

    user.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteuser = function(req, res) {
  var id = req.params._id;
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (user) {
      User.remove({
        _id: id
      }, function(err, response) {
        if (err) {
          res.json(err);
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } 
    // else {
    //   res.json({
    //     status: false,
    //     respData: {
    //       data: "user dosent exist"
    //     }
    //   });
    // }

  })
}
//series funtions
exports.postseries = function(req, res) {
  var series = new Series({
    Sr_Name: req.body.Sr_Name,
    Sr_Description: req.body.Sr_Description,
    Sr_CreatedBy: req.body.Sr_CreatedBy,
    Sr_Id: req.body.Sr_Id,
    Sr_CreatedDate: new Date(),
    Sr_UpdatedDate: ""

  });

  series.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getseries = function(req, res) {
  Series.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateseries = function(req, res) {
  var Sr_Id = req.params.Sr_Id;
  Series.findOne({
    Sr_Id: Id
  }, function(err, series) {
    if (err) {
      res.json(err);
    }

    var Sr_Name = req.body.Sr_Name;
    var Sr_Description = req.body.Sr_Description;
    var Sr_CreatedBy = req.body.Sr_CreatedBy;
    series.Sr_Name = Sr_Name;
    series.Sr_Description = Sr_Description;
    series.Sr_CreatedBy = Sr_CreatedBy;
    series.updated_at = new Date();

    series.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteseries = function(req, res) {
  var Sr_Id = req.params.Sr_Id;
 Series.findOne({
    Sr_Id: Sr_Id
  }, function(err, series) {
    if (err) {
      // res.json(err);
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (series) {
      Series.remove({
        Sr_Id: Sr_Id
      }, function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: false,
        respData: {
          data: "series dosent exist"
        }
      });
    }

  })
}
//seasons funtions

exports.postseason = function(req, res) {
  var season = new Season({
    Sn_Name: req.body.Sn_Name,
   Sn_Description: req.body.Sn_Description,
    Sn_StartsOn: req.body.Sn_StartsOn,
    Sn_EndsOn: req.body.Sn_EndsOn,
    Sn_Id: req.body.Sn_Id,
    Sr_Id: req.body.Sr_Id,
    Sn_CreatedDate: new Date(),
    Sn_UpdatedDate: "" 

  });

  season.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getseason = function(req, res) {
  Season.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateseason = function(req, res) {
  var Sn_Id = req.params.Sn_Id;
  Seasons.findOne({
   Sn_Id: Sn_Id
  }, function(err, season) {
    if (err) {
      res.json(err);
    }

    var Sn_Name = req.body.Sn_Name;
    var Sn_Description = req.body.Sn_Description;
    var Sn_StartsOn = req.body.Sn_StartsOn;
    var Sn_EndsOn = req.body.Sn_EndsOn;

    season.Sn_Name = Sn_Name;
    season.Sn_Description = Sn_Description;
    season.Sn_StartsOn = Sn_StartsOn;
    season.Sn_EndsOn = Sn_EndsOn;
    season.Sn_UpdatedDate = new Date();

    season.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteseason = function(req, res) {
  var Sn_Id = req.params.Sn_Id;
  Season.findOne({
    Sn_Id: Sn_Id
  }, function(err, season) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      })
    }

    if (season) {
      Season.remove({
        Sn_Id: Sn_Id
      }, function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          })
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        })
      })
    } else {
      res.json({
        status: true,
        respData: {
          data: "user dosent exist"
        }
      })
    }

  })
}

//comics funtions

exports.postcomic = function(req, res) {
  var comic = new Comic({
    Cm_Id: req.body.Cm_Id,
    Cm_Name: req.body.Cm_Name,
    Cm_Story: req.body.Cm_Story,
    Cm_Image: req.body.Cm_Image,
    Sn_Id: req.body.Sn_Id,
    Sr_Id: req.body.Sr_Id,
    Cm_CreatedDate: new Date(),
    Cm_UpdatedDate: ""

  });

  comic.save(function(err, response) {
    if (err) {
      res.json({
        status: fasle,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getcomic = function(req, res) {
  Comic.find({}, function(err, response) {
    if (err) {
      res.json({
        status: fasle,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updatecomic = function(req, res) {
  var Cm_Id = req.params.Cm_Id;
  Comic.findOne({
    Cm_Id: Cm_Id
  }, function(err, comic) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    var Cm_Name = req.body.Cm_Name;
    var Cm_Story = req.body.Cm_Story;
    var Cm_StartsOn = req.body.Cm_StartsOn;
    var Cm_EndsOn = req.body.Cm_EndsOn;

    comic.Cm_Name =Cm_Name;
    comic.Cm_Story = Cm_Story;
    comic.Cm_StartsOn = Cm_StartsOn;
    comic.Cm_EndsOn = Cm_EndsOn;
    comic.Cm_UpdatedDate = new Date();

    comic.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deletecomic= function(req, res) {
  var Cm_Id = req.params.Cm_Id;
  Comic.findOne({
    Cm_Id: Cm_Id
  }, function(err, comic) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (comic) {
      Comic.remove({
        Cm_Id: Cm_Id
      }, function(err) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: true,
        respData: {
          data: "user doesn't exist"
        }
      });
    }

  })
}

exports.checkuser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password
  User.findOne({
    username: username,
    password: password
  }, function(err, user) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (user) {

      res.json({
        status: true,
        respData: {
          data: user
        }
      });
    } else {
      res.json({
        status: true,
        respData: {
          data: "user doesnt exist"
        }
      });
    }
  })
}

