/* This file is automatically generated by ABP framework to use MVC Controllers from javascript. */


// module cms-kit-admin

(function(){

  // controller volo.cmsKit.admin.tags.entityTagAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.tags.entityTagAdmin');

    volo.cmsKit.admin.tags.entityTagAdmin.addTagToEntity = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/entity-tags',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.entityTagAdmin.removeTagFromEntity = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/entity-tags' + abp.utils.buildQueryString([{ name: 'tagId', value: input.tagId }, { name: 'entityType', value: input.entityType }, { name: 'entityId', value: input.entityId }]) + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.entityTagAdmin.setEntityTags = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/entity-tags',
        type: 'PUT',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.tags.tagAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.tags.tagAdmin');

    volo.cmsKit.admin.tags.tagAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.tagAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.tagAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.tagAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags' + abp.utils.buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.tagAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.tags.tagAdmin.getTagDefinitions = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/tags/tag-definitions',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.pages.pageAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.pages.pageAdmin');

    volo.cmsKit.admin.pages.pageAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/pages/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.pages.pageAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/pages' + abp.utils.buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.pages.pageAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/pages',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.pages.pageAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/pages/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.pages.pageAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/pages/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.menus.menuItemAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.menus.menuItemAdmin');

    volo.cmsKit.admin.menus.menuItemAdmin.getList = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin.moveMenuItem = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items/' + id + '/move',
        type: 'PUT',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.menus.menuItemAdmin.getPageLookup = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/menu-items/lookup/pages' + abp.utils.buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.mediaDescriptors.mediaDescriptorAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.mediaDescriptors.mediaDescriptorAdmin');

    volo.cmsKit.admin.mediaDescriptors.mediaDescriptorAdmin.create = function(entityType, inputStream, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/media/' + entityType + '' + abp.utils.buildQueryString([{ name: 'name', value: inputStream.name }]) + '',
        type: 'POST'
      }, ajaxParams));
    };

    volo.cmsKit.admin.mediaDescriptors.mediaDescriptorAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/media/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.globalResources.globalResourceAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.globalResources.globalResourceAdmin');

    volo.cmsKit.admin.globalResources.globalResourceAdmin.get = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/global-resources',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.globalResources.globalResourceAdmin.setGlobalResources = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/global-resources',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.comments.commentAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.comments.commentAdmin');

    volo.cmsKit.admin.comments.commentAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/comments' + abp.utils.buildQueryString([{ name: 'entityType', value: input.entityType }, { name: 'text', value: input.text }, { name: 'repliedCommentId', value: input.repliedCommentId }, { name: 'author', value: input.author }, { name: 'creationStartDate', value: input.creationStartDate }, { name: 'creationEndDate', value: input.creationEndDate }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.comments.commentAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/comments/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.comments.commentAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/comments/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.blogs.blogAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.blogs.blogAdmin');

    volo.cmsKit.admin.blogs.blogAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs' + abp.utils.buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.blogs.blogFeatureAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.blogs.blogFeatureAdmin');

    volo.cmsKit.admin.blogs.blogFeatureAdmin.getList = function(blogId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/' + blogId + '/features',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogFeatureAdmin.set = function(blogId, dto, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/' + blogId + '/features',
        type: 'PUT',
        dataType: null,
        data: JSON.stringify(dto)
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.admin.blogs.blogPostAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.admin.blogs.blogPostAdmin');

    volo.cmsKit.admin.blogs.blogPostAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogPostAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogPostAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogPostAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts' + abp.utils.buildQueryString([{ name: 'filter', value: input.filter }, { name: 'blogId', value: input.blogId }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogPostAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.admin.blogs.blogPostAdmin.removeCoverImage = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-admin/blogs/blog-posts/removeCoverImage/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

})();


