def make_response(success: bool, data=None, msg="", status=200):
    res = {"success": success, "msg": msg, "data": data}
    return res, status

def success(data=None, msg="Success", status=200):
    return make_response(True, data, msg, status)

def error(msg="Error", details=None, status=400):
    res = {"success": False, "msg": msg, "details": details}
    return res, status
