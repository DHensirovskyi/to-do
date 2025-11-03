import { NextResponse } from "next/server";
import connectDb from "@/app/lib/mongodb";
import { Users } from '@/models/Users'

type SafeUserResponse = { password?: string };

export async function GET() {
  try {
    await connectDb();
    const users = await Users.find().sort({ createdAt: -1 }); 
    return NextResponse.json(users);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();
    const data = await request.json();
    const newUser = await Users.create(data); 
    const userResponse = newUser.toObject() as SafeUserResponse;
    delete userResponse.password; 

    return NextResponse.json(userResponse, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    if (error instanceof Error && 'code' in error && error.code === 11000) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 409 }
        );
    }
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const data = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedUser = await Users.findByIdAndUpdate(id, data, { new: true });
    
    if (!updatedUser) {
      return NextResponse.json({ error: "User is not found" }, { status: 404 });
    }

    const userResponse = updatedUser.toObject() as SafeUserResponse;
    delete userResponse.password;

    return NextResponse.json(userResponse);
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await Users.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
