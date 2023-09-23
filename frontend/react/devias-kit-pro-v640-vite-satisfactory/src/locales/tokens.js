export const tokens = {
  common: {
    pages: {
      login: {
        title: 'common:pages.login.title',
        signin: 'common:pages.login.signin',
        signup: 'common:pages.login.signup',
        divider: 'common:pages.login.divider',
        fields: {
          email: 'common:pages.login.fields.email',
          password: 'common:pages.login.fields.password',
        },
        errors: {
          validEmail: 'common:pages.login.errors.validEmail',
        },
        buttons: {
          submit: 'common:pages.login.buttons.submit',
          forgotPassword: 'common:pages.login.buttons.forgotPassword',
          noAccount: 'common:pages.login.buttons.noAccount',
          rememberMe: 'common:pages.login.buttons.rememberMe',
        },
      },
      forgotPassword: {
        title: 'common:pages.forgotPassword.title',
        fields: {
          email: 'common:pages.forgotPassword.fields.email',
        },
        errors: {
          validEmail: 'common:pages.forgotPassword.errors.validEmail',
        },
        buttons: {
          submit: 'common:pages.forgotPassword.buttons.submit',
        },
      },
      register: {
        title: 'common:pages.register.title',
        fields: {
          email: 'common:pages.register.fields.email',
          password: 'common:pages.register.fields.password',
        },
        errors: {
          validEmail: 'common:pages.register.errors.validEmail',
        },
        buttons: {
          submit: 'common:pages.register.buttons.submit',
          haveAccount: 'common:pages.register.buttons.haveAccount',
        },
      },
      updatePassword: {
        title: 'common:pages.updatePassword.title',
        fields: {
          password: 'common:pages.updatePassword.fields.password',
          confirmPassword: 'common:pages.updatePassword.fields.confirmPassword',
        },
        errors: {
          confirmPasswordNotMatch: 'common:pages.updatePassword.errors.confirmPasswordNotMatch',
        },
        buttons: {
          submit: 'common:pages.updatePassword.buttons.submit',
        },
      },
      errors: {
        info: 'common:pages.errors.info',
        notFound: 'common:pages.errors.notFound',
        resource404: 'common:pages.errors.resource404',
        backHome: 'common:pages.errors.backHome',
      },
    },
    actions: {
      list: 'common:actions.list',
      create: 'common:actions.create',
      edit: 'common:actions.edit',
      show: 'common:actions.show',
    },
    buttons: {
      create: 'common:buttons.create',
      save: 'common:buttons.save',
      logout: 'common:buttons.logout',
      delete: 'common:buttons.delete',
      edit: 'common:buttons.edit',
      cancel: 'common:buttons.cancel',
      confirm: 'common:buttons.confirm',
      filter: 'common:buttons.filter',
      clear: 'common:buttons.clear',
      refresh: 'common:buttons.refresh',
      show: 'common:buttons.show',
      undo: 'common:buttons.undo',
      import: 'common:buttons.import',
      clone: 'common:buttons.clone',
      notAccessTitle: 'common:buttons.notAccessTitle',
      dismiss: 'common:buttons.dismiss',
    },
    fields: {
      name: 'common:fields.name',
      description: 'common:fields.description',
    },
    warnWhenUnsavedChanges: 'common:warnWhenUnsavedChanges',
    notifications: {
      success: 'common:notifications.success',
      error: 'common:notifications.error',
      undoable: 'common:notifications.undoable',
      createSuccess: 'common:notifications.createSuccess',
      createError: 'common:notifications.createError',
      deleteSuccess: 'common:notifications.deleteSuccess',
      deleteError: 'common:notifications.deleteError',
      editSuccess: 'common:notifications.editSuccess',
      editError: 'common:notifications.editError',
      importProgress: 'common:notifications.importProgress',
      savedSuccess: 'common:notifications.savedSuccess',
      savedError: 'common:notifications.savedError',
    },
    loading: 'common:loading',
    tags: {
      clone: 'common:tags.clone',
    },
    dashboard: {
      title: 'common:dashboard.title',
    },
    posts: {
      posts: 'common:posts.posts',
      fields: {
        id: 'common:posts.fields.id',
        title: 'common:posts.fields.title',
        category: 'common:posts.fields.category',
        status: {
          title: 'common:posts.fields.status.title',
          published: 'common:posts.fields.status.published',
          draft: 'common:posts.fields.status.draft',
          rejected: 'common:posts.fields.status.rejected',
        },
        content: 'common:posts.fields.content',
        createdAt: 'common:posts.fields.createdAt',
      },
      titles: {
        create: 'common:posts.titles.create',
        edit: 'common:posts.titles.edit',
        list: 'common:posts.titles.list',
        show: 'common:posts.titles.show',
      },
    },
    table: {
      actions: 'common:table.actions',
    },
    words: {
      no: 'common:words.no',
      yes: 'common:words.yes',
    },
  },
  nav: {
    academy: 'nav.academy',
    account: 'nav.account',
    analytics: 'nav.analytics',
    auth: 'nav.auth',
    blog: 'nav.blog',
    browse: 'nav.browse',
    calendar: 'nav.calendar',
    chat: 'nav.chat',
    checkout: 'nav.checkout',
    concepts: 'nav.concepts',
    contact: 'nav.contact',
    course: 'nav.course',
    create: 'nav.create',
    crypto: 'nav.crypto',
    customers: 'nav.customers',
    dashboard: 'nav.dashboard',
    details: 'nav.details',
    ecommerce: 'nav.ecommerce',
    edit: 'nav.edit',
    error: 'nav.error',
    feed: 'nav.feed',
    fileManager: 'nav.fileManager',
    files: 'nav.files',
    finance: 'nav.finance',
    fleet: 'nav.fleet',
    forgotPassword: 'nav.forgotPassword',
    invoiceList: 'nav.invoices',
    jobList: 'nav.jobList',
    kanban: 'nav.kanban',
    list: 'nav.list',
    login: 'nav.login',
    logistics: 'nav.logistics',
    mail: 'nav.mail',
    management: 'nav.management',
    orderList: 'nav.orders',
    overview: 'nav.overview',
    pages: 'nav.pages',
    postCreate: 'nav.postCreate',
    postDetails: 'nav.postDetails',
    postList: 'nav.postList',
    pricing: 'nav.pricing',
    productList: 'nav.products',
    profile: 'nav.profile',
    register: 'nav.register',
    resetPassword: 'nav.resetPassword',
    socialMedia: 'nav.socialMedia',
    verifyCode: 'nav.verifyCode',
  },
  satisfactory: {
    title: 'satisfactory:title',
    nested_test: {
      nested_key: 'satisfactory:nested_test.nested_key',
    },
    products: 'satisfactory:products',
    product_details: 'satisfactory:product_details',
    games: 'satisfactory:games',
    version: 'satisfactory:version',
    recipes: 'satisfactory:recipes',
    pages: {
      games: {
        title: 'satisfactory:pages.games.title',
        deleteGame: 'satisfactory:pages.games.deleteGame',
        addFirstGame: 'satisfactory:pages.games.addFirstGame',
        addGame: 'satisfactory:pages.games.addGame',
        version: 'satisfactory:pages.games.version',
        tabs: {
          general: 'satisfactory:pages.games.tabs.general',
          factories: 'satisfactory:pages.games.tabs.factories',
          power: 'satisfactory:pages.games.tabs.power',
          trainstations: 'satisfactory:pages.games.tabs.trainstations',
          notepad: 'satisfactory:pages.games.tabs.notepad',
        },
        general: {
          generalinfo: 'satisfactory:pages.games.general.generalinfo',
          version: 'satisfactory:pages.games.general.version',
          players: 'satisfactory:pages.games.general.players',
          addPlayerHelperText: 'satisfactory:pages.games.general.addPlayerHelperText',
          cantDeleteOwner: 'satisfactory:pages.games.general.cantDeleteOwner',
          userId: 'satisfactory:pages.games.general.userId',
          addPlayer: 'satisfactory:pages.games.general.addPlayer',
          deleteGame: 'satisfactory:pages.games.general.deleteGame',
          deleteGameConfirmation: 'satisfactory:pages.games.general.deleteGameConfirmation',
          deleteGameWarning: 'satisfactory:pages.games.general.deleteGameWarning',
          downloadGame: 'satisfactory:pages.games.general.downloadGame',
          uploadGame: 'satisfactory:pages.games.general.uploadGame',
          downloadGameHelperText: 'satisfactory:pages.games.general.downloadGameHelperText',
        },
        factories: {
          addFirst: 'satisfactory:pages.games.factories.addFirst',
          add: 'satisfactory:pages.games.factories.add',
          checked: 'satisfactory:pages.games.factories.checked',
          finished: 'satisfactory:pages.games.factories.finished',
          inputs: 'satisfactory:pages.games.factories.inputs',
          outputs: 'satisfactory:pages.games.factories.outputs',
          product: 'satisfactory:pages.games.factories.product',
          amount: 'satisfactory:pages.games.factories.amount',
          recipe: 'satisfactory:pages.games.factories.recipe',
          recipeHelperText: 'satisfactory:pages.games.factories.recipeHelperText',
          noInputsOutputsStarter: 'satisfactory:pages.games.factories.noInputsOutputsStarter',
          noInputsOutputs: 'satisfactory:pages.games.factories.noInputsOutputs',
        },
        scribble: {
          helperText: 'satisfactory:pages.games.scribble.helperText',
        },
      },
      products: {
        title: 'satisfactory:pages.products.title',
        stackSize: 'satisfactory:pages.products.stackSize',
        info: 'satisfactory:pages.products.info',
        input: 'satisfactory:pages.products.input',
        machine: 'satisfactory:pages.products.machine',
        output: 'satisfactory:pages.products.output',
        requirements: 'satisfactory:pages.products.requirements',
        fullscreen: 'satisfactory:pages.products.fullscreen',
      },
    },
  },
};
