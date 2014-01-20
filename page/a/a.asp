<!--#include file="JSON_2.0.4.asp"-->
<%
dim NodesLength,Application

set objXmlDom=server.CreateObject("Microsoft.XMLDOM")
objXmlDom.async = false
fileStr = Server.MapPath("account.xml")
objXmlDom.load(fileStr)
NodesLength=objXmlDom.DocumentElement.ChildNodes.Length
response.Write(NodesLength&"<br>")

Class fuck
    Public Name
	Public Count

End Class
fuck a = new fuck()
a.Name = 1
a.Count = 2
response.Write(a.Name&"<br>")
%>

Class AppConfig
Dim XmlDom
Private Sub Class_Initialize()
Set XmlDom = Server.createobject("microsoft.xmldom")
XmlDom.load(Server.mappath("App.xml"))
End Sub
Private Sub Class_Terminate()
Set XmlDom = Nothing
End Sub
Function GetD(key)
GetD =XmlDom.getElementsByTagName(key)(0).text
End Function
Function SetD(key,val)
XmlDom.getElementsByTagName(key)(0).text = val
XmlDom.save(Server.mappath("App.xml"))
End Function
Function AddD(node,key,val)
Set newnode=XmlDom.getElementsByTagName(node)(0).appendchild(XmlDom.createelement(key))
newnode.text = val
Set newnode=Nothing
XmlDom.save(Server.mappath("App.xml"))
End Function
Function DelD(key)
On Error Resume Next
XmlDom.getElementsByTagName(key)(0).parentNode.removechild(XmlDom.getElementsByTagName(key)(0))
XmlDom.save(Server.mappath("App.xml"))
End Function
End Class
Set Config = new AppConfig
wn Config.GetD("Version")
wn Config.GetD("LatestVersion")
wn Config.GetD("Author")
wn Config.GetD("PubDate")
wn Config.GetD("Installed")
wn Config.GetD("BakPath")
' 去掉相应的注释符,即可看到 [添加 / 编辑 / 删除] 节点的效果
'Call Config.AddD("Config","test","test") ' 添加节点
'Call Config.SetD("test","test2") ' 编辑节点
'Call Config.DelD("test") ' 删除节点
Sub wn(str)
Response.Write(str)&"<br />"&vbcrlf
End Sub