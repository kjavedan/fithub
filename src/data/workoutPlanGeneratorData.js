const movementNames = {
  legs: {
    compoundMovements: {
      easy: [
        {
          calf__raises__machine: {
            name: "تمرین تقویت ساق پاها با ماشین",
            img: "calf_raises_machine_image_url_here",
            targetMucsles: ["ساق پاها"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          lunges: {
            name: "لانچ",
            img: "lunges_image_url_here",
            targetMucsles: ["ران", "زانوها", "باسن"],
          },
        },
        {
          step__ups: {
            name: "قدم‌گذاری به بالا",
            img: "step_ups_image_url_here",
            targetMucsles: ["ران", "زانوها", "باسن", "ساق پاها"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          Bulgarian__split__squats: {
            name: "اسکوات انفرادی بلغاری",
            img: "bulgarian_split_squats_image_url_here",
            targetMucsles: ["ران", "زانوها", "باسن"],
          },
        },
        {
          regular__squat: {
            name: "اسکوات معمولی",
            img: "squat_image_url_here",
            targetMucsles: ["ران", "زانوها", "باسن", "کمر پایین", "شکم"],
          },
        },
        {
          deadlift: {
            name: "ددلیفت",
            img: "deadlift_image_url_here",
            targetMucsles: ["زانوها", "باسن", "کمر پایین", "ساعدها"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          calf__raises: {
            name: "تمرین تقویت ساق پاها",
            img: "calf_raises_image_url_here",
            targetMucsles: ["ساق پاها"],
          },
        },
        {
          abductor__machine: {
            name: "تمرین تقویت عضلات خارج ران",
            img: "abductor_machine_image_url_here",
            targetMucsles: ["عضلات خارج ران"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          seated__leg__curls: {
            name: "تمرین کشش نشسته همستینگ",
            img: "seated_leg_curls_image_url_here",
            targetMucsles: ["زانوها"],
          },
        },
        {
          standing__leg__curls: {
            name: "تمرین کشش نیمه نشسته همستینگ",
            img: "standing_leg_curls_image_url_here",
            targetMucsles: ["زانوها"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          hamstring__curls: {
            name: "تمرین کشش همستینگ",
            img: "hamstring_curls_image_url_here",
            targetMucsles: ["زانوها"],
          },
        },
        {
          leg__extensions: {
            name: "تمرین افزایش قدرت پا",
            img: "leg_extensions_image_url_here",
            targetMucsles: ["ران"],
          },
        },
        {
          calf__raises__machine: {
            name: "تمرین تقویت ساق پاها با ماشین",
            img: "calf_raises_machine_image_url_here",
            targetMucsles: ["ساق پاها"],
          },
        },
        {
          adductor__machine: {
            name: "تمرین تقویت عضلات داخل ران",
            img: "adductor_machine_image_url_here",
            targetMucsles: ["عضلات داخل ران"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  back: {
    compoundMovements: {
      easy: [
        {
          lat__pull__down: {
            name: "تمرین کشش نشسته لت پول دون",
            img: "lat_pull_down_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          seated__row: {
            name: "تمرین سیتد رو",
            img: "seated_row_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        {
          cable__row: {
            name: "تمرین کشش سیمی",
            img: "cable_row_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          deadlift: {
            name: "تمرین ددلیفت",
            img: "deadlift_image_url_here",
            targetMucsles: ["عضلات پشت", "عضلات پشتی ساعد"],
          },
        },
        {
          bent__over__rows: {
            name: "تمرین ردیف خم شده",
            img: "bent_over_rows_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          face__pulls: {
            name: "تمرین فیس پولز",
            img: "face_pulls_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        {
          band__pull__aparts: {
            name: "تمرین بند کشی",
            img: "band_pull_aparts_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          single__arm__dumbbell__rows: {
            name: "تمرین ردیف دمبل تک دستی",
            img: "single_arm_dumbbell_rows_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        {
          face__pulls: {
            name: "تمرین فیس پولز",
            img: "face_pulls_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          straight__arm__pull__downs: {
            name: "تمرین کشش پشت با بازوهای تاش",
            img: "straight_arm_pull_downs_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        {
          chest__supported__rows: {
            name: "تمرین ردیف با حمایت از سینه",
            img: "chest_supported_rows_image_url_here",
            targetMucsles: ["عضلات پشت"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  chest: {
    compoundMovements: {
      easy: [
        {
          push__ups: {
            name: "تمرین پرس بازو",
            img: "push_ups_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          dumbbell__bench__press: {
            name: "تمرین پرس سینه دمبل",
            img: "dumbbell_bench_press_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        {
          incline__bench__press: {
            name: "تمرین پرس سینه شیب دار",
            img: "incline_bench_press_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          barbell__bench__press: {
            name: "تمرین پرس سینه باهال",
            img: "barbell_bench_press_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        {
          decline__bench__press: {
            name: "تمرین پرس سینه کم افت",
            img: "decline_bench_press_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          chest__flyes: {
            name: "تمرین پرتاب سینه",
            img: "chest_flyes_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        {
          push__ups: {
            name: "تمرین پرس بازو",
            img: "push_ups_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          cable__crossovers: {
            name: "تمرین کشش سیمی چله ای",
            img: "cable_crossovers_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        {
          dumbbell__flyes: {
            name: "تمرین پرتاب دمبل",
            img: "dumbbell_flyes_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          pec__deck__machine: {
            name: "تمرین پک دک ماشینی",
            img: "pec_deck_machine_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        {
          cable__crossovers: {
            name: "تمرین کشش سیمی چله ای",
            img: "cable_crossovers_image_url_here",
            targetMucsles: ["عضلات سینه"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  shoulders: {
    compoundMovements: {
      easy: [
        {
          dumbbell__shoulder__press: {
            name: "تمرین پرس شانه دمبل",
            img: "dumbbell_shoulder_press_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          seated__barbell__shoulder__press: {
            name: "تمرین پرس شانه نشسته باهال",
            img: "seated_barbell_shoulder_press_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        {
          upright__rows: {
            name: "تمرین کشش تکوا",
            img: "upright_rows_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          overhead__press: {
            name: "تمرین پرس بالا",
            img: "overhead_press_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        {
          push__press: {
            name: "تمرین پرس فشاری",
            img: "push_press_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          lateral__raises: {
            name: "تمرین پرتاب کناری",
            img: "lateral_raises_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        {
          front__raises: {
            name: "تمرین پرتاب جلویی",
            img: "front_raises_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          face__pulls: {
            name: "تمرین فیس پولز",
            img: "face_pulls_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        {
          reverse__flyes: {
            name: "تمرین پرتاب عقب",
            img: "reverse_flyes_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          bent__over__lateral__raises: {
            name: "تمرین پرتاب کناری خم شده",
            img: "bent_over_lateral_raises_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        {
          cable__lateral__raises: {
            name: "تمرین پرتاب کناری با سیم",
            img: "cable_lateral_raises_image_url_here",
            targetMucsles: ["عضلات شانه"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  triceps: {
    compoundMovements: {
      easy: [
        {
          bench__dips: {
            name: "تمرین دیپس باشاخ",
            img: "bench_dips_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          close__grip__bench__press: {
            name: "تمرین پرس کم فاصله",
            img: "close_grip_bench_press_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          diamond__push__ups: {
            name: "تمرین پرس بازو الماسی",
            img: "diamond_push_ups_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          dips: {
            name: "تمرین دیپس",
            img: "dips_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          weighted__dips: {
            name: "تمرین دیپس با حمله",
            img: "weighted_dips_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          triceps__extensions: {
            name: "تمرین افتراق بازو",
            img: "triceps_extensions_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          kickbacks: {
            name: "تمرین کیک بک",
            img: "kickbacks_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          overhead__triceps__extensions: {
            name: "تمرین افتراق بازو از بالا",
            img: "overhead_triceps_extensions_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          skull__crushers: {
            name: "تمرین افتراق از بالا",
            img: "skull_crushers_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          triceps__dips__machine: {
            name: "تمرین دیپس با ماشین",
            img: "triceps_dips_machine_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          cable__push__downs: {
            name: "تمرین کشش سیمی از بالا",
            img: "cable_push_downs_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  biceps: {
    compoundMovements: {
      easy: [
        {
          assisted__pull__ups: {
            name: "تمرین پول اپ با حمایت",
            img: "assisted_pull_ups_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          chin__ups: {
            name: "تمرین چین اپ",
            img: "chin_ups_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          hammer__curls: {
            name: "تمرین همر کرل",
            img: "hammer_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          pull__ups: {
            name: "تمرین پول اپ",
            img: "pull_ups_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          barbell__curls: {
            name: "تمرین باربل کرل",
            img: "barbell_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          dumbbell__curls: {
            name: "تمرین دمبل کرل",
            img: "dumbbell_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          band__curls: {
            name: "تمرین بند کرل",
            img: "band_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          incline__dumbbell__curls: {
            name: "تمرین دمبل کرل شیب دار",
            img: "incline_dumbbell_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          preacher__curls: {
            name: "تمرین پریچر کرل",
            img: "preacher_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          concentration__curls: {
            name: "تمرین کرل کنسانتره",
            img: "concentration_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        {
          cable__curls: {
            name: "تمرین کشش سیمی",
            img: "cable_curls_image_url_here",
            targetMucsles: ["عضلات بازو"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
  abs: {
    compoundMovements: {
      easy: [
        {
          crunches: {
            name: "تمرین کرنچ",
            img: "crunches_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more easy compound movements here
      ],
      moderate: [
        {
          leg__raises: {
            name: "تمرین پاهای بالا",
            img: "leg_raises_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        {
          seated__leg__tucks: {
            name: "تمرین خم شده دست برای شکم",
            img: "seated_leg_tucks_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more moderate compound movements here
      ],
      hard: [
        {
          hanging__leg__raises: {
            name: "تمرین پاهای بالا با اتلاف",
            img: "hanging_leg_raises_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        {
          dragon__flags: {
            name: "تمرین پرچم اژدها",
            img: "dragon_flags_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more hard compound movements here
      ],
    },
    isolationMovements: {
      easy: [
        {
          plank: {
            name: "تمرین پلانک",
            img: "plank_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        {
          side__plank: {
            name: "تمرین پلانک جانبی",
            img: "side_plank_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more easy isolation movements here
      ],
      moderate: [
        {
          bicycle__crunches: {
            name: "تمرین کرنچ دوچرخه ای",
            img: "bicycle_crunches_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        {
          russian__twists: {
            name: "تمرین چرخش روسی",
            img: "russian_twists_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more moderate isolation movements here
      ],
      hard: [
        {
          hanging__leg__raises: {
            name: "تمرین پاهای بالا با اتلاف",
            img: "hanging_leg_raises_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        {
          windshield__wipers: {
            name: "تمرین وایپر پنجره",
            img: "windshield_wipers_image_url_here",
            targetMucsles: ["عضلات شکم"],
          },
        },
        // Add more hard isolation movements here
      ],
    },
  },
};
