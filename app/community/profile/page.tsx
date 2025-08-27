"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  MessageCircle,
  Share2,
  Edit,
  MapPin,
  Calendar,
  LinkIcon,
  Users,
  TrendingUp,
  BookOpen,
  Code,
  Home,
  ArrowLeft,
  Camera,
  Save,
  X,
} from "lucide-react"
import PersistentCTA from "../../../components/PersistentCTA"
import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "You",
    handle: "@you",
    bio: "Passionate about cryptocurrency and decentralized finance. Building the future of money with Centra.",
    location: "San Francisco, CA",
    website: "https://centra.tech",
    joinDate: "January 2024",
    avatar: "/user-profile-illustration.png",
    coverImage: "/abstract-tech-background.png",
    followers: 1247,
    following: 892,
    posts: 156,
  })

  const [editForm, setEditForm] = useState(profile)

  const userPosts = [
    {
      id: 1,
      title: "My thoughts on Centra's roadmap",
      content: "Just read through the latest roadmap updates and I'm really excited about the upcoming features...",
      time: "2h",
      likes: 12,
      comments: 5,
      shares: 2,
      tags: ["Discussion", "Roadmap"],
    },
    {
      id: 2,
      title: "Welcome to Centra Social!",
      content:
        "Just joined the community and loving the discussions here. Looking forward to connecting with fellow crypto enthusiasts!",
      time: "1d",
      likes: 8,
      comments: 3,
      shares: 1,
      tags: ["Introduction"],
    },
  ]

  const handleSaveProfile = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditForm(profile)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <PersistentCTA />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/community"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Feed
              </Link>
              <div className="text-xl font-bold text-primary">Profile</div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                href="/team"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Team
              </Link>
              <Link
                href="/developers"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                Developers
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <Card className="mb-6">
          <div className="relative">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden">
              <img src={profile.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
              {isEditing && (
                <Button variant="secondary" size="sm" className="absolute top-4 right-4">
                  <Camera className="w-4 h-4 mr-2" />
                  Change Cover
                </Button>
              )}
            </div>

            {/* Profile Info */}
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 relative">
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-background">
                      <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-2xl">{profile.name[0]}</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="pb-4">
                    {!isEditing ? (
                      <>
                        <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
                        <p className="text-muted-foreground">{profile.handle}</p>
                        <p className="text-foreground mt-2 max-w-md">{profile.bio}</p>
                      </>
                    ) : (
                      <div className="space-y-2 min-w-[300px]">
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          placeholder="Display name"
                          className="font-bold text-lg"
                        />
                        <Input
                          value={editForm.handle}
                          onChange={(e) => setEditForm({ ...editForm, handle: e.target.value })}
                          placeholder="@username"
                        />
                        <Textarea
                          value={editForm.bio}
                          onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                          placeholder="Bio"
                          className="resize-none"
                          rows={3}
                        />
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      {!isEditing ? (
                        <>
                          {profile.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {profile.location}
                            </div>
                          )}
                          {profile.website && (
                            <div className="flex items-center gap-1">
                              <LinkIcon className="w-4 h-4" />
                              <a href={profile.website} className="text-primary hover:underline">
                                centra.tech
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Joined {profile.joinDate}
                          </div>
                        </>
                      ) : (
                        <div className="flex gap-2 w-full">
                          <Input
                            value={editForm.location}
                            onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                            placeholder="Location"
                            className="flex-1"
                          />
                          <Input
                            value={editForm.website}
                            onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                            placeholder="Website"
                            className="flex-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 sm:mt-0">
                  {!isEditing ? (
                    <Button variant="outline" onClick={() => setIsEditing(true)} className="flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={handleCancelEdit}
                        className="flex items-center gap-2 bg-transparent"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSaveProfile}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">{profile.posts}</div>
                  <div className="text-sm text-muted-foreground">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">{profile.followers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">{profile.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6 mt-6">
            {userPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{profile.name}</h3>
                          <span className="text-sm text-muted-foreground">{profile.handle}</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                            Community Member
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <h4 className="text-lg font-medium text-foreground mb-2">{post.title}</h4>
                  <p className="text-muted-foreground mb-4">{post.content}</p>

                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Share2 className="w-4 h-4 mr-1" />
                        {post.shares}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="likes" className="mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium text-foreground mb-2">No liked posts yet</h3>
                <p className="text-muted-foreground">Posts you like will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments" className="mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium text-foreground mb-2">No comments yet</h3>
                <p className="text-muted-foreground">Your comments on posts will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium text-foreground mb-2">Activity coming soon</h3>
                <p className="text-muted-foreground">Your activity timeline will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
